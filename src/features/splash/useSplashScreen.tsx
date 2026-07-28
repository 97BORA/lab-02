import { useEffect, useState } from 'react';

export type SplashScreenPhase = 'loading' | 'intro' | 'fadeOut';

const LOADING_TEST = true;
// 로딩 화면 테스트 모드 여부

const LOADING_TIME = 3000;
const INTRO_TIME = 3000;
const FADEOUT_TIME = 3000;
// phase가 유지되는 시간(ms)

function useSplashScreen() {
    const [showSplashScreen, setShowSplashScreen] = useState(true);
    // showSplashScreen => SplashScreen을 보여줄지 말지 결정하는 state 값
    // setShowSplashScreen => showSplashScreen 값을 바꾸는 함수
    // true => 처음에는 SplashScreen을 보여준다

    const [splashScreenPhase, setSplashScreenPhase] =
        useState<SplashScreenPhase>(() => {
            // useState lazy initializer
            // 첫 렌더링 때 초기 splashScreenPhase 값을 정한다

            if (LOADING_TEST) return 'loading';
            // 테스트 모드면 무조건 loading부터 시작한다

            return document.readyState === 'complete' ? 'intro' : 'loading';
            // 이미 페이지 로딩이 끝났으면 intro부터 시작
            // 아직 로딩 중이면 loading부터 시작

            // splashScreenPhase => 현재 SplashScreen 단계 state 값
            // setSplashScreenPhase => splashScreenPhase 값을 바꾸는 함수
            // SplashScreenPhase => 'loading' | 'intro' | 'fadeOut' 중 하나만 가능
        });

    useEffect(() => {
        if (splashScreenPhase !== 'loading') return;
        // 현재 phase가 loading이 아니면 이 effect는 바로 종료한다

        if (LOADING_TEST) {
            const loadingTimerId = window.setTimeout(() => {
                setSplashScreenPhase('intro');
                // LOADING_TIME 뒤에 phase를 intro로 바꾼다
            }, LOADING_TIME);

            return () => {
                window.clearTimeout(loadingTimerId);
                // effect가 정리될 때 예약된 loading 타이머를 취소한다
            };
        }
    }, [splashScreenPhase]);
    // splashScreenPhase 값이 바뀔 때마다 이 effect를 다시 확인한다

    useEffect(() => {
        if (splashScreenPhase !== 'intro') return;

        const introTimerId = window.setTimeout(() => {
            setSplashScreenPhase('fadeOut');
        }, INTRO_TIME);

        return () => {
            window.clearTimeout(introTimerId);
        };
    }, [splashScreenPhase]);

    useEffect(() => {
        if (splashScreenPhase !== 'fadeOut') return;

        const fadeOutTimerId = window.setTimeout(() => {
            setShowSplashScreen(false);
            // FADEOUT_TIME 뒤에 SplashScreen을 화면에서 제거한다
        }, FADEOUT_TIME);

        return () => {
            window.clearTimeout(fadeOutTimerId);
        };
    }, [splashScreenPhase]);

    return {
        // showSplashScreen 값과 splashScreenPhase 값을 담은 객체를 반환한다
        showSplashScreen,
        splashScreenPhase,
    };
}

export default useSplashScreen;

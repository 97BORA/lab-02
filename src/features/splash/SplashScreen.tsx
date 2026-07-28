import { useEffect } from 'react';
// React에서 useEffect hook을 가져온다

import type { SplashScreenPhase } from '@/features/splash/useSplashScreen';
// SplashScreenPhase 타입만 가져온다
// 실제 값을 가져오는 것이 아니라 타입 규칙만 가져온다

type SplashScreenProps = {
    phase: SplashScreenPhase;
};
// SplashScreen 컴포넌트가 받을 props 타입을 정한다
// phase prop은 'loading' | 'intro' | 'fadeOut' 중 하나만 가능하다

function SplashScreen({ phase }: SplashScreenProps) {
    // SplashScreen 컴포넌트
    // props 객체에서 phase 값을 꺼내서 사용한다

    useEffect(() => {
        // 이 effect는 SplashScreen 컴포넌트가 처음 화면에 나타난 뒤 실행된다
        // dependency 배열이 [] 이므로 처음 한 번만 실행된다

        window.clearTimeout(window.__initialLoaderTimers?.[0]);
        // index.html에서 예약해 둔 initial-loader 타이머를 취소한다
        // ?. 는 값이 없으면 에러를 내지 않고 undefined를 반환한다

        const initialLoader = document.getElementById('initial-loader');
        // HTML 문서에서 id가 initial-loader인 요소를 찾는다

        if (!initialLoader) return;
        // initial-loader 요소가 없으면 여기서 effect를 종료한다

        initialLoader.classList.add('initial-loader--hidden');
        // initial-loader 요소에 initial-loader--hidden 클래스를 추가한다
        // CSS에서 이 클래스를 이용해 초기 로더를 숨기는 효과를 줄 수 있다

        const removeTimerId = window.setTimeout(() => {
            initialLoader.remove();
            // 300ms 뒤에 initial-loader 요소를 HTML 문서에서 완전히 제거한다
        }, 300);

        return () => {
            window.clearTimeout(removeTimerId);
            // effect가 정리될 때 예약된 remove 타이머를 취소한다
        };
    }, []);

    return (
        <section
            // 기본 className은 항상 splash-screen이다.
            // phase가 'fadeOut'이면 fade-out 클래스도 추가한다.
            // phase가 'fadeOut'이 아니면 추가 클래스는 없다.
            className={`splash-screen ${phase === 'fadeOut' ? 'fade-out' : ''}`}
        >
            {/* phase가 'loading'이면 점 3개 로딩 화면을 보여준다. */}
            {/* phase가 'loading'이 아니면 SplashScreen section 내용을 보여준다. */}
            {phase === 'loading' ? (
                <div className="splash-dots">
                    <span />
                    <span />
                    <span />
                </div>
            ) : (
                <div className="splash-content">
                    <h1>SplashScreen section</h1>
                </div>
            )}
        </section>
    );
}

export default SplashScreen;

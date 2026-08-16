import { useEffect, useState } from 'react';

export type PageLoaderPhase = 'loading' | 'intro' | 'fadeOut';

// TEST
const FORCE_LOADING = true;

// TIME
const LOADING_TIME = 3000;
const INTRO_TIME = 3000;
const FADEOUT_TIME = 3000;

function usePageLoader() {
    const [showPageLoader, setShowPageLoader] = useState(true);
    const [pageLoaderPhase, setPageLoaderPhase] = useState<PageLoaderPhase>(
        () => {
            if (FORCE_LOADING) return 'loading';

            return document.readyState === 'complete' ? 'intro' : 'loading';
        },
    );

    // loading
    useEffect(() => {
        if (pageLoaderPhase !== 'loading') return;

        if (FORCE_LOADING) {
            const loadingTimerId = window.setTimeout(() => {
                setPageLoaderPhase('intro');
            }, LOADING_TIME);

            return () => {
                window.clearTimeout(loadingTimerId);
            };
        }

        // 이미 load가 끝났다면 이벤트를 기다리지 않고 intro로 넘긴다.
        // effect가 실행되자마자 state를 바꿀 거면, 그 state가 정말 effect에 있어야 하나? 초기값 계산이나 이벤트 콜백, 타이머 콜백으로 처리하는 게 더 맞지 않나?
        if (document.readyState === 'complete') {
            const readyTimerId = window.setTimeout(() => {
                setPageLoaderPhase('intro');
                // // setTimeout 0은 effect 본문에서 직접 setState를 호출하지 않기 위한 처리다.
            }, 0);

            return () => {
                // // effect가 정리될 때 예약된 타이머를 취소한다.
                window.clearTimeout(readyTimerId);
            };
        }

        const handleLoad = () => {
            setPageLoaderPhase('intro');
        };

        window.addEventListener('load', handleLoad);

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, [pageLoaderPhase]);

    // intro
    useEffect(() => {
        if (pageLoaderPhase !== 'intro') return;

        const introTimerId = window.setTimeout(() => {
            setPageLoaderPhase('fadeOut');
        }, INTRO_TIME);

        return () => {
            window.clearTimeout(introTimerId);
        };
    }, [pageLoaderPhase]);

    // fadeOut
    useEffect(() => {
        if (pageLoaderPhase !== 'fadeOut') return;

        const fadeOutTimerId = window.setTimeout(() => {
            setShowPageLoader(false);
        }, FADEOUT_TIME);

        return () => {
            window.clearTimeout(fadeOutTimerId);
        };
    }, [pageLoaderPhase]);

    // return
    return {
        showPageLoader,
        pageLoaderPhase,
    };
}

export default usePageLoader;

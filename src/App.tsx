import SplashScreen from '@/features/splash/SplashScreen';
import useSplashScreen from '@/features/splash/useSplashScreen';

import './App.css';
function App() {
    const { showSplashScreen, splashScreenPhase } = useSplashScreen();
    return (
        <>
            {showSplashScreen && <SplashScreen phase={splashScreenPhase} />}
            <main>
                <h1>Get started</h1>
            </main>
        </>
    );
}

export default App;

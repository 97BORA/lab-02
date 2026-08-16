import Loader from 'examples01/features/pageLoader/Loader';
import usePageLoader from 'examples01/features/pageLoader/usePageLoader';

function App() {
    const { showPageLoader, pageLoaderPhase } = usePageLoader();
    return (
        <>
            {showPageLoader && <Loader phase={pageLoaderPhase} />}
            <main>
                <h1>rehearsal-01</h1>
            </main>
        </>
    );
}

export default App;

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from 'examples02/App.example';

import 'examples02/index.example.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);

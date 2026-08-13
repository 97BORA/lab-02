import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import App from 'examples01/App.example';

import 'examples01/index.example.css';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <App />
    </StrictMode>,
);

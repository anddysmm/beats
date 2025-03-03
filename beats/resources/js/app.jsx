import './bootstrap';
import '../css/app.css';
import MusicPlayer from './MusicPlayer';
import { store } from './Pages/reducer/store';

import { createRoot } from 'react-dom/client'; // Importar createRoot desde react-dom/client
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';
import React from 'react';
import { Provider } from 'react-redux';

const appName = window.document.getElementsByTagName('title')[0]?.innerText || 'Laravel';

// Crear el root para la aplicación Inertia
createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);
        root.render(
            <Provider store={store}>
                    <App {...props} />
                    <MusicPlayer />
            </Provider>);
    },
    progress: {
        color: '#4B5563',
    },
});



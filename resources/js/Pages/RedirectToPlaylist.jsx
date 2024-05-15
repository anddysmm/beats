import React, { useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

const RedirectToPlaylist = () => {
    useEffect(() => {
        const timer = setTimeout(() => {
            Inertia.visit('/playlists');
        }, 2000); // Redirige después de 2 segundos

        return () => clearTimeout(timer); // Limpia el temporizador si el componente se desmonta antes de la redirección
    }, []);

    return (
        <div className="redirect-container">
            <p>Redirigiendo a Playlists...</p>
        </div>
    );
};

export default RedirectToPlaylist;

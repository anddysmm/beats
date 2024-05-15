import React, { useEffect, useState } from 'react';
import AlbumCard from './AlbumCard'; // Suponiendo que el componente AlbumCard esté en el mismo directorio
import { Inertia } from '@inertiajs/inertia';

const AlbumList = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(() => {
        // Obtener los álbumes desde el servidor
        Inertia.get('/albums').then(response => {
            setAlbums(response.data);
        });
    }, []);

    return (
        <div className="row">
            {albums.map(album => (
                <AlbumCard key={album.id} album={album} />
            ))}
        </div>
    );
};

export default AlbumList;


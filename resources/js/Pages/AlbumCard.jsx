import React from 'react';
import { Link } from '@inertiajs/react';

const AlbumCard = ({ album }) => {
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5" key={album.id}>
            <Link href={'/albums/' + album.id}>
                <div className="card h-auto">
                    <img className="card-img-top" src="https://media.istockphoto.com/id/1500490255/vector/paper-cover-with-worn-dirty-scratches-for-retro-cd-vinyl-music-album-grunge-texture-mockup.jpg?s=612x612&w=0&k=20&c=mNeHwdIWmXNXi-Rvq53psdee_5xQidKcEcjrxZQXPHk=" alt={album.name} title={album.name} />
                    <div className="card-body">
                        <h5 className="card-title">{album.name}</h5>
                        <p className="card-text">Release Date: {album.releaseDate}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AlbumCard;

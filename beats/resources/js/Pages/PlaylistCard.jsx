import React from 'react';
import { Link } from '@inertiajs/react';

const PlaylistCard = ({ playlist }) => {
    console.log(playlist)
    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5" key={playlist.id} >
                <div className="card h-auto">
                <Link href={'/playlist/'+ playlist.id}>
                    <img className="card-img-top" src={playlist.urlCover != null ? playlist.urlCover:"/storage/images/playIcon.jpg"} alt={playlist.name} title={playlist.name} />
                </Link>
                    <div className="card-body d-flex flex-wrap justify-content-between">
                        <h5 className="card-title">{playlist.name}</h5>
                        <Link href={'/playlist/remove/' + playlist.id} className="btn btn-danger">Remove</Link>
                    </div>
                </div>
            
        </div>
    );
};

export default PlaylistCard;

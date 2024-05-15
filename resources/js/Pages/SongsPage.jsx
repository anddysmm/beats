import React from 'react';
import SongCard from './SongCard';
import Nav from './Nav';

const SongsPage = (props) => {
    return (
        <div className="col-sm-9">
            <Nav auth={props.auth}/>
            <div className="container mt-3">
                <p className="h4">Canciones</p>
                <div className="row d-flex flex-wrap">
                    {props.songs.map(song => (
                        <SongCard key={song.id} song={song} playlists={props.playlists} auth={props.auth}/>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SongsPage;

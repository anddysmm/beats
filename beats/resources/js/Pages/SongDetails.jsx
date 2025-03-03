import React from 'react';
import { useEffect } from 'react';
import Nav from './Nav';

const SongDetails = ( props ) => {
    return (
        <div className="col-sm-9 ">
            <Nav auth={props.auth}/>
            <div className="d-flex mt-3 pt-3 align-items-center justify-content-center">
                <div className="bg-dark p-3 details" >
                    <div><img className="mb-3 w-100" style={{ maxWidth: '100%' }} src={props.song.urlCover} alt={props.song.name} />
                    <p className="h2 text-light">{props.song.name}</p></div>
                    {props.song.album.artists.map(artist => (
                        <p className="h5 text-light">
                        {artist.artistName}</p>
                    ))}
                </div>
            </div>
            
        </div>
    );
};

export default SongDetails;

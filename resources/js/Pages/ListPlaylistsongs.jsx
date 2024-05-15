import React from 'react';
import PlaylistItem from './PlaylistItem';

const ListPlaylistSongs = (props) => {
    return (

        <div className="col-sm-9">
            <div className="container">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="pt-4 ps-4">
                        <h3 className="mb-4">{props.playlist.name}</h3>
                        <div className="scroll-container pr-4  mb-5 pb-5">
                            {props.songs.map((song, index) => (
                                <PlaylistItem key={index} song={song} index={index} playlistId={props.playlist.id} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListPlaylistSongs;

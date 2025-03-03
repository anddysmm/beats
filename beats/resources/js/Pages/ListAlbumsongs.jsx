import React from 'react';
import AlbumItem from './AlbumItem';

const ListAlbumSongs = (props) => {
    return (
        
        <div className="col-sm-9">
            <div className="container">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden">
                    <div className="pt-4 ps-4">
                        <h3 className="mb-4">{props.album.name}</h3>
                        <div className="scroll-container pr-4  mb-5 pb-5">
                        {props.songs.map((song,index) => (
                            <AlbumItem song={song} index={index} albumId={props.album.id}/>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListAlbumSongs;

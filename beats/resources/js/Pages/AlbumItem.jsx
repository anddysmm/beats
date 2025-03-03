import React from "react";
import { Link } from "@inertiajs/react";

const AlbumItem = ( props ) => {
    return (
        <Link href={"/song/" + props.song.id+"?album="+ props.albumId+"&current="+(props.index+1) }>
        <div className="d-flex text-center align-items-center  justify-content-between">
            <div className="align-items-center row">
                <div className=" bg-light rounded-md  align-items-center justify-content-center m-4">
                    <img src={props.song.urlCover} className="imagePlaylist" alt={props.song.name} title={props.song.name} />
                </div>
                <div>
                    <h4 className="text-lg font-medium">{props.song.name}</h4>
                    <p className="text-secondary">{props.song.releaseDate}</p>
                </div>
            </div>
        </div>
        </Link>
    );
};

export default AlbumItem;

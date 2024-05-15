import React, { useEffect } from 'react';
import SongDetails from './SongDetails';
import Sidebar from './Sidebar';
import { addSong, resetSongs } from './reducer/songSlice';
import { setCurrentSong } from './reducer/currentSlice';
import { useDispatch, useSelector } from 'react-redux';


const Song = (props) => {
    const dispatch = useDispatch();
    const current = useSelector((state) => state.current.current);
    const song = useSelector((state) => state.song[current]);
    useEffect(() => {
        dispatch(setCurrentSong(props.current-1))
        dispatch(resetSongs());
        dispatch(addSong(props.songs));
    }, [props.songs]);
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar auth={props.auth} />
                {song && <SongDetails auth={props.auth} song={song} />}
            </div>
        </div>
    );
};

export default Song;

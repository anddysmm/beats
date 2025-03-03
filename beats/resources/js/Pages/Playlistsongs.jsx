import ListPlaylistSongs from './ListPlaylistsongs'
import Sidebar from './Sidebar';

const Playlistsongs = ({playlistSongs ,auth,playlist}) => {
    console.log(playlistSongs)
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar auth={auth}/>
                <ListPlaylistSongs auth={auth} songs={playlistSongs} playlist={playlist}/>
            </div>
        </div>
    );
};

export default Playlistsongs;
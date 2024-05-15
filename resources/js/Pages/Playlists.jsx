import Listplaylists from './Listplaylists';
import Sidebar from './Sidebar';

const Playlist = ({playlists, auth}) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar auth={auth}/>
                <Listplaylists auth={auth} playlists={playlists} />
            </div>
        </div>
    );
};

export default Playlist;
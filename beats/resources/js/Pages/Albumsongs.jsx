import ListAlbumSongs from './ListAlbumsongs'
import Sidebar from './Sidebar';

const Albumsongs = ({albumSongs ,auth,album}) => {
    console.log(albumSongs)
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar auth={auth}/>
                <ListAlbumSongs auth={auth} songs={albumSongs} album={album}/>
            </div>
        </div>
    );
};

export default Albumsongs;
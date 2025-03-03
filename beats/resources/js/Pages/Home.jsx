import SongsPage from './SongsPage';
import Sidebar from './Sidebar';
import { Head } from '@inertiajs/react';


const Home = ({auth, songs,playlists}) => {
    
    return (
        <div className="container-fluid">
            <Head title="Home" />
            <div className="row">
                <Sidebar auth={auth} />
                <SongsPage auth={auth} songs={songs} playlists={playlists} />
            </div>
        </div>
    );
};

export default Home;

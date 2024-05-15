import React from 'react';
import Sidebar from './Sidebar';
import '../../css/styles.css';
import Nav from './Nav';
import SongCard from './SongCard';

const Artist = (props) => {
    console.log(props.songs)
    const { apidata } = props;
    return (
        <div className="container-fluid scroll-container">
            <div className="row">
                <Sidebar auth={props.auth} />
                <div className="col col-sm-9 ">
                    <Nav auth={props.auth} />
                    <div className="p-5 bg-primary text-white text-center background-image-div">
                        <img src={props.artist.imgUrl} className="rounded-circle" alt="Billie Eilish's Photo"></img><br></br>
                        <h1 >{props.artist.artistName}</h1>
                    </div>
                    <div className="container mt-3">
                        <p className="h4">Songs</p>
                        <div className="row d-flex flex-wrap">
                            {props.songs && props.songs.map(song => (
                                <SongCard key={song.id} song={song} playlists={props.playlists} />
                            ))}
                        </div>
                    </div>
                    <div className="upcoming-events-container ">
                        <h1 className="text-center">Next concerts</h1>
                        <div className="row">
                            {apidata && apidata._embedded.events
                                .filter(evento => evento.name.toLowerCase().includes(props.artist.artistName.toLowerCase()))
                                .map(evento => (
                                    <div className="col-md-6" key={evento.id}>
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <h5 className="card-title">{evento.name}</h5>
                                                <p className="card-text"><strong>Artist:</strong> {evento.artist}</p>
                                                <p className="card-text"><strong>Date:</strong> {evento.dates.start.localDate}</p>
                                                <p className="card-text"><strong>Location:</strong> {evento.dates.timezone}</p>
                                                <a href={evento.url} className="btn btn-primary">Buy Tickets</a>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Artist;
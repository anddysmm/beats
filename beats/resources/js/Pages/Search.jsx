import React from 'react';
import Sidebar from './Sidebar';
import '../../css/styles.css';
import NavSearch from './NavSearch';
import SongCard from './SongCard';
import { Link } from '@inertiajs/react';

const Search = (props) => {
    return (
        <div className="container-fluid">
            <div className="row">
                <Sidebar auth={props.auth} />
                <div className="col col-sm-9">
                    <NavSearch auth={props.auth} />
                    <br />
                    <div className="container mt-3">
                        {props.songs && props.songs.length > 0 && (
                            <>
                                <p className="h4">Songs</p>
                                <div className="row d-flex flex-wrap">
                                    {props.songs && props.songs.map(song => (
                                        <SongCard key={song.id} song={song} playlists={props.playlists} />
                                    ))}
                                </div>
                            </>
                        )}
                        {props.albums && props.albums.length > 0 && (
                            <>
                                <p className="h4">Albums</p>
                                <div className="row">
                                    {props.albums && props.albums.map(album => (
                                        <div className="col-sm-3 mb-5">
                                            <Link href={'/album/' + album.id}>
                                                <div className="card h-auto">
                                                    <a href="#"><img className="card-img-top" src="https://media.istockphoto.com/id/1500490255/vector/paper-cover-with-worn-dirty-scratches-for-retro-cd-vinyl-music-album-grunge-texture-mockup.jpg?s=612x612&w=0&k=20&c=mNeHwdIWmXNXi-Rvq53psdee_5xQidKcEcjrxZQXPHk=" alt="" title="onTopOfTheWorld" /></a>
                                                </div>
                                            </Link>
                                            <div className="card-body d-flex flex-wrap justify-content-between">
                                                <h5 className="card-title">{album.name}</h5>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </>

                        )}
                        {props.artists && props.artists.length > 0 && (
                            <>
                                <p className="h4">Artists</p>
                                <div className="row">
                                    {props.artists  && props.artists.map(artist => (<div className="col-sm-3 mb-5" >
                                        <Link href={'/artist/' + artist.artistName}>
                                            <div className="card h-auto">
                                                <a href="#"><img className="card-img-top" src={artist.imgUrl} alt="" title="onTopOfTheWorld" /></a>
                                            </div>
                                        </Link>
                                        <div className="card-body d-flex flex-wrap justify-content-between">
                                            <h5 className="card-title">{artist.artistName}</h5>
                                        </div>
                                    </div>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;

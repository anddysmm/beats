import React from "react";
import { Link, useForm } from "@inertiajs/react";

const SongCard = ({ song, playlists }) => {
    const { data, setData, post, reset } = useForm({
        id: playlists.length > 0 ? playlists[0].id : '',
        song_id: song.id
    });

    const handleInputChange = (e) => {
        setData(e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route('add_playlist'), {
            onSuccess: () => {
                reset();
                // Opcional: cerrar el modal después de la sumisión exitosa
                document.getElementById(`closeModal${song.id}`).click();
            }
        });
    };

    return (
        <div className="col-lg-3 col-md-4 col-sm-6 mb-5" key={song.id}>
            <Link href={`/song/${song.id}?current=1`}>
                <div className="card h-auto">
                    <img
                        className="card-img-top"
                        src={song.urlCover}
                        alt={song.title}
                        title={song.title}
                    />
                </div>
            </Link>
            <div className="card-body d-flex flex-wrap justify-content-between">
                <button
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="modal"
                    data-bs-target={`#myModal${song.id}`}
                >
                    Add Playlist
                </button>
                <div className="modal" id={`myModal${song.id}`}>
                    <div className="modal-dialog mt-5 pt-5">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title">
                                    Add the song to a playlist
                                </h4>
                                <button
                                    type="button"
                                    className="btn-close"
                                    data-bs-dismiss="modal"
                                    id={`closeModal${song.id}`}
                                ></button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3 mt-3">
                                        <label htmlFor="id" className="form-label">
                                            Playlist:
                                        </label>
                                        <select
                                            className="form-select"
                                            name="id"
                                            value={data.id}
                                            onChange={handleInputChange}
                                        >
                                            {playlists.map(playlist => (
                                                <option key={playlist.id} value={playlist.id}>
                                                    {playlist.name}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <button
                                        type="submit"
                                        className="btn btn-primary"
                                    >
                                        Submit
                                    </button>
                                </form>
                            </div>
                            <div className="modal-footer">
                                <button
                                    type="button"
                                    className="btn btn-danger"
                                    data-bs-dismiss="modal"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SongCard;

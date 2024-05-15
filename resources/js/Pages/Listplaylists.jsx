import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import PlaylistCard from './PlaylistCard';
import Nav from './Nav';

const Listplaylists = (props) => {
  const [playlistName, setPlaylistName] = useState('');

  const handleSubmit = () => {
    // Lógica para enviar la solicitud
    // ...

    // Cerrar el modal
    const modal = document.getElementById('myModal');
    const modalBootstrap = bootstrap.Modal.getInstance(modal);
    modalBootstrap.hide();
  };

  return (
    <div className="col-sm-9">
      <Nav auth={props.auth} />
      <div className="container mt-3">
        <div className="d-flex flex-row justify-content-between ">
          <p className="h4">Playlists</p>
          <button
            type="button"
            className="btn btn-primary mb-3"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
          >
            Create Playlist
          </button>
        </div>
        <div className="modal" id="myModal">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h4 className="modal-title">Create a new Playlist</h4>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                ></button>
              </div>
              <div className="modal-body">
                <form onSubmit={(e) => e.preventDefault()}>
                  <div className="mb-3 mt-3">
                    <label htmlFor="name" className="form-label">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="Enter the name of the playlist"
                      name="name"
                      value={playlistName}
                      onChange={(e) => setPlaylistName(e.target.value)}
                    />
                  </div>
                </form>
                <Link
                  as="button"
                  className="btn btn-primary"
                  href="/playlists/add"
                  method="post"
                  onClick={handleSubmit}
                  data={{ name: playlistName }}
                >
                  Submit
                </Link>
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
        <div className="row d-flex flex-wrap">
          {props.playlists.map((playlist) => (
            <PlaylistCard key={playlist.id} playlist={playlist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listplaylists;

import React from 'react';
import Nav from '../Nav';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

const AddSongForm = (props) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    album_id: '',
    name: '',
    releaseDate: '', // Cambiado de releaseYear a releaseDate
    urlSong: null, // Archivo de la canción
    urlCover: null // Archivo de la portada
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    const newValue = type === 'file' ? files[0] : value;
    setData(name, newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });

    post('/admin/addSong', formData, {
      onSuccess: () => reset(),
    });
  };

  return (
    <div>
      <Nav auth={props.auth} />
      <div className="container mt-5 d-flex flex-column align-items-center">
        <div className="col-md-6 mx-auto border p-5">
          <h1 className="display-6 text-center mb-4">Add Song</h1>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="mb-3">
              <label htmlFor="album_id" className="form-label">Album:</label>
              <select
                className="form-control"
                id="album_id"
                name="album_id"
                value={data.album_id}
                onChange={handleChange}
              >
                <option value="">Select an album</option>
                {props.albums.map(album => (
                  <option key={album.id} value={album.id}>
                    {album.name}
                  </option>
                ))}
              </select>
              <InputError message={errors.album_id} className="mt-2" />
            </div>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Song Name:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={data.name}
                onChange={handleChange}
              />
              <InputError message={errors.name} className="mt-2" />
            </div>
            <div className="mb-3">
              <label htmlFor="releaseDate" className="form-label">Release Year:</label>
              <input
                type="number"
                className="form-control"
                id="releaseDate"
                name="releaseDate"
                value={data.releaseDate}
                onChange={handleChange}
                placeholder="e.g., 2022"
                min="1900" // Rango de validación del año
                max={new Date().getFullYear()} // Año máximo actual
              />
              <InputError message={errors.releaseDate} className="mt-2" />
            </div>
            <div className="mb-3">
              <label htmlFor="urlSong" className="form-label">Song File:</label>
              <input
                type="file"
                className="form-control"
                id="urlSong"
                name="urlSong"
                onChange={handleChange}
              />
              <InputError message={errors.urlSong} className="mt-2" />
            </div>
            <div className="mb-3">
              <label htmlFor="urlCover" className="form-label">Cover Image:</label>
              <input
                type="file"
                className="form-control"
                id="urlCover"
                name="urlCover"
                onChange={handleChange}
              />
              <InputError message={errors.urlCover} className="mt-2" />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={processing}>
              Add Song
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddSongForm;

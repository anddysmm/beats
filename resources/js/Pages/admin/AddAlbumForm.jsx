import React from 'react';
import Nav from '../Nav';
import InputError from '@/Components/InputError';
import { useForm } from '@inertiajs/react';

const AddAlbumForm = (props) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    releaseDate: '', // Cambiado de releaseYear a releaseDate
    artistIds: [] // Campo para los IDs de los artistas
  });

  const handleChange = (e) => {
    const { name, value, type, options } = e.target;

    if (type === 'select-multiple') {
      const selectedOptions = Array.from(options).filter(option => option.selected).map(option => option.value);
      setData(name, selectedOptions);
    } else {
      setData(name, value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    post('/admin/addAlbum', {
      onSuccess: () => reset(),
    });
  };

  return (
    <div>
      <Nav auth={props.auth} />
      <div className="container mt-5 d-flex flex-column align-items-center">
        <div className="col-md-6 mx-auto border p-5">
          <h1 className="display-6 text-center mb-4">Add Album</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Album Name:</label>
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
              <label htmlFor="artistIds" className="form-label">Artists:</label>
              <select
                multiple
                className="form-control"
                id="artistIds"
                name="artistIds"
                value={data.artistIds}
                onChange={handleChange}
              >
                {props.artists.map(artist => (
                  <option key={artist.id} value={artist.id}>
                    {artist.name} {artist.surname}
                  </option>
                ))}
              </select>
              <InputError message={errors.artistIds} className="mt-2" />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={processing}>
              Add Album
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddAlbumForm;

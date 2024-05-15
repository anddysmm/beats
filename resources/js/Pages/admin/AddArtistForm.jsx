import React, { useEffect } from 'react';
import Nav from '../Nav';
import InputError from '@/Components/InputError';
import { Head, Link, useForm } from '@inertiajs/react';

const AddArtistForm = (props) => {
  const { data, setData, post, processing, errors, reset } = useForm({
    name: '',
    surname: '',
    nationality: '',
    artistName: '',
    image: null // Nuevo campo para la imagen
  });

  useEffect(() => {
    return () => {
      reset();
    };
  }, []);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    const newValue = name === 'image' ? files[0] : value;
    setData(name, newValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formDataToSend = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });

    post('/admin/addArtist', {
      data: formDataToSend,
      onSuccess: () => {
        reset();
      }
    });
  };

  return (
    <div>
      <Nav auth={props.auth} />
      <div className="container mt-5 d-flex flex-column align-items-center">
        <div className="col-md-6 mx-auto border p-5">
          <h1 className="display-6 text-center mb-4">Add Artist</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name:</label>
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
              <label htmlFor="surname" className="form-label">Surname:</label>
              <input
                type="text"
                className="form-control"
                id="surname"
                name="surname"
                value={data.surname}
                onChange={handleChange}
              />
              <InputError message={errors.surname} className="mt-2" />
            </div>
            <div className="mb-3">
              <label htmlFor="nationality" className="form-label">Nationality:</label>
              <input
                type="text"
                className="form-control"
                id="nationality"
                name="nationality"
                value={data.nationality}
                onChange={handleChange}
              />
              <InputError message={errors.nationality} className="mt-2" />
            </div>
            <div className="mb-3">
              <label htmlFor="artistName" className="form-label">Artist Name:</label>
              <input
                type="text"
                className="form-control"
                id="artistName"
                name="artistName"
                value={data.artistName}
                onChange={handleChange}
              />
              <InputError message={errors.artistName} className="mt-2" />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image:</label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image"
                onChange={handleChange}
              />
              <InputError message={errors.image} className="mt-2" />
            </div>
            <button type="submit" className="btn btn-primary w-100" disabled={processing}>
              Add Artist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddArtistForm;

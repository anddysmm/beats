import React, { useEffect } from 'react';
import { Inertia } from '@inertiajs/inertia';

const RedirectToSong = ({ song }) => {
  useEffect(() => {
    // Redirigir a la URL de la canción al montar el componente
    Inertia.visit(route('home'));
  }, []);

  // Puedes mostrar un mensaje de carga mientras se redirige
  return <div>Cargando...</div>;
};

export default RedirectToSong;

import React, { useEffect, useState, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { setCurrentSong } from './Pages/reducer/currentSlice';
import { faPlay, faPause, faStop, faForward, faBackward, faVolumeUp } from '@fortawesome/free-solid-svg-icons';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const auth = useSelector((state) => state.user.auth);
  const [currentTime, setCurrentTime] = useState(0);
  const songs = useSelector((state) => state.song);
  const current = useSelector((state) => state.current.current);
  const dispatch = useDispatch();
  const audioRef = useRef(new Audio(song?.urlSong || ''));
  const audio = audioRef.current;
  const [volume, setVolume] = useState(100);

  var song = songs[current];

  const playMusic = () => {
    setIsPlaying(true);
    audio.play();
  };

  const pauseMusic = () => {
    setIsPlaying(false);
    audio.pause();
  };

  const stopMusic = () => {
    setIsPlaying(false);
    audio.pause();
    audio.currentTime = 0;
  }; 

  const handleScroll = (e) => {
    const newTime = (audio.duration / 100) * e.target.value;
    setCurrentTime(newTime);
    audio.currentTime = newTime;
  };

  useEffect(() => {
    if (song) { // Verifica si song está definido
      audio.src = song.urlSong;
      playMusic();
    }
  }, [song]);

  useEffect(() => {
    const updateCurrentTime = () => {
      setCurrentTime(audio.currentTime);
    };
    audio.addEventListener('timeupdate', updateCurrentTime);

    return () => {
      audio.removeEventListener('timeupdate', updateCurrentTime);
    };
  }, [audio]);

  const handleVolumeChange = (e) => {
    const newVolume = e.target.value;
    setVolume(newVolume);
    audio.volume = newVolume / 100;
  };
  useEffect(() => {
    if (!auth) {
      stopMusic();
    } else {
      playMusic();
    }
  }, [auth]);
  const incrementCurrent = () => {
    // Obtener el siguiente índice de la canción
    const nextIndex = current >= songs.length - 1 ? 0 : current + 1;
    
    // Dispatch para actualizar el estado current.current
    dispatch(setCurrentSong(nextIndex));
  };
  useEffect(() => {
    const handleSongEnd = () => {
      incrementCurrent();
    };

    audio.addEventListener('ended', handleSongEnd);

    return () => {
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, [audio, current, songs.length]);
  const backSong = () => {
    // Verificar si el tiempo actual de reproducción es menor o igual a 3 segundos y no estamos en la primera canción
    if (audio.currentTime <= 3 && current > 0) {
      // Retroceder a la canción anterior
      const nextIndex = current - 1;
      dispatch(setCurrentSong(nextIndex));
    } else {
      // Si no, simplemente ir al principio de la canción actual
      stopMusic();
      playMusic();
    }
  };
  useEffect(() => {
    const handleSongEnd = () => {
      incrementCurrent();
    };
  
    audio.addEventListener('ended', handleSongEnd);
  
    return () => {
      audio.removeEventListener('ended', handleSongEnd);
    };
  }, []);
  
  if (!auth || songs.length == 0) {

    return (
      <>
      </>
    )
  } else {
    return (
      <div className="d-flex audioDiv w-100 fixed-bottom pt-2 pb-2 bg-dark">
        <div className="containersMusic d-flex text-light">
          <img className="musicImage" src={song.urlCover} alt="Cover" />
          <div>
            <strong className="ms-2">{song.name}</strong>
            <p></p>
          </div>
        </div>
        <div className="containersMusic d-flex row justify-content-around">
          <div className="w-100 d-flex justify-content-around">
            <button className="btn btn-transparent" onClick={stopMusic}><FontAwesomeIcon icon={faStop} style={{ color: 'white' }} /></button>
            <button className="btn btn-transparent" onClick={backSong}><FontAwesomeIcon icon={faBackward} style={{ color: 'white' }} /></button>
            {isPlaying ? (
              <button className="btn btn-transparent" onClick={pauseMusic}><FontAwesomeIcon icon={faPause} style={{ color: 'white' }} /></button>
            ) : (
              <button className="btn btn-transparent" onClick={playMusic}><FontAwesomeIcon icon={faPlay} style={{ color: 'white' }} /></button>
            )}
            <button className="btn btn-transparent" onClick={incrementCurrent}><FontAwesomeIcon icon={faForward} style={{ color: 'white' }} /></button>
          </div>
          <input type="range" value={(currentTime / audio.duration) * 100} onChange={handleScroll} min="0" max="100" step="0.01" className="pogressBar" />
        </div>
        <div className="containersMusic d-flex justify-content-end elementoMovil">
          <FontAwesomeIcon className='me-1' style={{ color: 'white' }} icon={faVolumeUp} />
          <input
            type="range"
            value={volume}
            onChange={handleVolumeChange}
            min="0"
            max="100"
            step="1"
          />
        </div>
      </div>
    );
  }
};

export default MusicPlayer;

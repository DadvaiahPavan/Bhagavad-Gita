import React, { useState, useRef, useEffect } from 'react';
import { IoMusicalNotes } from 'react-icons/io5';
import { TbMusicOff } from 'react-icons/tb';
import { useTheme } from '../context/ThemeContext';

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const { darkMode } = useTheme();

  useEffect(() => {
    audioRef.current = new Audio('/krishna-flute.mp3');
    audioRef.current.loop = true;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(error => {
          console.error('Error playing audio:', error);
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <button
      onClick={togglePlay}
      className={`fixed bottom-4 right-4 z-50 p-4 rounded-full 
        ${darkMode ? 'bg-orange-500 hover:bg-orange-600' : 'bg-orange-100 hover:bg-orange-200'} 
        ${darkMode ? 'text-white' : 'text-orange-600'}
        shadow-lg transition-all duration-300 hover:scale-110 
        flex items-center justify-center
        border-2 ${darkMode ? 'border-orange-400' : 'border-orange-300'}`}
      aria-label={isPlaying ? 'Pause Krishna Flute' : 'Play Krishna Flute'}
      title={isPlaying ? 'Pause Krishna Flute' : 'Play Krishna Flute'}
    >
      {isPlaying ? (
        <IoMusicalNotes className="w-6 h-6 animate-bounce" />
      ) : (
        <TbMusicOff className="w-6 h-6" />
      )}
      <span 
        className={`absolute -top-1 -right-1 w-2 h-2 rounded-full
          ${isPlaying ? 'bg-green-400' : 'bg-red-400'} 
          ${isPlaying ? 'animate-ping' : ''}`}
      />
    </button>
  );
};

export default MusicPlayer;

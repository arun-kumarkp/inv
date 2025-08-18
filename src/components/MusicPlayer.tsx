import { useState, useRef, useEffect } from 'react';
import { Button } from './ui/button';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Resolve music path relative to the deployed base (GitHub Pages safe)
  const musicUrl = new URL('music.mp3', import.meta.env.BASE_URL).toString();
  const playlist = [
    { title: "Wedding Song 1", src: musicUrl },
  ];

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => {
      const nextSong = (currentSong + 1) % playlist.length;
      setCurrentSong(nextSong);
    };

    audio.addEventListener('ended', handleEnded);
    return () => audio.removeEventListener('ended', handleEnded);
  }, [currentSong, playlist.length]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    audio.src = playlist[currentSong].src;
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false));
    }
  }, [currentSong, playlist]);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play().catch(() => {
        // Auto-play might be blocked, user needs to interact first
        console.log('Autoplay blocked');
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <>
      <audio ref={audioRef} loop />
      <Button
        onClick={togglePlayPause}
        className="fixed top-3 right-3 sm:top-4 sm:right-4 bg-gradient-gold hover:bg-gradient-shimmer text-white shadow-gold-glow z-50 rounded-full w-10 h-10 sm:w-12 sm:h-12 p-0 text-sm sm:text-base touch-manipulation"
      >
        {isPlaying ? '🔇' : '🎵'}
      </Button>
    </>
  );
};

export default MusicPlayer;
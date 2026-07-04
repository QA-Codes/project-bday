import { useRef, useState, useEffect } from "react";
import music from "../assets/music/bday.mp3";

function MusicPlayer({ autoPlay }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    if (autoPlay && audioRef.current && !isPlaying) {
      audioRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch((err) => {
        console.log(err);
      });
    }
  }, [autoPlay]);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio ref={audioRef} loop>
        <source src={music} type="audio/mpeg" />
      </audio>

      <button className="music-btn" onClick={toggleMusic}>
        {isPlaying ? "🎵" : "▶"}
      </button>
    </>
  );
}

export default MusicPlayer;
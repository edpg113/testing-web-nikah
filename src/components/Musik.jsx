import { useState } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = ({ src, audioRef, isPlaying, setIsPlaying }) => {
  // const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.error(err));
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={styles.container}>
      <audio ref={audioRef} src={src} loop preload="auto"/>
      <button onClick={togglePlay} style={styles.button}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};
const styles = {
  container: {
    position: 'fixed',
    top: 20,
    right: 20,
    zIndex: 999,
    // background: '#ffffffcc',
    // borderRadius: '50%',
    // padding: '10px',
    // boxShadow: '0 0 10px rgba(0,0,0,0.2)',
    // width: '45px',
    // textAlign: 'center',
    // alignItems: 'center',
  },
  button: {
    background: 'none',
    border: 'none',
    fontSize: '15px',
    cursor: 'pointer',
  },
};

export default MusicPlayer;

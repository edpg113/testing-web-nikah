import { useEffect } from "react";
import { FaPlay, FaPause } from "react-icons/fa";

const MusicPlayer = ({ src, audioRef, isPlaying, setIsPlaying }) => {
  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch((err) => console.error(err));
    }
    setIsPlaying(!isPlaying);
  };

  // Sync state ketika audio di-pause/play dari luar
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleEnded = () => setIsPlaying(false);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("ended", handleEnded);
    };
  }, [audioRef, setIsPlaying]);

  return (
    <div style={styles.container}>
      <audio ref={audioRef} src={src} loop preload="auto" />
      <button onClick={togglePlay} style={styles.button}>
        {isPlaying ? <FaPause /> : <FaPlay />}
      </button>
    </div>
  );
};

const styles = {
  container: {
    position: "fixed",
    top: 20,
    right: 20,
    zIndex: 999,
  },
  button: {
    background: "#fff",
    border: "1px solid #ccc",
    borderRadius: "50%",
    fontSize: "18px",
    cursor: "pointer",
    width: "40px",
    height: "40px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
  },
};

export default MusicPlayer;

import { useState, useRef, useEffect } from "react";
import { MusicPlayBtn } from "./MusicPlayer.style";
import { MdVolumeOff, MdVolumeUp } from "react-icons/md";

function MusicPlayer({ musicUrl }) {
  const [play, setPlay] = useState(false);
  const player = useRef(null);

  const handlePlay = () => {
    setPlay((prev) => !prev);
    if (play) {
      player.current.pause();
    } else {
      player.current.play();
    }
  };

  useEffect(() => {
    player.current.volume = 0.8;
  }, []);

  return (
    <MusicPlayBtn className="glass" onClick={handlePlay}>
      {play ? (
        <MdVolumeUp size={28} color="white" />
      ) : (
        <MdVolumeOff size={28} color="white" />
      )}
      <audio ref={player} src={musicUrl} controls type="audio/mpeg"></audio>
    </MusicPlayBtn>
  );
}

export default MusicPlayer;

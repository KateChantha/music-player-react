import { useRef, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";

const Player = ({ currentSong, isPlaying, setIsPlaying }) => {

  // State
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })

  // Ref
  const audioRef = useRef(null);

  // Event Handlers
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
       audioRef.current.play();
       setIsPlaying(!isPlaying);
    }
  };

  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({...songInfo, currentTime, duration});
  }

  const dragSlideBarHandler = (e) => {
    // update the dudio
    audioRef.current.currentTime = e.target.value;
    // update sliderbar value 
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value
    })
  }

  // Helper functions
  const formatTime = (time) => {
    return (
      // minuite : left from everytime it go up to 60s
      Math.floor(time / 60) + ":" + ("0"+ Math.floor(time % 60 )).slice(-2)
    )
  }

  return(
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <input 
          type="range" 
          min={0}
          max={songInfo.duration}
          value={songInfo.currentTime}
          onChange={dragSlideBarHandler}
        />
        <p>{formatTime(songInfo.duration)}</p>
      </div>

      <div className="play-control">
        <FontAwesomeIcon className="skip-back" size="2x" icon={faAngleLeft} />
        <FontAwesomeIcon 
          onClick={playSongHandler} 
          className="play" 
          size="2x" 
          icon={ isPlaying ? faPause : faPlay } 
        />
        <FontAwesomeIcon className="skip-forward" size="2x" icon={faAngleRight} />
      </div>

      <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef} 
        src={currentSong.audio}
      ></audio>
    </div>
  )
} 

export default Player; 
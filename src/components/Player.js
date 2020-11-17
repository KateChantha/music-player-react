import { useEffect } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faAngleLeft, faAngleRight, faPause } from "@fortawesome/free-solid-svg-icons";

import { playAudio } from "../utils";

const Player = ({ 
  audioRef, 
  currentSong, 
  setCurrentSong, 
  isPlaying, 
  setIsPlaying, 
  songInfo, 
  setSongInfo, 
  songs,
  setSongs 
  }) => {

  /** useEffect **/
  // skipSong Event cause currentSong state change
  // useEffect runs evertime currentSong state change 
  useEffect(() => {

    // Update Active State and Songs State
    const newSongs = songs.map((song) => {
      if (song.id === currentSong.id) {
        return {
          ...song,
          active: true,
        };
      } else {
        return {
          ...song,
          active: false,
        };
      }
    });

    setSongs(newSongs);
  }, [currentSong])

  /** Event Handlers **/
  const playSongHandler = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(!isPlaying);
    } else {
       audioRef.current.play();
       setIsPlaying(!isPlaying);
    }
  };

  const dragSlideBarHandler = (e) => {
    // update the dudio
    audioRef.current.currentTime = e.target.value;
    // update sliderbar value 
    setSongInfo({
      ...songInfo,
      currentTime: e.target.value
    })
  }

  // action: setCurrentSong by the update currentIndex - loop back if end of list
  // omitted: update active song state (move in useEffect logic) 
  // action: play song
  const skipTrackHandler = (direction) => {
    let currentIndex = songs.findIndex(song => song.id === currentSong.id) || 0;

    if (direction === "skip-forward") {
      setCurrentSong(songs[(currentIndex + 1) % songs.length])
    }
    if (direction === "skip-back") {
      // if index pass 0, set currentSong to the last song
      if ((currentIndex - 1) % songs.length < 0) {
        setCurrentSong(songs[songs.length -1])
        playAudio(isPlaying, audioRef);
        return;
      }
      setCurrentSong(songs[(currentIndex - 1) % songs.length])
    }

    // play song
    playAudio(isPlaying, audioRef);
  }

  /** Helper functions **/
  const formatTime = (time) => {
    return (
      // minuite : left from everytime it go up to 60s
      Math.floor(time / 60) + ":" + ("0"+ Math.floor(time % 60 )).slice(-2)
    )
  }

  // Add styles
  const trackAnim = {
    transform: `translateX(${songInfo.animationPercentage}%)` 
  };

  const trackGredient = {
    background: `linear-gradient(to right, ${currentSong.color[0]},${currentSong.color[1]})`
  }

  return(
    <div className="player">
      <div className="time-control">
        <p>{formatTime(songInfo.currentTime)}</p>
        <div style={trackGredient} className="track">
          <input 
            type="range" 
            min={0}
            max={songInfo.duration || 0}
            value={songInfo.currentTime}
            onChange={dragSlideBarHandler}
          />
          <div style={trackAnim} className="animate-track"></div>
        </div>
        <p>{songInfo.duration ? formatTime(songInfo.duration) : "0:00" }</p>
      </div>
      <div className="play-control">
        <FontAwesomeIcon 
          onClick={() => skipTrackHandler("skip-back")}
          className="skip-back" 
          size="2x" 
          icon={faAngleLeft} 
        />
        <FontAwesomeIcon 
          onClick={playSongHandler} 
          className="play" 
          size="2x" 
          icon={ isPlaying ? faPause : faPlay } 
        />
        <FontAwesomeIcon 
          onClick={() => skipTrackHandler("skip-forward")}
          className="skip-forward" 
          size="2x" 
          icon={faAngleRight} 
        />
      </div>
    </div>
  )
} 

export default Player; 
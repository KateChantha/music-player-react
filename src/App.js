import { useState, useRef } from "react"

import "./styles/app.scss"
import data from "./data"

import Player from './components/Player';
import Song from './components/Song';
import Library from "./components/Library"

function App() {
  // Ref
  const audioRef = useRef(null);

  // get whole array of object form calling data function
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0
  })

  // Event Handler
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    setSongInfo({...songInfo, currentTime, duration});
  }

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player 
        audioRef={audioRef}
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library 
        audioRef={audioRef} 
        isPlaying={isPlaying}
        songs={songs} 
        setCurrentSong={setCurrentSong} 
      />
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler}
        ref={audioRef} 
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;

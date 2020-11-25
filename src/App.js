import { useState, useRef } from "react";

import "./styles/app.scss";
import data from "./data";

import Player from './components/Player';
import Song from './components/Song';
import Library from "./components/Library";
import Nav from "./components/Nav";

function App() {
  // Ref
  const audioRef = useRef(null);

  // get whole array of object form calling data function
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [songInfo, setSongInfo] = useState({
    currentTime: 0,
    duration: 0,
    animationPercentage: 0
  });
  const [libraryStatus, setLibraryStatus] = useState(false);

  /** Event Handlers **/
  const timeUpdateHandler = (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;

    // calculate Percentage
    const animPercentage = Math.round((currentTime / duration) * 100);

    setSongInfo({
      ...songInfo, 
      currentTime, 
      duration,
      animationPercentage: animPercentage
    });
  };

  const songEndHandler = async () => {
    // skip song forward when it's ended
    let currentIndex = songs.findIndex(song => song.id === currentSong.id) || 0;
    await setCurrentSong(songs[(currentIndex + 1) % songs.length])
    // play song
    if (isPlaying) audioRef.current.play();
  };

  return (
    <div className={`App ${libraryStatus ? "library-active" : "" }`}>
    <section className="outer-display">
       <Nav 
        libraryStatus={libraryStatus} 
        setLibraryStatus={setLibraryStatus} 
      />
      <section className="inner-display">
        <Song currentSong={currentSong} isPlaying={isPlaying} />
        <Player 
          audioRef={audioRef}
          currentSong={currentSong}
          setCurrentSong={setCurrentSong}
          isPlaying={isPlaying}
          setIsPlaying={setIsPlaying}
          songInfo={songInfo}
          setSongInfo={setSongInfo}
          songs={songs}
          setSongs={setSongs}
        />
      </section>
    </section>
     
      <Library 
        audioRef={audioRef} 
        isPlaying={isPlaying}
        songs={songs} 
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        libraryStatus={libraryStatus}
      />
      <audio 
        onTimeUpdate={timeUpdateHandler} 
        onLoadedMetadata={timeUpdateHandler}
        onEnded={songEndHandler}
        ref={audioRef} 
        src={currentSong.audio}
      ></audio>
    </div>
  );
}

export default App;

import { useState } from "react"

import "./styles/app.scss"
import data from "./data"

import Player from './components/Player';
import Song from './components/Song';
import Library from "./components/Library"

function App() {

  // get whole array of object form calling data function
  const [songs, setSongs] = useState(data());
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div>
      <Song currentSong={currentSong} />
      <Player 
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs} setCurrentSong={setCurrentSong} />
    </div>
  );
}

export default App;

import { useState } from "react"

import "./styles/app.scss"
import data from "./data"

import Player from './components/Player';
import Song from './components/Song';

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
    </div>
  );
}

export default App;

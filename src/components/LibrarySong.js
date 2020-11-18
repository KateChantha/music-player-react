// import { playAudio } from "../utils";

const LibrarySong = ({ audioRef, isPlaying, songs, setSongs, song, setCurrentSong }) => {
  const { cover, name, artist, id, active} = song;

  
  /**
   * @desc Event Handler
   * action: setCurrentSong
   * omitted: update songs state with the update active state (move logic to useEffect in <Player>)
   * action: when song is loaded, play song
   */
  const songSelectHandler = async () => {
    // wait until song is laoded
    //  setCurrentSong- CurrentSong state change- will trigger useEffect in <Player> to run fucntion to update active state
    await setCurrentSong(song);

    // play song
    if (isPlaying) audioRef.current.play();
  };
  
  return(
    <div 
      onClick={songSelectHandler} 
      className={`library-song ${active ? "selected" : ""}`}
    >
      <img src={cover} alt={name}></img>
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong; 
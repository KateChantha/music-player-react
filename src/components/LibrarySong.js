const LibrarySong = ({ songs, song, setCurrentSong }) => {
  const { cover, name, artist, id } = song;

  // Event Handler
  const songSelectHandler = () => {
    // return an object in an array [{}]
    const [selectedSong] = songs.filter(state => state.id === id);
    setCurrentSong(selectedSong);
  }
  
  return(
    <div onClick={songSelectHandler} className="library-song">
      <img src={cover} alt={name}></img>
      <div className="song-description">
        <h3>{name}</h3>
        <h4>{artist}</h4>
      </div>
    </div>
  )
}

export default LibrarySong; 
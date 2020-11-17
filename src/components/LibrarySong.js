const LibrarySong = ({ audioRef, songs, song, setCurrentSong }) => {
  const { cover, name, artist} = song;

  // Event Handler
  const songSelectHandler = () => {
    setCurrentSong(song);
    audioRef.current.play()
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
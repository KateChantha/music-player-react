const LibrarySong = ({ audioRef, isPlaying, songs, song, setCurrentSong }) => {
  const { cover, name, artist} = song;

  // Event Handler
  const songSelectHandler = () => {
    setCurrentSong(song);
    
    // pllay song if isPlaying and if the audioRef.current is already loaded
    // check if the song is playing
    if (isPlaying) {
      const playPromise = audioRef.current.play();
      if (playPromise !== undefined) {
        // when its finally load's up, then play it
        playPromise.then(() => {
          audioRef.current.play()
        })
      }
    }
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
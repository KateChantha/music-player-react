const LibrarySong = ({ audioRef, isPlaying, songs, setSongs, song, setCurrentSong }) => {
  const { cover, name, artist, id, active} = song;

  
  /**
   * @desc Event Handler
   * action: setCurrentSong
   * action: update songs state with the update active state
   * action: audioRef.current.play()
   */
  const songSelectHandler = () => {
    setCurrentSong(song);

    // Update Active State and Songs State
    const newSongs = songs.map((song) => {
      if (song.id === id) {
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
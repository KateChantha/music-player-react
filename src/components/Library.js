import LibrarySong from "./LibrarySong";

const Library = ({ audioRef, isPlaying, songs, setSongs, setCurrentSong, libraryStatus }) => {
  return (
    <div className={`library ${libraryStatus ? "active-library": ""}`} >
      <h2>Song Library</h2>
      <div className="library-songs">
      {songs.map((song) => (
         <LibrarySong 
            audioRef={audioRef}
            isPlaying={isPlaying}
            songs={songs}
            setSongs={setSongs} 
            song={song} 
            key={song.id}
            setCurrentSong={setCurrentSong} 
         />
      ))}
      </div>
    </div>
  );
}

export default Library;
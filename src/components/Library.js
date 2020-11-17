import LibrarySong from "./LibrarySong";

const Library = ({ audioRef, songs, setCurrentSong }) => {
  return (
    <div className="library">
      <h2>Song Library</h2>
      <div className="library-songs">
      {songs.map((song) => (
         <LibrarySong 
            audioRef={audioRef}
            songs={songs} 
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
export const playAudio = (isPlaying, audioRef) => {
  // play song if isPlaying and if the audioRef.current is already loaded
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
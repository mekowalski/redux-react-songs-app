//Redux Side
//This is not held in the Store
//Works with Dispatch and Action to update data
//Action Creator
export const selectSong = (song) => {
  //return an Action(plain js object)
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}

//named export allows many different functions to be exported from a single file

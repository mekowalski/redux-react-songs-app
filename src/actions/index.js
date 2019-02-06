//Redux Side
//This is not held in the Store
//Works with Dispatch and Action to update data
//Action Creator
export const selectSong = (song) => {
  //return an Action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}

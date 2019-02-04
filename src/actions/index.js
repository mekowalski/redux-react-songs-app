//this is an unfortunate pattern in React projectss
//eventually write some code in this files
//then import it somewhere else inside project
// eg: import actions from '../actions' because there is only 1 file in this DIR
//If a file isn't specified Webpack will automatically give the index.js file

//Action Creator
const selectSong = (song) => {
  //return an Action
  return {
    type: 'SONG_SELECTED',
    payload: song
  }
}

import { combineReducers } from 'redux';
//example of named export

//Reducers
const songsReducer = () => {
  //static array, no actions, no reason to change
  //an array of objects, each object represents a song
  return [
    {title: 'Winning Streak', duration: '3:19'},
    {title: 'Blowback', duration: '4:05'},
    {title: 'Belong To You', duration: '3:07'}
  ]
}

const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type ===  'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

//make use of combineReducers()
//any other file can have access of combine set of reducers
export default combineReducers({
  //object keys, keys that show up in State object
  songs: songsReducer,
  selectedSong: selectedSongReducer
})

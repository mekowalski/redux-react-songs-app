//Redux Side
//wire up reducers together
//combineReducers is a named export from outside libary: redux
import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: 'Winning Streak', artist: 'Shaboozey', duration: '3:19'},
    {title: 'Blowback', artist: 'Galamatias', duration: '4:05'},
    {title: 'Belong To You', artist: 'Sabrina Claudio', duration: '3:07'},
    {title: 'Idle Worship', artist: 'Paramore', duration: '3:18'},
    {title: 'Lost In Japan', artist: 'Shawn Mendes', duration: '3:54'},
    {title: 'Better', artist: 'Khalid', duration: '3:51'}
  ]
}

//if statments are used mostly for multiple action types, this app only has one
//this is default practice though
const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type ===  'SONG_SELECTED') {
    return action.payload
  }
  return selectedSong
}

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
})

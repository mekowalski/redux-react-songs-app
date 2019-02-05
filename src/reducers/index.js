import { combineReducers } from 'redux';

const songsReducer = () => {
  return [
    {title: 'Winning Streak', duration: '3:19'},
    {title: 'Blowback', duration: '4:05'},
    {title: 'Belong To You', duration: '3:07'},
    {title: 'Idle Worship', duration: '3:18'},
    {title: 'Lost In Japan', duration: '3:54'},
    {title: 'Better', duration: '3:51'}
  ]
}

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

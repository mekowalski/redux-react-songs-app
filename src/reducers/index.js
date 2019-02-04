//write the reducers necessary for application
//One reducer to return static list of Songs
//Second reducer to return the selected song

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

//if statement isn't necessary because there is only one action type
//but it's good practice

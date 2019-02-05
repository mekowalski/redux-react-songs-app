import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    return (
      <div>
        This is the Song List
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  //Want to pull the songs property, SongList only cares about songs
  console.log(state)

  return state
}

//after defining mapStateToProps(), pass it into the connect() as the first argument
//this is how to configure connect() component, configure by passing connect() a function
export default connect(mapStateToProps)(SongList)

//console
// {songs: Array(3), selectedSong: null}
//  selectedSong: null
//  songs: Array(3)
//    0: {title: "Winning Streak", duration: "3:19"}
//    1: {title: "Blowback", duration: "4:05"}
//    2: {title: "Belong To You", duration: "3:07"}

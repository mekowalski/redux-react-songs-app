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
  //return an object with a KEY of songs: and its value is state.songs
  //object returned will be the Props inside SongList Component
  return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList)

//console
// {songs: Array(3), selectedSong: null}
//  selectedSong: null
//  songs: Array(3)
//    0: {title: "Winning Streak", duration: "3:19"}
//    1: {title: "Blowback", duration: "4:05"}
//    2: {title: "Belong To You", duration: "3:07"}

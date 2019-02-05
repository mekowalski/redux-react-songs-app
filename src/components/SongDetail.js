import React from 'react';
import { connect } from 'react-redux';

//destructure the song properties i care about
const SongDetail = ({ song }) => {
  //2. fix with conditional
  if (!song) {
    return <div>Select a song</div>
  }

  return (
    <div>
      {song.title}
      //1. returns TypeError: Cannot read property 'title' of null
      //when Component is first rendered, there isn't a selected song
    </div>
  );
}

const mapStateToProps = state => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)

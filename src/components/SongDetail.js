//React Side
import React from 'react';
import { connect } from 'react-redux';
//connect can work with both class-based and functional components

const SongDetail = ({ song }) => {
  if (!song) {
    return <div>Select a song</div>
  }

  return (
    <div>
      <h3>Details for</h3>
      <p>Title: {song.title}</p>
      <p>Artist: {song.artist}</p>
      <p>Duration: {song.duration}</p>
    </div>
  );
}

const mapStateToProps = state => {
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)

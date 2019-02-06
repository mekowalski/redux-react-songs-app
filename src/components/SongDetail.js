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

//wrap SongDetail with connet() to get State/Data from Store
//the only property this component cares about is the selectedSong
const mapStateToProps = state => {
  return { song: state.selectedSong }
}

//mapStateToProps: SongDetail will get a props object that contains the currently selected song
export default connect(mapStateToProps)(SongDetail)

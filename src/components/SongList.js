import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  render() {
    // this.props === { songs: state.songs }
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

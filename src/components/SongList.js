import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  //helper method, take the list of songs, map over the list and return big blob of JSX
  renderList() {//3. then return that array from renderList method
    return this.props.songs.map((song) => {//2. map statement produces a brand new array of JSX elements
      return ( //1. this return, returns some amount of JSX for mapping function

      )
    })
  }

  render() {
    return (
      <div>
        This is the Song List
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList)

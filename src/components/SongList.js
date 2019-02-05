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

//called with all the State inside the Redux Store
//entire list of songs and selected song
const mapStateToProps = (state) => {
  console.log(state)

  return state
}

export default connect()(SongList)

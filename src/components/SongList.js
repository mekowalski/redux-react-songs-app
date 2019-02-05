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

export default connect()(SongList)
//connect syntax
//connect(): returns a function
//(SongList): invokes the function

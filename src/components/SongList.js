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
  console.log(state)

  return state
}

//after defining mapStateToProps(), pass it into the connect() as the first argument
//this is how to configure connect() component, configure by passing connect() a function
export default connect(mapStateToProps)(SongList)

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

//take State object, all the Data in Store
//run a calculation on it to show it up as Props inside Component
//can be named any thing ie: getMyState but convention is this name
const mapStateToProps = () => {

}

export default connect()(SongList)
//connect syntax
//connect(): returns a function
//(SongList): invokes the function

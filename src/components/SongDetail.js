import React from 'react';
import { connect } from 'react-redux';

const SongDetail = () => {
  return (
    <div>
      Song Detailsssss
    </div>
  )
}

//wrap SongDetail with connect() to get info out of Store
const mapStateToProps = state => {
  //i care about the selected song which will be the key of selectedSong
  return { song: state.selectedSong }
}

export default connect(mapStateToProps)(SongDetail)

import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends React.Component {
  renderList() {
    return this.props.songs.map((song) => {
      return (
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button
              className='ui button primary'
              onClick={() => this.props.selectSong(song)}
            >
              Select
            </button>
          </div>
          <div className='content'>{song.title}</div>
        </div>
      )
    })
  }

  render() {
    return (
      <div className='ui divided list'>
        {this.renderList()}
      </div>
    );
  }
}

//every time the Select button is clicked, this function should rerun and return a new State object
const mapStateToProps = state => {
  console.log(state)
  return { songs: state.songs }
}

export default connect(mapStateToProps, { selectSong })(SongList)

//why go through extra work of passing it to connect() instead of calling it in the renderList()
//

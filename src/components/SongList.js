import React from 'react';
import { connect } from 'react-redux';

class SongList extends React.Component {
  //helper method, take the list of songs, map over the list and return big blob of JSX
  renderList() {
    return this.props.songs.map((song) => {
      return (
        //there isn't an ID in the song object only a title and duration, use title because that is
        //sufficiently unique for each rendered song
        <div className='item' key={song.title}>
          <div className='right floated content'>
            <button className='ui button primary'>
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
      <div>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs }
}

export default connect(mapStateToProps)(SongList)

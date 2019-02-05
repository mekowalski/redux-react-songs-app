import React from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'; //1. import action creator

class SongList extends React.Component {
  //helper method, take the list of songs, map over the list and return big blob of JSX
  renderList() {
    return this.props.songs.map((song) => {
      return (
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
    //3. connect() will take take action creator and pass it into the Component as a Prop
    console.log(this.props)
    return (
      <div className='ui divided list'>
        {this.renderList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { songs: state.songs }
}

//2. pass it as a 2nd argument to connect()
//an object with a key and value of the action creator
export default connect(mapStateToProps, { selectSong })(SongList)

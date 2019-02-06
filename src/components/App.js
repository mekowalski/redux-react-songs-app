//React Side
import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';

//functional component, no use for state here because Redux will take care of Data and State
const App = () => {
  return (
    <div className='ui container grid' style={{marginTop: '15px'}}>
      <div className='ui row'>
        <div className='column eight wide'>
          <SongList />
        </div>
        <div className='column eight wide'>
          <SongDetail />
        </div>
      </div>
    </div>
  );
}

export default App

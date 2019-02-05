import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//named export, it is a component made by react-redux library
import { createStore } from 'redux';
//createStore returns all the Reducers and application's Data and State
//group all imports from 3rd-party dependencies together

//group all custom/written/own code together
import App from './components/App';
import reducers from './reducers';

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);

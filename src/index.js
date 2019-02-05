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

//1. wrap Provider around App
//2. pass in Props to Provider of Store
//3. store will be the results of calling createStore and passing in the reducers
//Make use of React-Redux library passes off the store to the Provider and it will take care of everything
//from there on
//typical Redux app rarely interacts with Store
ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  <Provider />,
  document.querySelector('#root')
);

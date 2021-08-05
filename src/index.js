import {createStore} from 'redux';
import React from 'react';
import ReactDOM from 'react-dom';
//File Imports
import './index.css';
import App from './Components/App';
import movies from './reducers'



const store = createStore(movies);//This Expects an Argument that is the reducer
// console.log("store :"+store);
// console.log("Before Action STATE :"+store.getState());

// store.dispatch({ //Using Dispatch We can Send Sctions to the Reducer and through it to the store
//   type:ADD_MOVIES,
//   movies:[{name:'sumperman'}]
// });//Takes action Object as Argument

// console.log("After Action STATE :"+store.getState());
ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById('root')
);



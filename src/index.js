import React from 'react';
import ReactDOM from 'react-dom';
import {createStore,applyMiddleware} from 'redux';
//File Imports
import './index.css';
import App from './Components/App';
import rootReducer from './reducers';
import thunk from 'redux-thunk'

//Curried form of function Logger(obj,next,action as arguments)
//logger(obj)(next)(action)
// const logger = function({dispatch,getState}){
//   return function(next){
//     return function(action){
//       //middleware Code
//       // console.log("ACTION_TYPE :",action.type);
//       if(typeof action !== 'function')
//         next(action); //if next not call than aur cycle will stuck here an no movies will be dispatched
//     }
//   }
// }

const logger = ({dispatch,getState})=>(next)=>(action)=>{
  //Logger Code
  // 
  if(typeof action !== 'function'){
    console.log("ACTION_TYPE :",action.type);
  }
         
  next(action);
}
//Above is another way of writing Reducers

// const thunk = ({dispatch,getState})=>(next)=>(action)=>{
//      //Logger Code
//     if(typeof action === 'function'){
//       action(dispatch);
//       console.log(action);
//       return;
//     }
//      next(action);
// }

const store = createStore(rootReducer,applyMiddleware(logger,thunk));//This Expects an Argument that is the reducer
// console.log("store :"+store);
// console.log("Before Action STATE :"+store.getState());

// store.dispatch({ //Using Dispatch We can Send Sctions to the Reducer and through it to the store
//   type:ADD_MOVIES,
//   movies:[{name:'sumperman'}]
// });//Takes action Object as Argument

// console.log("After Action STATE :"+store.getState());
ReactDOM.render(<App store={store} />,document.getElementById('root'));



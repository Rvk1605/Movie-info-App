
import { combineReducers } from "redux";
import { ADD_MOVIES , ADD_FAVOURITE , REMOVE_FAVOURITE , SET_SHOW_FAVOURITES , ADD_SEARCH_RESULT, ADD_MOVIE_TO_LIST } from "../actions";

const initialMoviesState = {
    list:[],
    favourites:[],
    showFavourites:false
}

//Movies Reducer

export function movies(state=initialMoviesState,action){
    // if(action.type === ADD_MOVIES){  //We should avoid String Comparison by storing the string in a variable 
    //     //This is reusable as well as efficient

    //     return {
    //         ...currState,
    //         list:action.movies
    //          //Spread Property of JAvaScript
    //         //  var o = {a:1,b:2,c:3}
    //         // var o1 ={...o}
    //         //console.log(o1)
    //         //O/p - {a:1,b:2,c:3}
    //         //o===o1 - false

    //         //changing any data in objects   
    //         //var o2= {...o , b:100 }
    //     }
    //     //this will simply return the new moviesto the store and store will merge them to itself
    //     //we are not modifying the old state here in the reducer as it is not allowed to modify ald state
    // }
    // return action;

    switch(action.type){
        case ADD_MOVIES:  
        return {
                ...state,
                list:action.movies
            }
        case ADD_FAVOURITE:
            return{
                ...state,
                favourites:[action.movie,...state.favourites]
            }
        case REMOVE_FAVOURITE:
            const filteredArray = state.favourites.filter(
                movie=>movie.Title !== action.movie.Title
            );
            return {
                ...state,
                favourites:filteredArray
            }
        case SET_SHOW_FAVOURITES:
            return{
                ...state,
                showFavourites:action.val
            }
        case ADD_MOVIE_TO_LIST:
            return {
                ...state,
                list:[action.movie, ...state.list]
            };
        default:
            return state;
        }
}


//Search Reducer

const initialSearchState = {
    result:{},
    showSearchResults:false
};

export function search(state=initialSearchState,action){
    switch(action.type){
        case ADD_SEARCH_RESULT :
        return{
            ...state,
            result:action.movie,
            showSearchResults:true,
        }
        case ADD_MOVIE_TO_LIST:
            return{
                ...state,
            showSearchResults:false,
            }
    default:
    return state;
    }
}

//Root Reducer which will manage all other Reducers

// const initialRootState = {
//     movies:initialMoviesState,
//     search:initialMoviesState
// };

// export default function rootReducer(state=initialRootState,action){
//     return {
//         movies:movies(state.movies,action),
//         search:search(state.search,action)
//     };
// }

//Above method to combine reducer is alredy created by redux

export default combineReducers({
    movies:movies,  //here we only pass reducer name or in short hand just movies,search
    search:search
})

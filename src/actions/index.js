//Actions are a way to tell the store to do somthing 
//In code it is simply a Javascript Object
// {
//     type: 'ADD_MOVIES',
//     // movie:[],
//     // user:user1
// }

// {
//     type:'DECREASE_COUNT'
// }

//These variable are called action types
export const ADD_MOVIES = "ADD_MOVIES";
export const ADD_FAVOURITE = "ADD_FAVOURITE";
export const REMOVE_FAVOURITE = "REMOVE_FAVOURITE";
export const SET_SHOW_FAVOURITES = "SET_SHOW_FAVOURITES";

//Action Creators as they are returning an action
export function addMovies (movies){
    return {
        type:ADD_MOVIES,
        movies
    }
}

export function addFavourite (movie){
    return {
        type:ADD_FAVOURITE,
        movie  
    }
}

export function removeFavourite (movie){
    return {
        type:REMOVE_FAVOURITE,
        movie  
    }
}

export function setShowFavourites (val){
    return {
        type:SET_SHOW_FAVOURITES,
        val
    }
}
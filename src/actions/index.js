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
export const ADD_MOVIE_TO_LIST = "ADD_MOVIE_TO_LIST";
export const ADD_SEARCH_RESULT = "ADD_SEARCH_RESULT";
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

export function addMovieToList(movie){
    return{
        type:ADD_MOVIE_TO_LIST,
        movie
    }
}

export function handleMovieSearch(movie){
    const url = `https://www.omdbapi.com/?apikey=3ca5df7&t=${movie}`
        return function(dispatch){  //This is a thunk as a function is returning another function
            fetch(url)
            .then(response => response.json()) //this return the response in json format
            .then(movie => { 
                console.log("Movie:",movie);
                //adding movie to store
            //to do this we dispatch an action but here we do not have the priviledge to dispatch an action
            //So for this we will bring dispatch as an argument in a function
            dispatch(addMovieSearchResult(movie));
            })
    }
}

export function addMovieSearchResult (movie){
    return{
        type:ADD_SEARCH_RESULT,
        movie
    }
}
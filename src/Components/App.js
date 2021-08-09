import React from 'react';
import {data} from '../data';
import Navbar from '../Components/Navbar'
import MovieCard from '../Components/MovieCard';
import { addMovies, setShowFavourites } from '../actions';

class App extends React.Component {
  componentDidMount(){
    //Here We Make an api call to get the movies 
    // dispatch an action
    const {store} = this.props;
    store.subscribe(()=>{
      console.log("UPDATING");

      this.forceUpdate(); 
      // This should not be used  as it force fully update and re - render the app component
    })
    store.dispatch(
    //   {//Whenever this action is dispatched it will call the subscribe callback function and after that it will reach the end of function
    //   type:addMOvies,
    //   movies:data //date from data.js
    // }
    addMovies(data)
    );
    console.log("State"+this.state);
  }
   
  isMovieFavourite = (movie)=>{
    const {movies} = this.props.store.getState();

    const index = movies.favourites.indexOf(movie);
    if(index!==-1){
      //Movie Found
       return true;
    }
    return false;
  }

  onChangeTab = (val)=>{
      this.props.store.dispatch(setShowFavourites(val));
  }
  
  render(){
    console.log("Render");
      const {movies,search}=this.props.store.getState(); //{ movies:{} , search:{} }
      const {list,favourites,showFavourites} = movies; //Destructuring will help to store list [] in list 
       //this.props will contain the store passed to it , 
       const displayMovies = showFavourites? favourites:list 
      return (
        <div className="App">
          <Navbar dispatch={this.props.store.dispatch}  search={search}/>
          <div className="main">
            <div className="tabs">
              <div className={`tab ${showFavourites ? '':'active-tabs'}`} onClick = {()=>{this.onChangeTab(false)}}>Movies</div>
              <div className={`tab ${showFavourites ? 'active-tabs':''}`} onClick = {()=>{this.onChangeTab(true)}}>Favourites</div>
            </div>

            <div className="list">
              {displayMovies.map((movie,index) =>( 
                  <MovieCard isFavourite = {this.isMovieFavourite(movie)} movie={movie} key={`movie-${index}`} dispatch={this.props.store.dispatch}/>
              ))}
            </div>
            {displayMovies.length===0? <div className="no-movies">No Movies To Display!</div>:null }
          </div>
        </div>
      );
}
}

export default App;

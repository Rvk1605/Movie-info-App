import React from "react";
import { addFavourite , removeFavourite } from '../actions';

class MovieCard extends React.Component{

    handleFavouriteClick = () =>{
        const {movie} = this.props;
        //Now we will dispatch  the action using action creater 
        //we''ll get dispatch from app.js
        this.props.dispatch(addFavourite(movie));
    }

    handleUnfavouriteClick = () =>{
        const {movie} = this.props;
        //Now we will dispatch  the action using action creater 
        //we''ll get dispatch from app.js
        this.props.dispatch(removeFavourite(movie));
    }

    render(){
        const {movie,isFavourite} = this.props; 
        return(
            <div className="movie-card">
                <div className="left">
                    <img alt="movie-poster" src={movie.Poster}/>
                </div>

                <div className="right">
                    <div className="title">{movie.Title}</div>
                    <div className="plot">{movie.Plot}</div>
                    <div className="footer">
                        <div className="rating"> <img src="" alt="" /> <img className="imdb-logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png" alt="" /> : {movie.imdbRating}</div>
                        {
                            isFavourite? <button className="unfavourite-btn" onClick={this.handleUnfavouriteClick}>Unfavourite</button>
                                         :<button className="favourite-btn" onClick={this.handleFavouriteClick}>Favourite</button>
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default MovieCard;
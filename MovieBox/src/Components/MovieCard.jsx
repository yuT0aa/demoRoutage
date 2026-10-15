import React, { useContext } from 'react';
import { MovieContext } from '../MovieContext';
import { FcLike } from "react-icons/fc";
import { FcDislike } from "react-icons/fc";

function MovieCard({movie}){
    const {dispatch}=useContext(MovieContext);

    const toggleWatchlist=()=>{
        if(movie.inWatchlist){
            dispatch({type:'REMOVE_FROM_WATCHLIST',payload:movie.id});
        }else{
            dispatch({type:'ADD_TO_WATCHLIST',payload:movie.id});
        }
    };

    const toggleLike=()=>{
        dispatch({type:'TOGGLE_LIKE',payload:movie.id});
    };

    return (
        <div className="movie-card">
            <div className="poster-container">
                <img src={movie.poster} alt={movie.title} className="movie-poster" />
                <span className="movie-genre">{movie.genre}</span>
            </div>
            <div className="movie-details">
                <h3 className="movie-title">{movie.title}</h3>
                <p className="movie-year">{movie.year}</p>
                <div className="card-actions">
                    <button
                        className={`btn-like ${movie.liked ? 'liked' : ''}`}
                        onClick={toggleLike}>
                            {movie.liked?<FcDislike/>:<FcLike/>} 
                    </button>
                    <button
                        className={`btn-watchlist ${movie.inWatchlist ? 'in-watchlist' : ''}`}
                        onClick={toggleWatchlist}
                    >
                        {movie.inWatchlist ? '✓ Dans la Watchlist' : '+ Watchlist'}
                    </button>
                </div>
            </div>
        </div>
   );
}

export default MovieCard;
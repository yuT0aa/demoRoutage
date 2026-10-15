import React, { createContext, useReducer } from 'react';

const initialMovies=[
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    poster: "https://m.media-amazon.com/images/M/MV5BZjhkNjM0ZTMtNGM5MC00ZTQ3LTk3YmYtZTkzYzdiNWE0ZTA2XkEyXkFqcGc@._V1_.jpg",
    liked: false,
    inWatchlist: false
  },
  {
    id: 2,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    poster: "https://m.media-amazon.com/images/I/91vIHsL-zjL._AC_UF894,1000_QL80_.jpg",
    liked: true,
    inWatchlist: true
  },
  {
    id: 3,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
    liked: false,
    inWatchlist: true
  },
  {
    id: 4,
    title: "Pulp Fiction",
    year: 1994,
    genre: "Crime",
    poster: "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=index&utm_content=original",
    liked: false,
    inWatchlist: false
  }
];

const initialState={
    movies:initialMovies
};

function movieReducer(state,action){
    switch(action.type){
        case 'ADD_TO_WATCHLIST':
            return{
                ...state,
                movies:state.movies.map(movie=>
                    movie.id===action.payload?{...movie,inWatchlist:true}:movie
                )
            };

        case 'REMOVE_FROM_WATCHLIST':
            return{
                ...state,
                movies:state.movies.map(movie=>
                    movie.id===action.payload?{...movie,inWatchlist:false}:movie
                )
            };

        case 'TOGGLE_LIKE':
            return{
                ...state,
                movies: state.movies.map(movie =>
                    movie.id===action.payload?{...movie,liked:!movie.liked}:movie
                )
            };

        case 'SET_FILTER':
            return{
                ...state,
                filter:action.payload
            };

        default:
            return state;
    }
}

export const MovieContext=createContext();

export function MovieProvider({children}){
    const [state,dispatch]=useReducer(movieReducer,initialState);

    return(
        <MovieContext.Provider value={{state,dispatch}}>
            {children}
        </MovieContext.Provider>
    );
}
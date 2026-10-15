import React, { useContext } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import MovieCard from './Components/MovieCard';
import { MovieContext } from './MovieContext';

function MovieList(filterType){
  const{state}=useContext(MovieContext);
  const{movies}=state;

  const filteredMovies=movies.filter(movie=>{
    if (filterType==='WATCHLIST')return movie.inWatchlist;
    if (filterType==='LIKED')return movie.liked;
    return true;
  });

  return (
    <main className="container my-5">
      {filteredMovies.length===0?(
        <div className="alert alert-dark text-center py-5 border-secondary text-muted fs-5" role="alert">
          nothing!
        </div>
      ):(
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {filteredMovies.map(movie =>(
            <MovieCard key={movie.id}movie={movie}/>
          ))}
        </div>
      )}
    </main>
  );
}

export default function App() {
  return (
    <div className="bg-dark text-light min-vh-100 d-flex flex-column">
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList filterType="ALL" />} />
        <Route path="/watchlist" element={<MovieList filterType="WATCHLIST" />} />
        <Route path="/favorites" element={<MovieList filterType="LIKED" />} />
      </Routes>
    </div>
  );
}
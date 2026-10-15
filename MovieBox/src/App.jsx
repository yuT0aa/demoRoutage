import React, { useContext } from 'react';
import Navbar from './components/Navbar';
import MovieCard from './components/MovieCard';
import { MovieContext } from './MovieContext';

function MovieList(){
  const{state}=useContext(MovieContext);
  const{movies,filter}=state;

  const filteredMovies=movies.filter(movie=>{
    if(filter==='WATCHLIST')return movie.inWatchlist;
    if(filter==='LIKED')return movie.liked;
    return true;
  });

  return (
    <main className="container">
      {filteredMovies.length === 0 ? (
        <div className="empty-message">
          <p>Aucun film trouvé dans cette catégorie.</p>
        </div>
      ) : (
        <div className="movies-grid">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}

function App() {
  return (
    <div className="app">
      <Navbar />
      <MovieList />
    </div>
  );
}

export default App;
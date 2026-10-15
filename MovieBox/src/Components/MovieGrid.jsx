import React, { useContext } from 'react';
import MovieCard from './MovieCard';
import { MovieContext } from '../MovieContext';

export default function MovieGrid({ filterType }) {
  const { state } = useContext(MovieContext);
  const { movies } = state;

  const filteredMovies = movies.filter(movie => {
    if (filterType === 'WATCHLIST') return movie.inWatchlist;
    if (filterType === 'LIKED') return movie.liked;
    return true;
  });

  return (
    <main className="container my-5">
      {filteredMovies.length === 0 ? (
        <div className="alert alert-dark text-center py-5 border-secondary text-muted fs-5" role="alert">
          Aucun film trouvé dans cette catégorie.
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
          {filteredMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  );
}
'use client';

import { useState, useEffect } from 'react';
import { Movie, OMDbSearchResponse, OMDbMovie } from '../../types/movies';
import MovieFilter from '../../components/MovieFilter';
import { filterMovies } from '../../utils/movieUtils';
import '../../styles/filter.css';

async function fetchPopularMovies(): Promise<Movie[]> {
  const popularSearchTerms = ['batman', 'avengers', 'star wars', 'lord rings'];
  
  try {
    const allMovies: Movie[] = [];
    
    for (const term of popularSearchTerms) {
      const response = await fetch(
        `https://www.omdbapi.com/?s=${term}&type=movie&apikey=trilogy`
      );

      if (!response.ok) {
        continue; 
      }

      const data: OMDbSearchResponse = await response.json();
      
      if (data.Response === 'True' && data.Search) {
        const movies: Movie[] = data.Search.slice(0, 3).map((movie: OMDbMovie) => {
          const category: 'now_showing' | 'coming_soon' = Math.random() > 0.5 ? 'now_showing' : 'coming_soon';
          return {
            id: movie.imdbID,
            title: movie.Title,
            overview: movie.Plot || 'No description available.',
            poster_path: movie.Poster !== 'N/A' ? movie.Poster : null,
            release_date: movie.Year,
            vote_average: movie.imdbRating ? parseFloat(movie.imdbRating) : 7.0,
            genre: movie.Genre || 'Unknown',
            category: category,
          };
        });
        
        allMovies.push(...movies);
      }
    }
    
    return allMovies;
  } catch (error) {
    console.error('Error fetching movies from OMDb:', error);
  }
}

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPopularMovies().then((fetchedMovies) => {
      setMovies(fetchedMovies);
      setLoading(false);
    });
  }, []);

  const filteredMovies = filterMovies(movies, selectedFilter);

  if (loading) {
    return (
      <div className="cinema-container cinema-section">
        <h1 className="cinema-title">Loading Movies...</h1>
      </div>
    );
  }

  return (
    <div className="cinema-container cinema-section">
      <h1 className="cinema-title">Popular Movies</h1>
      
      <MovieFilter
        selectedFilter={selectedFilter}
        onFilterChange={setSelectedFilter}
        movieCount={filteredMovies.length}
      />
      
      <div className="cinema-card-list">
        {filteredMovies.slice(0, 12).map(movie => (
          <div key={movie.id} className="cinema-card" data-testid="movie-card" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            <img
              src={
                movie.poster_path || 
                'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="120" fill="%23ddd"><rect width="80" height="120" fill="%23f0f0f0"/><text x="40" y="65" text-anchor="middle" fill="%23999" font-size="10">No Image</text></svg>'
              }
              alt={movie.title}
              style={{ width: '80px', height: '120px', borderRadius: '8px', objectFit: 'cover' }}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="80" height="120" fill="%23ddd"><rect width="80" height="120" fill="%23f0f0f0"/><text x="40" y="65" text-anchor="middle" fill="%23999" font-size="10">No Image</text></svg>';
              }}
            />
            <div style={{ flex: 1 }}>
              <div className="cinema-card-title">{movie.title}</div>
              <div className="cinema-card-sub">Genre: {movie.genre}</div>
              <div className="cinema-card-sub">Release: {movie.release_date.split('-')[0]}</div>
              <div className="cinema-card-sub" style={{ color: movie.category === 'now_showing' ? 'green' : 'orange' }}>
                {movie.category === 'now_showing' ? 'Now Showing' : 'Coming Soon'}
              </div>
            </div>
            <div className="cinema-card-balance">⭐ {movie.vote_average.toFixed(1)}/10</div>
          </div>
        ))}
      </div>
      
      {filteredMovies.length === 0 && !loading && (
        <div className="cinema-no-movies">
          <p>No movies found for the selected filter.</p>
        </div>
      )}
    </div>
  );
}

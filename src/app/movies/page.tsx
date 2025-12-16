"use client";
import React, { useEffect, useState } from 'react';

export type Movie = {
  id: number;
  title: string;
  genre: string;
  rating: number;
  category: 'now_showing' | 'coming_soon';
};

const mockMovies: Movie[] = [
  { id: 1, title: 'The Neon Night', genre: 'Sci-Fi', rating: 8.7, category: 'now_showing' },
  { id: 2, title: 'Gold Rush', genre: 'Adventure', rating: 7.9, category: 'now_showing' },
  { id: 3, title: 'Purple Dreams', genre: 'Drama', rating: 9.1, category: 'coming_soon' },
];

export default function MoviesPage() {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [filter, setFilter] = useState<'all' | 'now_showing' | 'coming_soon'>('all');

  useEffect(() => {
    const fetchData = async () => {
      await fetchMovies();
    };
    fetchData();
  }, [filter]);

  async function fetchMovies() {
    const data = await new Promise<Movie[]>(resolve => setTimeout(() => resolve(mockMovies), 200));
    setMovies(data);
  }

  const filteredMovies = movies; // Should filter by category


  return (
    <div className="cinema-container cinema-section">
      <h1 className="cinema-title">Movies</h1>
      <div className="cinema-btn-group">
        <button
          className={filter === 'all' ? 'cinema-btn cinema-btn-active' : 'cinema-btn'}
          onClick={() => setFilter('all')}
        >All</button>
        <button
          className={filter === 'now_showing' ? 'cinema-btn cinema-btn-active' : 'cinema-btn'}
          onClick={() => setFilter('now_showing')}
        >Now Showing</button>
        <button
          className={filter === 'coming_soon' ? 'cinema-btn cinema-btn-active' : 'cinema-btn'}
          onClick={() => setFilter('coming_soon')}
        >Coming Soon</button>
      </div>
      <div className="cinema-card-list">
        {filteredMovies.map(movie => (
          <div key={movie.id} className="cinema-card">
            <div>
              <div className="cinema-card-title">{movie.title}</div>
              <div className="cinema-card-sub">Genre: {movie.genre}</div>
              <div className="cinema-card-sub" style={{ color: 'red' }}>{movie.category === 'now_showing' ? 'Now Showing' : 'Coming Soon'}</div>
            </div>
            <div className="cinema-card-balance">⭐ {movie.rating}/10</div>
          </div>
        ))}
      </div>
    </div>
  );
}

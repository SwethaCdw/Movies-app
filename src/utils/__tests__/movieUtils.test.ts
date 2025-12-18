import { filterMovies, getFilterMapping } from '../movieUtils';
import { Movie } from '../../types/movies';

const testMovies: Movie[] = [
  {
    id: 'test1',
    title: 'Test Movie 1',
    overview: 'Test',
    poster_path: null,
    release_date: '2023',
    vote_average: 8.0,
    genre: 'Action',
    category: 'now_showing'
  },
  {
    id: 'test2', 
    title: 'Test Movie 2',
    overview: 'Test',
    poster_path: null,
    release_date: '2023',
    vote_average: 7.0,
    genre: 'Comedy',
    category: 'coming_soon'
  },
  {
    id: 'test3',
    title: 'Test Movie 3', 
    overview: 'Test',
    poster_path: null,
    release_date: '2023',
    vote_average: 9.0,
    genre: 'Drama',
    category: 'now_showing'
  }
];

describe('Movie Utility Functions', () => {
  describe('filterMovies', () => {
    it('should return all movies when filter is "all"', () => {
      const result = filterMovies(testMovies, 'all');
      expect(result).toHaveLength(3);
    });

    it('should filter movies by "now_showing" category', () => {
      const result = filterMovies(testMovies, 'showing');
      expect(result).toHaveLength(2);
    });

    it('should filter movies by "coming_soon" category', () => {
      const result = filterMovies(testMovies, 'upcoming');
      expect(result).toHaveLength(1);
    });
  });

  describe('getFilterMapping', () => {
    it('should map UI filter values to actual movie categories', () => {
      expect(getFilterMapping('showing')).toBe('now_showing');
      expect(getFilterMapping('upcoming')).toBe('coming_soon');
      expect(getFilterMapping('all')).toBe('all');
    });
  });
});
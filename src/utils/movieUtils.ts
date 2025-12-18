import { Movie } from '../types/movies';

export function filterMovies(movies: Movie[], filterValue: string): Movie[] {
  if (filterValue === 'all') {
    return movies;
  }
  
  return movies.filter(movie => movie.category === filterValue);
}

// Helper function to get the correct filter value (for debugging exercise)
export function getFilterMapping(uiValue: string): string {
  // TODO: Implement proper mapping between UI filter values and movie categories
  return uiValue;
}
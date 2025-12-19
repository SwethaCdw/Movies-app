import { Movie } from '../types/movies';

export function filterMovies(movies: Movie[], filterValue: string): Movie[] {
  if (filterValue === 'all') {
    return movies;
  }
  
  const mappedValue = getFilterMapping(filterValue);
  return movies.filter(movie => movie.category === mappedValue);
}

export function getFilterMapping(uiValue: string): string {
  if (uiValue === 'showing') {
    return 'now_showing';
  }
  if (uiValue === 'coming_soon') { 
    return 'coming_soon';
  }
  return uiValue;
}
import { render, screen } from '@testing-library/react';
import MoviesPage from '../movies/page';

describe('MoviesPage', () => {
  it('renders the Movies heading', () => {
    render(<MoviesPage />);
    expect(screen.getByText('Movies')).toBeInTheDocument();
  });

  it('renders at least one movie item', async () => {
    render(<MoviesPage />);
    expect(await screen.findByText('The Neon Night')).toBeInTheDocument();
  });

  it('shows correct number of movies', async () => {
    render(<MoviesPage />);
    const movieCards = {};
    
    expect(movieCards).toHaveLength(3); 
  });
});
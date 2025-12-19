import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoviesPage from './page';

global.fetch = jest.fn(() =>
  Promise.reject(new Error('API call failed - using mock data'))
) as jest.Mock;

describe('MoviesPage', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });


  it('shows correct number of movies', async () => {
    render(<MoviesPage />);
    
    await waitFor(() => {
      expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
    });
    const movieCards = await screen.findAllByTestId('movie-card');
    
    expect(movieCards).toHaveLength(3);
  });

  it('should filter movies correctly', async () => {
    render(<MoviesPage />);
    
    await waitFor(() => {
      expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
    });
    const filterSelect = screen.getByLabelText('Filter Movies:');
    fireEvent.change(filterSelect, { target: { value: 'showing' } });
    
    await waitFor(() => {
      const movieCount = screen.getByText(/Showing \d+ movie/);
      expect(movieCount).toBeInTheDocument();
    });
  });
});
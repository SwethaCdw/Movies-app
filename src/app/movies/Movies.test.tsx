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

  it('renders the Popular Movies heading', async () => {
    render(<MoviesPage />);
    
    await waitFor(() => {
      expect(screen.getByText('Popular Movies')).toBeInTheDocument();
    });
  });

  it('renders movie items from mock data when API fails', async () => {
    render(<MoviesPage />);
    
    await waitFor(() => {
      expect(screen.getByText('The Shawshank Redemption')).toBeInTheDocument();
    });
    
    expect(screen.getByText('The Dark Knight')).toBeInTheDocument();
    expect(screen.getByText('The Lord of the Rings: The Return of the King')).toBeInTheDocument();
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
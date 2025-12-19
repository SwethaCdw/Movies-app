import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import MoviesPage from './page';

global.fetch = jest.fn();

describe('MoviesPage Tests', () => {
  beforeEach(() => {
    (fetch as jest.Mock).mockClear();
  });

  it('finds movie cards on the page', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        Response: 'True',
        Search: [
          {
            Title: 'Batman',
            Year: '2022',
            imdbID: 'tt1234567',
            Type: 'movie',
            Poster: 'N/A',
            Genre: 'Action'
          },
          {
            Title: 'Spider-Man', 
            Year: '2023',
            imdbID: 'tt1234568',
            Type: 'movie',
            Poster: 'N/A',
            Genre: 'Action'
          }
        ]
      })
    });
    render(<MoviesPage />);

    await waitFor(() => {
      expect(screen.getByText('Popular Movies')).toBeInTheDocument();
    });

    const movieCards = screen.getAllByTestId('movieCard');
    expect(movieCards).toHaveLength(8);
  });

  it('shows the filter dropdown', async () => {
    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: () => Promise.resolve({
        Response: 'True',
        Search: [
          {
            Title: 'Test Movie',
            Year: '2023',
            imdbID: 'tt9999999',
            Type: 'movie',
            Poster: 'N/A',
            Genre: 'Comedy'
          }
        ]
      })
    });

    render(<MoviesPage />);

    await waitFor(() => {
      expect(screen.getByText('Popular Movies')).toBeInTheDocument();
    });

    //TODO: complete the test case
    // Step 1: Find the filter dropdown
    // Step 2: Change the filter
    // Step 3: Check if the dropdown value appears
   
  });
});

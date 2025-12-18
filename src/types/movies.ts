export interface Movie {
  id: string;
  title: string;
  overview: string;
  poster_path: string | null;
  release_date: string;
  vote_average: number;
  genre: string;
  category: 'now_showing' | 'coming_soon';
}

export interface OMDbMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  Plot?: string;
  Genre?: string;
  imdbRating?: string;
}

export interface OMDbSearchResponse {
  Search: OMDbMovie[];
  totalResults: string;
  Response: string;
}
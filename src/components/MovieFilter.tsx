import { FilterOption, MovieFilterProps } from '../types/filter';

const filterOptions: FilterOption[] = [
  { value: 'all', label: 'All Movies' },
  { value: 'showing', label: 'Now Showing' },   
  { value: 'upcoming', label: 'Coming Soon' },     
];

export default function MovieFilter({ selectedFilter, onFilterChange, movieCount = 0 }: MovieFilterProps) {
  return (
    <div className="cinema-filter-container">
      <div className="cinema-filter-wrapper">
        <label htmlFor="movie-filter" className="cinema-filter-label">
          Filter Movies:
        </label>
        <select
          id="movie-filter"
          value={selectedFilter}
          onChange={(e) => onFilterChange(e.target.value)}
          className="cinema-filter-select"
        >
          {filterOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className="cinema-filter-count">
        Showing {movieCount} movie{movieCount !== 1 ? 's' : ''}
      </div>
    </div>
  );
}
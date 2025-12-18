export interface FilterOption {
  value: string;
  label: string;
}

export interface MovieFilterProps {
  selectedFilter: string;
  onFilterChange: (filter: string) => void;
  movieCount?: number;
}
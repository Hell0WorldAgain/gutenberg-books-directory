import { useState, useEffect } from 'react';
import { useDebounce } from '@/hooks/useDebounce';
import styles from './SearchBar.module.css';

interface SearchBarProps {
  onSearch: (query: string) => void;
  placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  placeholder = 'Search',
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);

  const handleClear = () => {
    setSearchTerm('');
  };

  return (
    <div className={styles.searchBar}>
      <svg
        className={styles.searchIcon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" strokeWidth="2" />
        <path d="M21 21l-4.35-4.35" strokeWidth="2" strokeLinecap="round" />
      </svg>
      
      <input
        type="search"
        className={styles.input}
        placeholder={placeholder}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        aria-label="Search books"
      />
      
      {searchTerm && (
        <button
          className={styles.clearButton}
          onClick={handleClear}
          aria-label="Clear search"
          type="button"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
            <path
              d="M18 6L6 18M6 6l12 12"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      )}
    </div>
  );
};

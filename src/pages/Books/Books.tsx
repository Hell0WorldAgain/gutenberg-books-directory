// src/pages/Books/Books.tsx - OPTIMIZED FOR PERFORMANCE

import { useEffect, useCallback, memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchBar, BookCard, Loading } from '@/components';
import { useBookStore } from '@/store/bookStore';
import { useInfiniteScroll } from '@/hooks/useInfiniteScroll';
import { GENRES } from '@/utils/constants';
import styles from './Books.module.css';

// Memoize BookCard to prevent unnecessary re-renders
const MemoizedBookCard = memo(BookCard);

export const Books: React.FC = () => {
  const navigate = useNavigate();
  
  const {
    books,
    filters,
    isLoading,
    isLoadingMore,
    hasMore,
    fetchBooks,
    setFilters,
    loadMore,
  } = useBookStore();

  // Fetch initial data only once
  useEffect(() => {
    if (books.length === 0 && !isLoading && !filters.searchQuery) {
      fetchBooks(true);
    }
  }, []);

  // Infinite scroll
  const scrollTrigger = useInfiniteScroll({
    onLoadMore: loadMore,
    hasMore,
    isLoading: isLoadingMore,
  });

  // Optimized search handler - memoized
  const handleSearch = useCallback(
    (query: string) => {
      setFilters({ searchQuery: query });
    },
    [setFilters]
  );

  const handleBack = () => {
    navigate('/');
  };

  const currentGenre = GENRES.find((g) => g.topic === filters.genre);

  return (
    <div className={styles.books}>
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <button className={styles.backButton} onClick={handleBack}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path
                d="M19 12H5M12 19l-7-7 7-7"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            {currentGenre && <span>{currentGenre.label}</span>}
          </button>

          <SearchBar onSearch={handleSearch} />
        </div>
      </header>

      <main className={styles.main}>
        {isLoading && books.length === 0 ? (
          <Loading message="Loading books..." />
        ) : books.length === 0 ? (
          <div className={styles.emptyState}>
            <div className={styles.emptyIcon}>📚</div>
            <h2 className={styles.emptyTitle}>No books found</h2>
            <p className={styles.emptyText}>
              Try adjusting your search or explore a different genre.
            </p>
          </div>
        ) : (
          <>
            <div className={styles.booksGrid}>
              {books.map((book, index) => (
                <MemoizedBookCard 
                  key={`${book.id}-${index}`} 
                  book={book} 
                  index={index} 
                />
              ))}
            </div>

            {hasMore && (
              <div ref={scrollTrigger} className={styles.scrollTrigger}>
                {isLoadingMore && <Loading message="Loading more..." />}
              </div>
            )}
          </>
        )}
      </main>
    </div>
  );
};
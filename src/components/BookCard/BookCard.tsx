// src/components/BookCard/BookCard.tsx - OPTIMIZED FOR VIRTUALIZATION

import { Book } from '@/types/book.types';
import { getBookCoverUrl, formatAuthors, getViewableLink } from '@/utils/bookUtils';
import styles from './BookCard.module.css';

interface BookCardProps {
  book: Book;
  index: number;
}

export const BookCard: React.FC<BookCardProps> = ({ book }) => {
  const coverUrl = getBookCoverUrl(book);
  const authors = formatAuthors(book);

  const handleClick = () => {
    const viewableFormat = getViewableLink(book);
    
    if (viewableFormat) {
      window.open(viewableFormat.url, '_blank', 'noopener,noreferrer');
    } else {
      alert('No viewable version available.');
    }
  };

  return (
    <article
      className={styles.bookCard}
      onClick={handleClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleClick();
        }
      }}
      aria-label={`Open ${book.title} by ${authors}`}
    >
      <div className={styles.coverContainer}>
        {coverUrl ? (
          <img
            src={coverUrl}
            alt={`Cover of ${book.title}`}
            className={styles.cover}
            loading="lazy"
          />
        ) : (
          <div className={styles.placeholderCover}>
            <span className={styles.placeholderIcon}>📖</span>
          </div>
        )}
        <div className={styles.overlay}>
          <span className={styles.viewLabel}>View Book</span>
        </div>
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>{authors}</p>
      </div>
    </article>
  );
};
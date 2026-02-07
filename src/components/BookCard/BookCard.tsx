import { motion } from 'framer-motion';
import { Book } from '@/types/book.types';
import { getBookCoverUrl, formatAuthors, getViewableLink } from '@/utils/bookUtils';
import styles from './BookCard.module.css';

interface BookCardProps {
  book: Book;
  index: number;
}

export const BookCard: React.FC<BookCardProps> = ({ book, index }) => {
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
    <motion.article
      className={styles.bookCard}
      onClick={handleClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      aria-label={`Open ${book.title} by ${authors}`}
    >
      <div className={styles.coverContainer}>
          <img
            src={coverUrl}
            alt={`Cover of ${book.title}`}
            className={styles.cover}
            loading="lazy"
          />
      </div>
      
      <div className={styles.content}>
        <h3 className={styles.title}>{book.title}</h3>
        <p className={styles.author}>{authors}</p>
      </div>
    </motion.article>
  );
};

import { motion } from 'framer-motion';
import { Genre } from '@/types/book.types';
import styles from './GenreCard.module.css';

interface GenreCardProps {
  genre: Genre;
  onClick: () => void;
  index: number;
}

export const GenreCard: React.FC<GenreCardProps> = ({ genre, onClick }) => {
  const isImageIcon = genre.icon.startsWith('/');

  return (
    <motion.button
      className={styles.genreCard}
      onClick={onClick}
      aria-label={`Browse ${genre.label} books`}
    >
      <div className={styles.icon}>
        {isImageIcon ? (
          <img 
            src={genre.icon} 
            alt={genre.label}
            className={styles.iconImage}
          />
        ) : (
          <span aria-hidden="true">{genre.icon}</span>
        )}
      </div>
      <div className={styles.content}>
        <h3 className={styles.label}>{genre.label}</h3>
      </div>
      <svg
        className={styles.arrow}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path
          d="M5 12h14M12 5l7 7-7 7"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </motion.button>
  );
};
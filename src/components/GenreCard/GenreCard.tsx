// src/components/GenreCard/GenreCard.tsx

import { motion } from 'framer-motion';
import { Genre } from '@/types/book.types';
import styles from './GenreCard.module.css';

interface GenreCardProps {
  genre: Genre;
  onClick: () => void;
  index: number;
}

export const GenreCard: React.FC<GenreCardProps> = ({ genre, onClick, index }) => {
  return (
    <motion.button
      className={styles.genreCard}
      onClick={onClick}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      whileHover={{ scale: 1.02, y: -4 }}
      whileTap={{ scale: 0.98 }}
      aria-label={`Browse ${genre.label} books`}
    >
      <span className={styles.icon} aria-hidden="true">
        {genre.icon}
      </span>
      <div className={styles.content}>
        <h3 className={styles.label}>{genre.label}</h3>
        <p className={styles.description}>{genre.description}</p>
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

import { motion } from 'framer-motion';
import { Genre } from '@/types/book.types';
import styles from './GenreCard.module.css';

interface GenreCardProps {
  genre: Genre;
  onClick: () => void;
  index: number;
}

export const GenreCard: React.FC<GenreCardProps> = ({ genre, onClick }) => {
  return (
    <motion.button
      className={styles.genreCard}
      onClick={onClick}
      aria-label={`Browse ${genre.label} books`}
    >
      <div className={styles.icon}>
          <img 
            src={genre.icon} 
            alt={genre.label}
            className={styles.iconImage}
          />
      </div>
      <div className={styles.content}>
        <h3 className={styles.label}>{genre.label}</h3>
      </div>
      <div className={styles.arrow}>
        <img 
            src={genre.arrow}
          />
      </div>
    </motion.button>
  );
};
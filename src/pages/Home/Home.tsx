import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { GenreCard } from '@/components';
import { GENRES } from '@/utils/constants';
import { useBookStore } from '@/store/bookStore';
import styles from './Home.module.css';

export const Home: React.FC = () => {
  const navigate = useNavigate();
  const setFilters = useBookStore((state) => state.setFilters);

  const handleGenreSelect = (genreTopic: string) => {
    setFilters({ genre: genreTopic, searchQuery: '' });
    navigate('/books');
  };

  return (
    <div className={styles.home}>
      <div className={styles.hero}>
        <h1 className={styles.title}>
          Gutenberg Project
        </h1>
        <p className={styles.subtitle}>
          A social cataloging website that allows you to freely search it's database of books, annotations, and reviews.
        </p>
      </div>

      <motion.div
        className={styles.genreGrid}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {GENRES.map((genre, index) => (
          <GenreCard
            key={genre.id}
            genre={genre}
            onClick={() => handleGenreSelect(genre.topic)}
            index={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

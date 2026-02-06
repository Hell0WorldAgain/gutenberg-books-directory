// src/pages/Home/Home.tsx

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
      <motion.div
        className={styles.hero}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 className={styles.title}>
          The Gutenberg
          <span className={styles.titleAccent}>Literary Archive</span>
        </h1>
        <p className={styles.subtitle}>
          Explore thousands of classic works from Project Gutenberg's vast collection.
          Discover timeless literature spanning centuries of human creativity.
        </p>
      </motion.div>

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

      <motion.div
        className={styles.footer}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <p className={styles.footerText}>
          All books are from the public domain courtesy of{' '}
          <a
            href="https://www.gutenberg.org"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.footerLink}
          >
            Project Gutenberg
          </a>
        </p>
      </motion.div>
    </div>
  );
};

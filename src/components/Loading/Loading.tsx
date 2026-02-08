import styles from './Loading.module.css';

interface LoadingProps {
  message?: string;
}

export const Loading: React.FC<LoadingProps> = ({ message = 'Loading...' }) => {
  return (
    <div className={styles.loading}>
      <div className={styles.spinner} aria-hidden="true">
        <div className={styles.spinnerInner}></div>
      </div>
      <p className={styles.message}>{message}</p>
    </div>
  );
};

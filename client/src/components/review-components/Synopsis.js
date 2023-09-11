import styles from './styles/Synopsis.module.css';

export default function Synopsis({ synopsis }) {
  return (
    <div className={styles.synopsis}>
        <header>
            <h6>Synopsis</h6>
        </header>
        <div>
            <p>{synopsis}</p>
        </div>
    </div>
  );
}
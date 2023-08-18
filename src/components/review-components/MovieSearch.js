import styles from './styles/MovieSearch.module.css';

export default function MovieSearch() {
  
  return (
    <div className={styles.searchContainer}>
        <form className={styles.search}>
            <input type="text" placeholder="Find a movie or show..." />
            <button type='button'>Search</button>
        </form>
    </div>
  );
}
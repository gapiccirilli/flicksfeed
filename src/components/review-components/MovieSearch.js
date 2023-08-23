import { useContext } from 'react';
import styles from './styles/MovieSearch.module.css';
import { ReviewContext } from '../../context/ReviewProvider';

export default function MovieSearch({ search }) {

  const handleQuery = (event) => {
    search(event.target.value);
  };

  return (
    <div className={styles.searchContainer}>
        <form className={styles.search}>
            <input type="text" placeholder="Find a movie or show..." onChange={handleQuery} />
        </form>
    </div>
  );
}
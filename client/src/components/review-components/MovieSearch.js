import { useRef, useState } from 'react';
import styles from './styles/MovieSearch.module.css';
import { getMovies } from '../../hooks/requests/GET';

export default function MovieSearch({ onMovieSelect }) {

  const searchRef = useRef("");
  const [movies, setMovies] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleQuery = (event) => {

    if (event.target.value.length > 2) {
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }

    getMovies(event, setMovies);
  };
  
  return (
    <div className={styles.withDropDown}>
      <div className={styles.searchContainer}>
        <form className={styles.search}>
            <input type="text" placeholder="Find a movie or show..." onChange={handleQuery} ref={searchRef} />
        </form>
        {showDropDown && <div className={styles.dropDown}>
          {movies.map((movie) => <div onClick={() => onMovieSelect(movie, setShowDropDown, searchRef)} className={styles.listItem} key={movie.imdbID}>
            <img src={movie.Poster} alt={movie.Title} style={{width: "4rem", height: "5rem"}}/>
            <div className={styles.movieData}>
              <div className={styles.title}>
                <span>Title: </span>
                <span>{movie.Title}</span>
              </div>
              <div className={styles.type}>
                <span>Media: </span>
                <span>{movie.Type[0].toUpperCase() + movie.Type.substring(1, movie.Type.length)}</span>
              </div>
              <div className={styles.release}>
                <span>Release: </span>
                <span>{movie.Year}</span>
              </div>
            </div>
            </div>)}
        </div>}
      </div>
    </div>
  );
}
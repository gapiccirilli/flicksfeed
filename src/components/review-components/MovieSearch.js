import { useContext, useState } from 'react';
import styles from './styles/MovieSearch.module.css';
import { ReviewContext } from '../../context/ReviewProvider';

export default function MovieSearch({ onMovie }) {

  const [movies, setMovies] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);

  const handleQuery = async (event) => {

    if (event.target.value.length > 2) {
      setShowDropDown(true);
    } else {
      setShowDropDown(false);
    }

    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=367fae11&s=${event.target.value}`);
      
      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();

      if (data.Response === "True") {
        // onMovie(data.Search);
        setMovies(data.Search);
      }

    } catch(error) {

    }
  };
  
  return (
    <div className={styles.withDropDown}>
      <div className={styles.searchContainer}>
        <form className={styles.search}>
            <input type="text" placeholder="Find a movie or show..." onChange={handleQuery} />
        </form>
        {showDropDown && <div className={styles.dropDown}>
          {movies.map((movie) => <div className={styles.listItem} key={movie.imdbID}>
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
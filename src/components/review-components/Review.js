import SubmitButton from '../buttons/SubmitButton';
import CancelButton from '../buttons/CancelButton';
import MediaData from './MediaData';
import MovieSearch from './MovieSearch';
import Rating from './Rating';
import Synopsis from './Synopsis';
import styles from './styles/Review.module.css';
import { useReview } from '../../hooks/useReview';
import { useState } from 'react';

export default function Review() {
  const [movie, setMovie] = useState({});

  const [reviewState, dispatch] = useReview();
  // const showMedia = reviewState.mediaIsSelected;
  const showMedia = true;

  function rate(rating) {
    dispatch({type: "review/rate", payload: {rating: rating.rating, ratingClickCount: rating.ratingClickCount}});
  }

  function cancel() {
    dispatch({type: "review/cancel"});
  }

  const handleMovieSelect = async (movie) => {
    // make api call for synopsis | refactor into new hook
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=367fae11&i=${movie.imdbID}&plot=full`);
      
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      
      const data = await response.json();
      
      if (data.Response === "True") {
        setMovie(data);
      }

    } catch(error) {
      console.log(error.message);
    }
    // ------------------------------------------------------------
  };

  return (
    <div className={styles.review}>
      {showMedia && <div className={styles.movieData}>
        <MediaData data={movie}/>
        <Synopsis synopsis={movie.Plot}/>
      </div>}
      <div className={styles.tools}>
        <MovieSearch onMovieSelect={handleMovieSelect} />
        {showMedia && <Rating rate={rate}/>}
      </div>
      <div className={styles.myReview}>
        <textarea className={styles.textArea} placeholder='Tell us your thoughts...' disabled={showMedia ? false : true} />
      </div>
      <div className={styles.btnsContainer}>
        {showMedia && <div className={styles.btns}>
          <SubmitButton>Submit</SubmitButton>
          <CancelButton onCancel={cancel}>Cancel</CancelButton>
        </div>}
      </div>
    </div>
  );
}
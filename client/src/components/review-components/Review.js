import SubmitButton from '../buttons/SubmitButton';
import CancelButton from '../buttons/CancelButton';
import MediaData from './MediaData';
import MovieSearch from './MovieSearch';
import Rating from './Rating';
import Synopsis from './Synopsis';
import styles from './styles/Review.module.css';
import { useRef, useState } from 'react';
import { getMovieById } from '../../hooks/requests/GET';
import { useStarRating } from '../../hooks/useStarRating';

export default function Review({ onPost }) {
  const [movie, setMovie] = useState({});
  const [showMedia, setShowMedia] = useState(false);
  const [ratingState, dispatch] = useStarRating();

  const ratingCount = useRef(0);
  const textRef = useRef("");

  const handleMovieSelect = (movie, closeCallBack, inputElement) => {
    getMovieById(movie.imdbID, {setMovie, setShowMedia, closeCallBack}, inputElement);
    dispatch({type: "click", payload: 0});
    ratingCount.current = 0;
  };

  const handleSubmit = () => {
    onPost((prev) => {
      return [...prev, {movie: movie, rating: ratingState.clickState, postText: textRef.current.value}];
    });
    handleCancel();
  };

  function handleCancel() {
    setShowMedia(false);
    if (ratingState.clickState !== 0) {
      dispatch({type: "click", payload: 0});
      ratingCount.current = 0;
    }
    textRef.current.value = "";
  };
  console.log(movie);

  return (
    <div className={styles.review}>
      {showMedia && <div className={styles.movieData}>
        <MediaData data={movie}/>
        <Synopsis synopsis={movie.Plot}/>
      </div>}
      <div className={styles.tools}>
        <MovieSearch onMovieSelect={handleMovieSelect} />
        {showMedia && <Rating dispatch={dispatch} ratingState={ratingState} ratingCount={ratingCount} />}
      </div>
      <div className={styles.myReview}>
        <textarea className={styles.textArea} placeholder={showMedia ? 'Tell us your thoughts...' : ''} 
        disabled={showMedia ? false : true} ref={textRef} />
      </div>
      <div className={styles.btnsContainer}>
        {showMedia && <div className={styles.btns}>
          <SubmitButton onSubmit={handleSubmit} 
          unactive={ratingState.clickState === 0}>Submit</SubmitButton>
          <CancelButton onCancel={handleCancel}>Cancel</CancelButton>
        </div>}
      </div>
    </div>
  );
}
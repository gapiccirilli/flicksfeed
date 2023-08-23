import SubmitButton from '../buttons/SubmitButton';
import CancelButton from '../buttons/CancelButton';
import MediaData from './MediaData';
import MovieSearch from './MovieSearch';
import Rating from './Rating';
import Synopsis from './Synopsis';
import styles from './styles/Review.module.css';
import { useReview } from '../../hooks/useReview';

export default function Review() {

  const [reviewState, dispatch] = useReview();
  // const showMedia = reviewState.mediaIsSelected;
  const showMedia = true;

  function setMovie(movie) {
    dispatch({type: "review/setMovie", payload: {movieImg: movie.image, movieData: movie.data, synopsis: movie.synopsis}});
  }

  function search(query) {
    dispatch({type: "review/search", payload: query});
  }

  function rate(rating) {
    dispatch({type: "review/rate", payload: {rating: rating.rating, ratingClickCount: rating.ratingClickCount}});
  }

  function post(reviewPost) {
    dispatch({type: "review/post", payload: reviewPost})
  }

  function cancel() {
    dispatch({type: "review/cancel"});
  }

  return (
    <div className={styles.review}>
      {showMedia && <div className={styles.movieData}>
        <MediaData data={{movieData: reviewState.movieData, movieImg: reviewState.movieImg}}/>
        <Synopsis synopsis={reviewState.synopsis}/>
      </div>}
      <div className={styles.tools}>
        <MovieSearch search={search} onMovie={setMovie}/>
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
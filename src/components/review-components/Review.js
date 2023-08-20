import SubmitButton from '../buttons/SubmitButton';
import CancelButton from '../buttons/CancelButton';
import MediaData from './MediaData';
import MovieSearch from './MovieSearch';
import Rating from './Rating';
import Synopsis from './Synopsis';
import styles from './styles/Review.module.css';

export default function Review() {

  return (
    <div className={styles.review}>
      <div className={styles.movieData}>
        <MediaData />
        <Synopsis />
      </div>
      <div className={styles.tools}>
        <MovieSearch />
        <Rating />
      </div>
      <div className={styles.myReview}>
        <textarea className={styles.textArea} placeholder='Tell us your thoughts...' />
      </div>
      <div className={styles.btnsContainer}>
        <div className={styles.btns}>
          <SubmitButton>Submit</SubmitButton>
          <CancelButton>Cancel</CancelButton>
        </div>
      </div>
    </div>
  );
}
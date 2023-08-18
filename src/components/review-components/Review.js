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

      </div>
      <div className={styles.btns}>

      </div>
    </div>
  );
}
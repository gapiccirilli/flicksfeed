import styles from './styles/Rating.module.css';
import star from "../../assets/star-rating.png";

export default function Rating() {
  
  return (
    <div className={styles.ratingContainer}>
        <p>How would you rate this media?</p>
        <div className={styles.rating}>
            <img className={`${styles.star} ${styles.star1}`} src={star} alt="rating" />
            <img className={`${styles.star} ${styles.star2}`} src={star} alt="rating" />
            <img className={`${styles.star} ${styles.star3}`} src={star} alt="rating" />
            <img className={`${styles.star} ${styles.star4}`} src={star} alt="rating" />
            <img className={`${styles.star} ${styles.star5}`} src={star} alt="rating" />
        </div>
    </div>
  );
}
import styles from '../review-components/styles/Rating.module.css';
import star from "../../assets/star-rating.png";
import starFill from "../../assets/star-colored.png";

export default function StaticRating({ rating=0 }) {

  return (
    <div className={styles.rating}>
        <img 
        className={`${styles.star}`} src={rating >= 1 ? starFill : star} 
        alt="rating" style={{cursor: "default"}}/>
        <img 
        className={`${styles.star}`} src={rating >= 2 ? starFill : star} 
        alt="rating" style={{cursor: "default"}}/>
        <img 
        className={`${styles.star}`} src={rating >= 3 ? starFill : star} 
        alt="rating" style={{cursor: "default"}}/>
        <img 
        className={`${styles.star}`} src={rating >= 4 ? starFill : star} 
        alt="rating" style={{cursor: "default"}}/>
        <img
        className={`${styles.star}`} src={rating >= 5 ? starFill : star} 
        alt="rating" style={{cursor: "default"}}/>
    </div>
  );
}
import styles from './styles/Rating.module.css';
import star from "../../assets/star-rating.png";
import starFill from "../../assets/star-colored.png";
import { useStarRating } from '../../hooks/useStarRating';

export default function Rating() {
    const [ratingState, dispatch] = useStarRating();


  return (
    <fieldset className={styles.ratingContainer}>
        <legend align="center">How would you rate this media?</legend>
        <div className={styles.rating}>
            <img onMouseOver={() => {dispatch({type: "oneStar"})}} onMouseOut={() => {dispatch({type: "noRating"})}}
            onClick={() => {dispatch({type: "oneStar"})}}
            className={`${styles.star}`} src={ratingState.oneStar === "starFill" ? starFill : star} alt="rating" />
            <img onMouseOver={() => {dispatch({type: "twoStar"})}} onMouseOut={() => {dispatch({type: "noRating"})}}
            className={`${styles.star}`} src={ratingState.twoStar === "starFill" ? starFill : star} alt="rating" />
            <img onMouseOver={() => {dispatch({type: "threeStar"})}} onMouseOut={() => {dispatch({type: "noRating"})}}
            className={`${styles.star}`} src={ratingState.threeStar === "starFill" ? starFill : star} alt="rating" />
            <img onMouseOver={() => {dispatch({type: "fourStar"})}} onMouseOut={() => {dispatch({type: "noRating"})}}
            className={`${styles.star}`} src={ratingState.fourStar === "starFill" ? starFill : star} alt="rating" />
            <img onMouseOver={() => {dispatch({type: "fiveStar"})}} onMouseOut={() => {dispatch({type: "noRating"})}}
            className={`${styles.star}`} src={ratingState.fiveStar === "starFill" ? starFill : star} alt="rating" />
        </div>
    </fieldset>
  );
}
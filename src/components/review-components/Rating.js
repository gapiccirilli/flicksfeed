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
            <img onMouseOver={() => {dispatch({type: "hover", payload: 1})}} 
            onMouseOut={() => {dispatch({type: "hoverOff", payload: 1})}}
            onClick={() => {dispatch({type: "click", payload: 1})}}
            className={`${styles.star}`} src={ratingState.hoverState > 0 || ratingState.clickState > 0 ? starFill : star} 
            alt="rating" />
            <img onMouseOver={() => {dispatch({type: "hover", payload: 2})}} 
            onMouseOut={() => {dispatch({type: "hoverOff", payload: 2})}}
            onClick={() => {dispatch({type: "click", payload: 2})}}
            className={`${styles.star}`} src={ratingState.hoverState > 1 ||  ratingState.clickState > 1 ? starFill : star} 
            alt="rating" />
            <img onMouseOver={() => {dispatch({type: "hover", payload: 3})}} 
            onMouseOut={() => {dispatch({type: "hoverOff", payload: 3})}}
            onClick={() => {dispatch({type: "click", payload: 3})}}
            className={`${styles.star}`} src={ratingState.hoverState > 2 || ratingState.clickState > 2 ? starFill : star} 
            alt="rating" />
            <img onMouseOver={() => {dispatch({type: "hover", payload: 4})}} 
            onMouseOut={() => {dispatch({type: "hoverOff", payload: 4})}}
            onClick={() => {dispatch({type: "click", payload: 4})}}
            className={`${styles.star}`} src={ratingState.hoverState > 3 || ratingState.clickState > 3 ? starFill : star} 
            alt="rating" />
            <img onMouseOver={() => {dispatch({type: "hover", payload: 5})}} 
            onMouseOut={() => {dispatch({type: "hoverOff", payload: 5})}}
            onClick={() => {dispatch({type: "click", payload: 5})}}
            className={`${styles.star}`} src={ratingState.hoverState > 4 || ratingState.clickState > 4 ? starFill : star} 
            alt="rating" />
        </div>
    </fieldset>
  );
}
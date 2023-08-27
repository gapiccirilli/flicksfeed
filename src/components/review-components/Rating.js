import styles from './styles/Rating.module.css';
import star from "../../assets/star-rating.png";
import starFill from "../../assets/star-colored.png";
import { useStarRating } from '../../hooks/useStarRating';
import { useEffect, useRef } from 'react';

export default function Rating({ dispatch, ratingState, ratingCount }) {

  // const [ratingState, dispatch] = useStarRating();
  // const ratingCount = useRef(0);

  // const handleRating = () => {
  //   rate({rating: ratingState.clickState, ratingClickCount: ratingCount});
  // };

  return (
    <fieldset className={styles.ratingContainer}>
        <legend align="center">How would you rate this media?</legend>
        <div className={styles.rating}>
            <img onMouseOver={() => {dispatch({type: "hover", payload: 1})}} 
            onMouseOut={() => {dispatch({type: "hoverOff", payload: 1})}}
            onClick={() => {dispatch({type: "click", payload: 1}); ++ratingCount.current;}}
            className={`${styles.star}`} src={ratingState.hoverState > 0 || ratingState.clickState > 0 ? starFill : star} 
            alt="rating" />
            <img onMouseOver={() => {dispatch({type: "hover", payload: 2})}} 
            onMouseOut={() => {dispatch({type: "hoverOff", payload: 2})}}
            onClick={() => {dispatch({type: "click", payload: 2}); ++ratingCount.current;}}
            className={`${styles.star}`} src={ratingState.hoverState > 1 || ratingState.clickState > 1 ? starFill : star} 
            alt="rating" />
            <img onMouseOver={() => {dispatch({type: "hover", payload: 3})}} 
            onMouseOut={() => {dispatch({type: "hoverOff", payload: 3})}}
            onClick={() => {dispatch({type: "click", payload: 3}); ++ratingCount.current;}}
            className={`${styles.star}`} src={ratingState.hoverState > 2 || ratingState.clickState > 2 ? starFill : star} 
            alt="rating" />
            <img onMouseOver={() => {dispatch({type: "hover", payload: 4})}} 
            onMouseOut={() => {dispatch({type: "hoverOff", payload: 4})}}
            onClick={() => {dispatch({type: "click", payload: 4}); ++ratingCount.current;}}
            className={`${styles.star}`} src={ratingState.hoverState > 3 || ratingState.clickState > 3 ? starFill : star} 
            alt="rating" />
            <img onMouseOver={() => {dispatch({type: "hover", payload: 5})}} 
            onMouseOut={() => {dispatch({type: "hoverOff", payload: 5})}}
            onClick={() => {dispatch({type: "click", payload: 5}); ++ratingCount.current;}}
            className={`${styles.star}`} src={ratingState.hoverState > 4 || ratingState.clickState > 4 ? starFill : star} 
            alt="rating" />
        </div>
    </fieldset>
  );
}
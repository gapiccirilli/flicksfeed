import styles from './styles/PostContainer.module.css';
import MediaData from '../review-components/MediaData';
import StaticRating from './StaticRating';
import FilmDesign from './FilmDesign';

export default function PostContainer({ movie, rating, text }) {

  return (
    <div className={styles.container}>
      <FilmDesign />
        <div className={`${styles.post}`}>
          <MediaData data={movie} width={"100%"} height={"55%"}/>
          <StaticRating rating={rating}/>
          <div className={`${text ? styles.text : styles.blank}`}>
            <p>{text ? text : `${rating} ${rating === 1 ? "star" : "stars"}`}</p>
          </div>
        </div>
        <FilmDesign />
    </div>
  );
}
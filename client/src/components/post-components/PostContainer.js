import styles from './styles/PostContainer.module.css';
import MediaData from '../review-components/MediaData';
import StaticRating from './StaticRating';
import FilmDesign from './FilmDesign';
import InteractBox from './InteractBox';

export default function PostContainer({ movie, rating, text, isPlain }) {

  return (
    <div className={styles.container}>
      {!isPlain && <FilmDesign />}
        <div className={`${styles.post}`} style={isPlain ? {width: "100%"} : {}}>
          <MediaData data={movie} width={"100%"} height={"55%"}/>
          <StaticRating rating={rating}/>
          <div className={`${text ? styles.text : styles.blank}`}>
            <p>{text ? text : `${rating} ${rating === 1 ? "star" : "stars"}`}</p>
          </div>
          <InteractBox />
        </div>
        {!isPlain && <FilmDesign />}
    </div>
  );
}
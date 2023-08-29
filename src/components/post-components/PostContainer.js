import styles from './styles/PostContainer.module.css';
import { testMovie } from '../../testData';
import MediaData from '../review-components/MediaData';
import StaticRating from './StaticRating';
import FilmDesign from './FilmDesign';

export default function PostContainer() {
  return (
    <div className={styles.container}>
      <FilmDesign />
        <div className={`${styles.post}`}>
          <MediaData data={testMovie} width={"100%"} height="55%"/>
          <StaticRating rating="2"/>
        </div>
        <FilmDesign />
    </div>
  );
}
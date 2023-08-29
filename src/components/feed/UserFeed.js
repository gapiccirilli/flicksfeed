import PostContainer from '../post-components/PostContainer';
import Review from '../review-components/Review';
import styles from './styles/UserFeed.module.css';

export default function UserFeed() {
  return (
    <section className={`${styles.feed} section`}>
        <Review />
        <PostContainer />
        <PostContainer />
        <PostContainer />
    </section>
  );
}
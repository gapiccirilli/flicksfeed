import { useContext } from 'react';
import Comments from '../components/comments/Comments';
import UserFeed from '../components/feed/UserFeed';
import SideBar from '../components/nav/SideBar';
import { ReviewProvider } from '../context/ReviewProvider';
import styles from './styles/Feed.module.css';
import { FeedContext } from '../context/FeedProvider';

export default function Feed() {
  const ctx = useContext(FeedContext);
  return (
    <main className={styles.feedContainer}>
      <SideBar />
      <ReviewProvider>
        <UserFeed />
      </ReviewProvider>
      {ctx.feedState.showComments && <Comments />}
    </main>
  );
}
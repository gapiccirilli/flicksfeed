import UserFeed from '../components/feed/UserFeed';
import MyFlicks from '../components/my-flicks/MyFlicks';
import SideBar from '../components/nav/SideBar';
import { ReviewProvider } from '../context/ReviewProvider';
import styles from './styles/Feed.module.css';

export default function Feed() {
  return (
    <main className={styles.feedContainer}>
      <SideBar />
      <ReviewProvider>
        <UserFeed />
      </ReviewProvider>
      <MyFlicks />
    </main>
  );
}
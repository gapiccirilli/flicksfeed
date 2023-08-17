import UserFeed from '../components/feed/UserFeed';
import MyFlicks from '../components/my-flicks/MyFlicks';
import SideBar from '../components/nav/SideBar';
import styles from './styles/Feed.module.css';

export default function Feed() {
  return (
    <main className={styles.feedContainer}>
      <SideBar />
      <UserFeed />
      <MyFlicks />
    </main>
  );
}
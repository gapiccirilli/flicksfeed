import { useState } from 'react';
import { ReviewProvider } from '../../context/ReviewProvider';
import PostContainer from '../post-components/PostContainer';
import Review from '../review-components/Review';
import styles from './styles/UserFeed.module.css';

export default function UserFeed() {
  const [posts, setPosts] = useState([]);
  return (
      <section className={`${styles.feed} section`}>
        <Review onPost={setPosts}/>
        {posts.map((post) => <PostContainer movie={post.movie} rating={post.rating} text={post.postText}/>)}
      </section>
  );
}
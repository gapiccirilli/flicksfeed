import { useState } from 'react';
import styles from './styles/Comments.module.css';
import { testComments } from '../../test-data/testComments'; 
import Comment from './Comment';

export default function Comments() {
  const [comments, setComments] = useState(testComments);

  return (
    <div className={`${styles.commentsSection} section`}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Comments</h2>
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.commentsInnerContainer}>
        {comments.map((comment) => <Comment comment={comment}/>)}
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import useWindowExpand from '../../hooks/useWindowExpand';
import styles from './styles/Comments.module.css';

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [showExpand, setShowExpand] = useState(false);
  const [expandComment, setExpandComment] = useState(false);
  const [totalCommentHeight, setTotalCommentHeight] = useState(0);
  useWindowExpand(setShowExpand);

  return (
    <div className={`${styles.commentsSection} section`}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Comments</h2>
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.commentsInnerContainer} >
        {comments.map(comment => {<div className={styles.comment} style={{maxHeight: expandComment && 'min-content'}} id='commentId'>
        <fieldset>
        {showExpand ? <legend align="right">
          <span onClick={() => {
            setExpandComment((prev) => {
              if (prev) {
                return false;
              }
              return true;
            })
            }}>{expandComment ? "show less..." : "show more..."}</span>
          </legend> : ""}
          <p>Fugiat sunt est consequat nostrud mollit labore laboris aliquip. Ullamco et magna Lorem occaecat eiusmod incididunt 
            ea anim non nulla ipsum proident. Est commodo culpa sint irure dolor do eu dolor culpa magna eiusmod proident 
            exercitation. Non voluptate aliquip eu anim nostrud pariatur exercitation veniam cupidatat et occaecat laborum. 
            Nulla cupidatat ex voluptate anim consectetur ad duis ut. Incididunt ex occaecat nostrud ullamco est incididunt 
            do minim.
            </p>
        </fieldset>
        </div>})}
        </div>
      </div>
    </div>
  );
}
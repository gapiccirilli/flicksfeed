import styles from './styles/Comment.module.css';
import { useEffect, useState, useRef } from 'react';

function Comment({ comment }) {
const element = useRef(null);
const [{ showExpandWord, expandComment }, setExpand] = useState({ showExpandWord: false, expandComment: false });

useEffect(() => {
    if (element.current.scrollHeight > element.current.offsetHeight) {
        setExpand({ showExpandWord: true, expandComment: false });
    }
}, [comment]);

    return (
        <div key={comment.id} className={`${styles.comment}`} style={{maxHeight: expandComment ? "min-content" : "3.5rem"}} ref={element}>
          <fieldset>
            {showExpandWord && <legend align="right">
              <span onClick={() => setExpand(prev => {
                return { ...prev, expandComment: !prev.expandComment};
              })}>
                {expandComment ? "less..." : "more..."}
              </span>
            </legend>}
            <p>{comment.content}</p>
          </fieldset>
      </div>
    );
}

export default Comment;
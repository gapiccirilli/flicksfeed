import { useEffect, useState } from 'react';
import useWindowExpand from '../../hooks/useWindowExpand';
import styles from './styles/Comments.module.css';
import { testComments } from '../../test-data/testComments'; 

export default function Comments() {
  const [comments, setComments] = useState(testComments);
  // const [showExpand, setShowExpand] = useState([]);
  // const [expandComment, setExpandComment] = useState([]);
  const [totalCommentHeight, setTotalCommentHeight] = useState(0);
  // const {height, expandArray} = useWindowExpand(comments);

  // useEffect(() => {
  //   // checks comment for overflow so that it can show 'more...' link
        
  //       const elements = document.querySelectorAll("div.commentss");
  //       const commentExpandArr = new Array(comments.length);
  //       let tempCommentHeight = 0;

  //       for (const element of elements) {
  //           const commentHeight = element.style.minHeight;
  //           const commentMargin = element.style.marginTop;

  //           tempCommentHeight += (parseFloat(commentHeight.substring(0, commentHeight.indexOf('r'))) + 
  //           parseFloat(commentMargin.substring(0, commentMargin.indexOf('r'))));

  //           if (element.scrollHeight > element.offsetHeight) {
  //             commentExpandArr.push(true);
  //           } else {
  //             commentExpandArr.push(false);
  //           }
  //         }
  //         console.log(commentExpandArr);
  //       setTotalCommentHeight(tempCommentHeight);
  //       setShowExpand(commentExpandArr);
  //       setExpandComment(commentExpandArr);
  //   }, []);

  return (
    <div className={`${styles.commentsSection} section`}>
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Comments</h2>
      </div>
      <div className={styles.commentsContainer}>
        <div className={styles.commentsInnerContainer} style={{height: toString(totalCommentHeight) + "rem"}}>
        {comments.map((comment, index) => {
          return (
            <div key={comment.id} className={`${styles.comment} commentss`} style={{
                width: "80%", 
                // minHeight: expandComment[index] ? 'min-content' : "3.5rem", 
                marginLeft: "1rem", 
                marginTop: "1rem"
              }}>
              <fieldset>
                <legend align="right">
                  
                </legend>
                <p>{comment.content}</p>
              </fieldset>
          </div>
          )
      })}
        </div>
      </div>
    </div>
  );
}
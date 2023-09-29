import { useEffect } from "react";

export default function useWindowExpand(comments) {

    // let totalCommentHeight;
    // const commentExpandArr = new Array(comments.length);

    // useEffect(() => {
    //     // checks comment for overflow so that it can show 'more...' link
            
    //         totalCommentHeight = 0;
    //         const elements = document.querySelectorAll("div.comments");

    //         for (const comment of comments) {
    //             totalCommentHeight += (parseInt(element.style.height) + 
    //             parseInt(element.style.marginTop) + parseInt(element.style.marginBottom));

    //             if (element.scrollHeight > element.offsetHeight) {
    //                 commentExpandArr.push(true);
    //             } else {
    //                 commentExpandArr.push(false);
    //             }
    //         }
    //     }, []);
    //     return {height: totalCommentHeight, expandArray: commentExpandArr};
}
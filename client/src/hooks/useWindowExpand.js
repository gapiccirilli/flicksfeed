import { useEffect } from "react";

export default function useWindowExpand(setShowExpand) {
    useEffect(() => {
        const comment = document.getElementById('commentId');

        // checks comment for overflow so that it can show 'more...' link
        if (comment.scrollHeight > comment.offsetHeight) {
            setShowExpand(true);
        }

        
    }, []);
}
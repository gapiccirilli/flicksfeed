import { useEffect } from "react";

export default function useWindowExpand(setShowExpand) {
    useEffect(() => {
        const comment = document.getElementById('commentId');

        if (comment.scrollHeight > comment.offsetHeight) {
            setShowExpand(true);
        }
    }, []);
}
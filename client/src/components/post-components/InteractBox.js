import { useContext } from "react";
import styles from "./styles/InteractBox.module.css";
import { FeedContext } from "../../context/FeedProvider";

export default function InteractBox() {
    const ctx = useContext(FeedContext);

    const handleShowComments = () => {
        ctx.dispatch({type: "setShowComments", payload: true});
    };

    return (
        <div className={styles.interact}>
            <span>♡</span>
            <span onClick={handleShowComments}>Comment</span>
            <span>Start a Conversation</span>
        </div>
    );
}
import styles from "./styles/InteractBox.module.css";

export default function InteractBox() {

    return (
        <div className={styles.interact}>
            <span>♡</span>
            <span>Comment</span>
            <span>Start a Conversation</span>
        </div>
    );
}
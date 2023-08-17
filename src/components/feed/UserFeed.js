import styles from './styles/UserFeed.module.css';

export default function UserFeed() {
  return (
    <div className={`${styles.feed} section`}>
        <div style={{width: "10rem", height: "10rem", backgroundColor: "red"}} />
        <div style={{width: "10rem", height: "10rem", backgroundColor: "red"}} />
        <div style={{width: "10rem", height: "10rem", backgroundColor: "red"}} />
        <div style={{width: "10rem", height: "10rem", backgroundColor: "red"}} />
    </div>
  );
}
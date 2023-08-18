import styles from './styles/Synopsis.module.css';

export default function Synopsis({ synopsis }) {
  return (
    <div className={styles.synopsis}>
        <header>
            <h6>Synopsis</h6>
        </header>
        <div>
            <p>Aliquip dolor consequat ullamco tempor adipisicing. Dolore ipsum voluptate nisi irure dolor aliquip commodo 
                excepteur amet reprehenderit. Sint incididunt in ex adipisicing voluptate cillum exercitation dolore laboris. 
                Tempor nisi minim ad nostrud pariatur aliqua exercitation esse reprehenderit.</p>
        </div>
    </div>
  );
}
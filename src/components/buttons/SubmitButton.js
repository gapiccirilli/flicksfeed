import styles from './styles/SubmitButton.module.css';

export default function SubmitButton({ children }) {

  return (
    <button className={`${styles.submit} site-button`}>
        {children}
    </button>
  );
}
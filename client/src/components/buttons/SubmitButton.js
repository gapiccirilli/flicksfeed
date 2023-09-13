import styles from './styles/SubmitButton.module.css';

export default function SubmitButton({ children, onSubmit, unactive }) {

  return (
    <button className={`${styles.submit} site-button`} onClick={onSubmit} disabled={unactive}>
        {children}
    </button>
  );
}
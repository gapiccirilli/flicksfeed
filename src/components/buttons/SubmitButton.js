import styles from './styles/SubmitButton.module.css';

export default function SubmitButton({ children, onSubmit }) {

  return (
    <button className={`${styles.submit} site-button`} onClick={onSubmit}>
        {children}
    </button>
  );
}
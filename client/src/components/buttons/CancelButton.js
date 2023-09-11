import styles from './styles/CancelButton.module.css';

export default function CancelButton({ children, onCancel }) {

  return (
    <button className={`${styles.cancel} site-button`} onClick={onCancel}>
        {children}
    </button>
  );
}
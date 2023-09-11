import styles from './styles/Layout.module.css';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/nav/NavBar';

export default function Layout() {
  return (
    <div className={styles.layout}>
        <NavBar />
        <Outlet />
    </div>
  );
}
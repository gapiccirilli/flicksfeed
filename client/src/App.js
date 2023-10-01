import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.css';
import Layout from './pages/Layout';
import Feed from './pages/Feed';
import Home from './pages/Home';
import FeedProvider from './context/FeedProvider';

function App() {
  return (
    <div className={styles.app}>
      <FeedProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="flicksfeed" element={<Layout />}>
            <Route index element={<Navigate replace to="feed" />}/>
            <Route path="feed" index element={<Feed />}/>
          </Route> 
        </Routes>
      </BrowserRouter>
      </FeedProvider>
    </div>
  );
}

export default App;

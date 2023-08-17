import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './pages/Layout';
import Feed from './pages/Feed';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="flicksfeed" element={<Layout />}>
            <Route index element={<Navigate replace to="feed" />}/>
            <Route path="feed" index element={<Feed />}/>
          </Route> 
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import PhotoDetail from './pages/PhotoDetail';
import Favorites from './components/Favorites';

function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/photo/:year" element={<PhotoDetail />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  )
}

export default App

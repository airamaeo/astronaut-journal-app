import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'

import Home from './pages/Home';
import Timeline from './pages/Timeline';
import PhotoDetail from './pages/PhotoDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/photo/:year" element={<PhotoDetail />} />
      </Routes>
    </Router>
  )
}

export default App

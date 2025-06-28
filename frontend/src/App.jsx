import {Routes, Route} from 'react-router-dom';
import './App.css'
import StarfieldBackground from './components/StarfieldBackground';

import NavBar from './components/NavBar';
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import PhotoDetail from './pages/PhotoDetail';
import Favorites from './components/Favorites';

function App() {
  return (
      <>
        {/* <StarfieldBackground/>  */}
        {/* Removed from global App.jsx to avoid performance issues — 
        now imported only on pages that need it for faster load and reduced resource usage. */}
        
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/photo/:year" element={<PhotoDetail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </>
  )
}

export default App

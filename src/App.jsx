// import Navbar from './components/common/Navbar.jsx';
// import Footer from './components/common/Footer.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import About from './components/About.jsx'
import 'antd/dist/antd.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}



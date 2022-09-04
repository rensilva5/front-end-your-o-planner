// import Navbar from './components/common/Navbar.jsx';
// import Footer from './components/common/Footer.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import About from './components/About.jsx'
import DestinationPage from './pages/DestinationPage.jsx';
import CountryPage from './pages/CountryPage.jsx';
import 'antd/dist/antd.css';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      
        <Routes>
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/destination/:destinationId" element={<DestinationPage />} />
          <Route path='/country/:countryId' element={ <CountryPage/> } />
        </Routes>
        
      </BrowserRouter>
    </div>
  );
}

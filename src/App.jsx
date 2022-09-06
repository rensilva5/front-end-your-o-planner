// import Navbar from './components/common/Navbar.jsx';
// import Footer from './components/common/Footer.jsx';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import About from './components/About.jsx'
// import DestinationPage from './pages/DestinationPage.jsx';
import CountryPage from './pages/CountryPage.jsx';
import 'antd/dist/antd.css';
import './App.css';
import Navbar from './components/common/Navbar.jsx';
import Footer from './components/common/Footer.jsx';
import { MantineProvider } from '@mantine/core';

export default function App() {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <BrowserRouter>
       <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          {/* <Route path="/destination/:destinationId" element={<DestinationPage />} /> */}
          <Route path='/country/:countryId' element={ <CountryPage/> } />
          <Route path='/country/:countryId' element={ <CountryPage/> } />
        </Routes>
        <Footer />
      </BrowserRouter>
      </MantineProvider>
  );
}
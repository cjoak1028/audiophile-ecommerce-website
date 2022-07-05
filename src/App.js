import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Navbar from './components/Navbar';
import HomePage from './pages/HomePage/HomePage';
import HeadphonesPage from './pages/HeadphonesPage/HeadphonesPage';
import SpeakersPage from './pages/SpeakersPage/SpeakersPage';
import EarphonesPage from './pages/EarphonesPage/EarphonesPage';
import Footer from './components/Footer';


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
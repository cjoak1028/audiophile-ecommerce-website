import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer/Footer';
import HomePage from '@pages/HomePage/HomePage';
import HeadphonesPage from '@pages/HeadphonesPage/HeadphonesPage';
import SpeakersPage from '@pages/SpeakersPage/SpeakersPage';
import EarphonesPage from '@pages/EarphonesPage/EarphonesPage';



const App = () => {
  return (
    <Router>
      <NavBar />
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
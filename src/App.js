import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import NavBar from '@components/NavBar/NavBar';
import Footer from '@components/Footer/Footer';
import HomePage from '@pages/HomePage';
import HeadphonesPage from '@pages/categories/HeadphonesPage';
import SpeakersPage from '@pages/categories/SpeakersPage';
import EarphonesPage from '@pages/categories/EarphonesPage';
import XX99MarkIIPage from '@pages/products/headphones/XX99MarkIIPage';



const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/headphones" element={<HeadphonesPage />} />
        <Route path="/speakers" element={<SpeakersPage />} />
        <Route path="/earphones" element={<EarphonesPage />} />

        <Route path="/headphones/xx99-mark-ii-headphones" element={<XX99MarkIIPage />} />

      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
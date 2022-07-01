import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/home/Home';
import Footer from './components/Footer';


const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
      <Footer />
    </React.Fragment>
  )
}

export default App;
import React from 'react';
import Navbar from './components/shared/Navbar';
import Home from './components/pages/home/Home';


const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  )
}

export default App;
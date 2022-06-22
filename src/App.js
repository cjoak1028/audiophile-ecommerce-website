import React from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';


const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Home />
    </React.Fragment>
  )
}

export default App;
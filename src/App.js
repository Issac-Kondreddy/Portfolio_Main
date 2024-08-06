import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About';
import './styles/global.css';

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      {/* Other components like Education, Skills, etc., should go here */}
      <Footer />
    </div>
  );
}

export default App;

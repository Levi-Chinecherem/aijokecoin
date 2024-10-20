import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import JokeVault from './pages/JokeVault';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/joke-vault" element={<JokeVault />} />
            {/* Add routes for other pages here */}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

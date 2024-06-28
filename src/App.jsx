// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import Contact from './Contact';
import AboutUs from './AboutUs';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/sobre-nos" element={<AboutUs />} />

      </Routes>
    </Router>
  );
};

export default App;

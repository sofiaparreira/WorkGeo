import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import HomePage from './HomePage';
import Contact from './Contact';
import AboutUs from './AboutUs';
import ServiceDetail from './ServiceDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/sobre-nos" element={<AboutUs />} />
        <Route path="/service/:serviceName" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
};

export default App;

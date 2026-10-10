import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './styles/App.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Espacio from './components/Espacio';
import Experiencia from './components/Experiencia';
import Info from './components/Info';
import Footer from './components/Footer';

function HomePage() {
  return (
    <>
      <Hero />
      <Experiencia />
      <Info />
    </>
  );
}

function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`App ${theme}`}>
      <Header theme={theme} toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/espacio" element={<Espacio />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

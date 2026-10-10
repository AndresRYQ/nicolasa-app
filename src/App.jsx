import React from 'react';
import './styles/Aura.css';
import Header from './components/Header';
import Hero from './components/Hero';
import Experiencia from './components/Experiencia';
import Info from './components/Info';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <Experiencia />
      <Info />
      <Footer />
    </div>
  );
}

export default App;

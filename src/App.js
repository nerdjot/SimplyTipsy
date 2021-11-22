import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Cocktail from './components/Cocktail.js';
import './App.css';
export default function App() {
  return (
    <div className="app">
      <Navbar />
      <Cocktail />
    </div>
  );
}

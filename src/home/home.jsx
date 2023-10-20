import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Login from '../components/login'; 
import Register from '../components/register'; 
import Filing from '../components/filing'; 
import './home.css';

const Home = () => {
  return (
    <div>
      <div className="header">
        <Link to="/" className="logo">Efficents</Link>
        <div className="nav">
          <Link to="/filing" className="nav-link">Nosotros</Link>
          <Link to="/login" className="nav-link">Iniciar Sesión</Link>
          <Link to="/register" className="nav-link">Registrarse</Link>
        </div>
      </div>

      <div className="design-container">
        <h1 className="degraded-text">
          <span className="letter" style={{ color: 'rgb(255, 0, 0)' }}>E</span>
          <span className="letter" style={{ color: '#FF3E3E' }}>f</span>
          <span className="letter" style={{ color: '#FF5C5C' }}>f</span>
          <span className="letter" style={{ color: '#FF7979' }}>i</span>
          <span className="letter" style={{ color: '#FF9A9A' }}>c</span>
          <span className="letter" style={{ color: '#FFB8B8' }}>e</span>
          <span className="letter" style={{ color: '#FFCFCF' }}>n</span>
          <span className="letter" style={{ color: '#FFDEDE' }}>t</span>
          <span className="letter" style={{ color: '#FFECEC' }}>s</span>
        </h1>
      </div>


    </div>
  );
}

export default Home;

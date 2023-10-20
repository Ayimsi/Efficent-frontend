import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/gateway.css';
import icono1 from '../assets/icono1.png';
import icono2 from '../assets/icono2.png';
import icono3 from '../assets/icono3.png';
import icono4 from '../assets/icono4.png';

const Gateway = () => {
  const [isSidebarVisible, setSidebarVisible] = useState(false);

  const handleMouseMove = (e) => {
    if (e.clientX < 125) {
      setSidebarVisible(true);
    } else {
      setSidebarVisible(false);
    }
  };

  return (
    <div
      className="gateway-container"
      onMouseMove={handleMouseMove}
    >
      <div className={`sidebar ${isSidebarVisible ? 'visible' : ''}`}>
        {/* Icono1 con Link a Calendar.jsx */}
        <Link to="/calendar">
          <Icono imagen={icono1} />
        </Link>
        {/* Icono2, Icono3, e Icono4 con Link a Gateway.jsx */}
        <Link to="/profile">
          <Icono imagen={icono2} />
        </Link>
        <Link to="/gateway">
          <Icono imagen={icono3} />
        </Link>
        <Link to="/gateway">
          <Icono imagen={icono4} />
        </Link>
      </div>
      <div className="content">
        {/* El resto del contenido de tu página */}
      </div>
    </div>
  );
};

const Icono = ({ imagen }) => {
  const estiloIcono = {
    width: '30px',
    height: '30px',
    marginBottom: '40px',
  };

  return (
    <div className="icon">
      <img src={imagen} alt="Icono" style={estiloIcono} />
    </div>
  );
};

export default Gateway;


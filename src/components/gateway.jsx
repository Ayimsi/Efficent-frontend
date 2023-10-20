// Gateway.jsx
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
    setSidebarVisible(true);
  };
  console.log("isSidebarVisible: ", isSidebarVisible);
  return (
    <div className={`gateway-container ${isSidebarVisible ? 'shown' : 'collapsed'}`} onMouseEnter={handleMouseMove} onMouseOutCapture={() => { setSidebarVisible(false);}}>
      {
        isSidebarVisible ? 
        <>
          <Link to="/calendar">
          <Icono imagen={icono1} />
        </Link>
        {/* Icono2, Icono3, e Icono4 con Link a Gateway.jsx */}
        <Link to="/profile">
          <Icono imagen={icono2} />
        </Link>
        <Link to="/forum">
          <Icono imagen={icono3} />
        </Link>
        <Link to="/gateway">
          <Icono imagen={icono4} />
        </Link>
        </>
        :
        <div
        style={{
          minWidth: "5px",
          height: "100%"
        }}> </div>
      }
    </div>
  );
};

const Icono = ({ imagen }) => {
  const estiloIcono = {
    width: '40px',
    height: '40px',
    backgroundColor:"#f70000"
  };

  return (
    <div className="icon">
      <img src={imagen} alt="Icono" style={estiloIcono} />
    </div>
  );
};

export default Gateway;

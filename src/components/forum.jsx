import React from 'react';
import '../css/forum.css';
import Gateway from './gateway'; 
import matematicas from '../assets/matematicas.jfif';
import idiomas from '../assets/idiomas.jfif';
import ciencias from '../assets/sciencias.jfif';
import sociales from '../assets/sociales.jfif';
import ejercicio from '../assets/ejercicio.jfif';

const Forum = () => {
  return (
    <div className="forum">
        <Gateway />
      <div className="forum-button">
        <div className="button-container">
          <img src={matematicas} alt="Matemáticas" />
        </div>
        <span>Matemáticas</span>
      </div>
      <div className="forum-button">
        <div className="button-container">
          <img src={sociales} alt="Ciencias Sociales" />
        </div>
        <span> Sociales</span>
      </div>
      <div className="forum-button">
        <div className="button-container">
          <img src={ciencias} alt="Ciencias" />
        </div>
        <span>Ciencias/quimica</span>
      </div>
      <div className="forum-button">
        <div className="button-container">
          <img src={ejercicio} alt="Actividad Física" />
        </div>
        <span>Actividad Física</span>
      </div>
      <div className="forum-button">
        <div className="button-container">
          <img src={idiomas} alt="Lenguas" />
        </div>
        <span>Lenguas</span>
      </div>
    </div>
  );
};

export default Forum;

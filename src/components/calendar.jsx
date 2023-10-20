// calendar.jsx

import React, { useState } from 'react';
import '../css/calendar.css';
import Gateway from './gateway';
import '../home/home.css';

const CellPopup = ({ onClose }) => {
  return (
    <div className="cell-popup">
      <div className="close-button" onClick={onClose}>
        ✕
      </div>
      <div className="button-container">
        <button className="popup-button">Nuevo</button>
        <button className="popup-button">Eliminar</button>
        <button className="popup-button">Guardar</button>
      </div>
    </div>
  );
};


const Calendar = () => {
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const hoursOfDay = Array.from({ length: 25 }, (_, i) => (i < 10 ? `0${i}:00` : `${i}:00`));

  const [optionsVisible, setOptionsVisible] = useState(false);
  const [selectedCell, setSelectedCell] = useState(null);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  const openCellPopup = (cell) => {
    setSelectedCell(cell);
  };

  const closeCellPopup = () => {
    setSelectedCell(null);
  };

  return (
    <div className="calendar">
      <div className="header">
        <div className="week-header">
          <h1>Semana</h1>
        </div>
        <div className="opcion-seleccion" onClick={toggleOptions}>
          <span>Seleccionar</span>
          <div className={`opciones${optionsVisible ? ' visible' : ''}`}>
            <div className="option">Día</div>
            <div className="option">Semana</div>
            <div className="option">Mes</div>
            <div className="option">Año</div>
          </div>
        </div>
      </div>
      <div className="calendarRow">
        <Gateway />
        <div
          style={{
            width: "100%",
            height: "100%",
            display: 'flex'
          }}
        >
          <table className="table-calendar">
          <thead>
            <tr>
              <th></th>
              {daysOfWeek.map((day) => (
                <th key={day}>{day}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {hoursOfDay.map((hour) => (
              <tr key={hour}>
                <td>{hour}</td>
                {daysOfWeek.map((day) => (
                  <td key={`${day}-${hour}`} className="cell" onClick={() => openCellPopup(`${day}-${hour}`)}>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        </div>
        
      </div>

      {selectedCell && (
        <div className="cell-popup-container">
          <CellPopup onClose={closeCellPopup} />
        </div>
      )}
    </div>
  );
};

export default Calendar;
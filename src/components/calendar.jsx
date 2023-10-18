import React, { useState } from 'react';
import '../css/calendar.css';
import Gateway from './gateway';
import Square from './square';

const Calendar = () => {
  const daysOfWeek = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado', 'Domingo'];
  const hoursOfDay = Array.from({ length: 25 }, (_, i) => (i < 10 ? `0${i}:00` : `${i}:00`));

  const [optionsVisible, setOptionsVisible] = useState(false);

  const toggleOptions = () => {
    setOptionsVisible(!optionsVisible);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
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
      <Gateway />
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
                <td key={`${day}-${hour}`} className="cell">
                  <Square />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;

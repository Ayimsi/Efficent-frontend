import React, { useState } from 'react';
import styles from '../css/square.css';

const Square = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  const agregar = () => {
    // Lógica para agregar
  };

  const eliminar = () => {
    // Lógica para eliminar
  };

  const guardar = () => {
    // Lógica para guardar
  };

  const cerrar = () => {
    setExpanded(false);
  };

  return (
    <div className={`${styles.square} ${expanded ? styles.expandido : ''}`} onClick={toggleExpansion}>
      {expanded && (
        <div className={styles.overlay}>
          <div className={styles.cuadroExpandido}>
            <button className={styles.botonCerrar} onClick={cerrar}>
              X
            </button>
            <div className={styles.botones}>
              <button onClick={agregar}>Agregar</button>
              <button onClick={eliminar}>Eliminar</button>
              <button onClick={guardar}>Guardar</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Square;

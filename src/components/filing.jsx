import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css//filing.css';


const Filing = () => {
  return (
    <div>
      <div className="header">
        <Link to="/filing" className="logo">Nosotros</Link> 
        <div className="nav">
          <Link to="/" className="nav-link">Efficents</Link> 
          <Link to="/login" className="nav-link">Iniciar Sesión</Link>
          <Link to="/register" className="nav-link">Registrarse</Link>
        </div>
      </div>

      <div className="content">
        <div className="rectangle">
          <h2>¿Quiénes Somos?</h2>
          <p>Nuestra misión es abordar la procrastinación y la falta de organización que afectan el rendimiento académico de los estudiantes de bachillerato en el Divino Salvador, Bogotá. A través de una aplicación, ayudamos a los estudiantes a organizar tareas y acceder a información de profesores. Nuestro enfoque se basa en la conciencia y herramientas efectivas.

Si no se resuelve, esto podría llevar a la pérdida de año de estudiantes y afectar la calidad académica de la institución. Nuestra app empodera a los estudiantes para mejorar sus calificaciones y enfrentar sus desafíos académicos.</p>
        </div>

        <div className="objectives">
          <div className="objective">
            <h3>Objetivos Generales</h3>
            <p>• Investigar de manera exhaustiva sobre cómo la procrastinación y los malos hábitos de organización pueden tener un impacto negativo en el rendimiento académico de los estudiantes de bachillerato en el Divino Salvador. Además, examinar cómo se puede abordar este problema y de esta forma crear una aplicación móvil que brinde una oportunidad de mejora. Esta aplicación les ayudaría a gestionar su tiempo de manera más efectiva, combatir la procrastinación y aplicar técnicas de estudio para mejorar su desempeño académico.</p>
          </div>
        </div>

          <div className="objective">
            <h3>Objetivos Específicos</h3>
            <p>
            
            • Identificar las principales razones detrás de la procrastinación en los estudiantes de décimo y once grado del Colegio Divino Salvador.
            <br></br>
            <br></br>
            • Evaluar cómo la procrastinación afecta el proceso de aprendizaje y el rendimiento académico de los estudiantes.
            <br></br>
            <br></br>
            • Desarrollar una aplicación móvil diseñada para que los estudiantes puedan seguir su progreso académico y les ayude a gestionar su tiempo de manera más efectiva, reduciendo la procrastinación.
            <br></br>
            <br></br>
            • Implementar y poner a prueba la aplicación móvil en un grupo piloto de estudiantes de décimo y once grado en el Colegio Divino Salvador.
            <br></br>
            <br></br>
            • Evaluar la eficacia de la aplicación móvil en la mejora del rendimiento académico y en la reducción de la procrastinación entre los estudiantes. 
            </p>
          </div>
      </div>
    </div>
  );
}

export default Filing;

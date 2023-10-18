import React from 'react';
import { Link } from 'react-router-dom'; 
import '../css/register.css';

const Register = () => {
  return (
    <div className="center-container">
      <div className="square-link">
        <Link to="/" className="link-text">Efficents</Link> 
      </div>
      <div className="content-box">
        <h1>Registrarse</h1>
        <form>
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" id="username" name="username" placeholder="Ingrese su nombre de usuario" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" />
          <label htmlFor="confirm-password">Confirmar Contraseña</label>
          <input type="password" id="confirm-password" name="confirm_password" placeholder="Confirme su contraseña" />
          <button type="submit">Registrarse</button>
        </form>
        <p>¿Ya tienes cuenta? <Link to="/login">Iniciar Sesión</Link></p> 
      </div>
    </div>
  );
}

export default Register;


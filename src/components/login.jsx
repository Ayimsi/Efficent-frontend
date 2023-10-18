import React from 'react';
import { Link } from 'react-router-dom';
import '../css/login.css';
import './gateway'
const Login = () => {
  return (
    <div className="center-container">
      <div className="content-box">
        <div className="square-link">
          <Link to="/" className="link-text">Efficents</Link>
        </div>
        <h1>Iniciar Sesión</h1>
        <form>
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" id="username" name="username" placeholder="Ingrese su nombre de usuario" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" id="password" name="password" placeholder="Ingrese su contraseña" />
          <button type="submit">Iniciar Sesión</button>
        </form>
        <p>¿No tienes cuenta? <Link to="/register">Registrarse</Link></p>
        
        {/* Agrega un enlace al componente Gateway */}
        <Link to="/gateway">
          <button className="gateway-button">Gateway</button>
        </Link>
      </div>
    </div>
  );
}

export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/profile.css';
import Gateway from './gateway';
import icono2 from '../assets/icono2.png';


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState('Nombre de Usuario');
  const [email, setEmail] = useState('usuario@example.com');
  const [city, setCity] = useState('6° Grado');
  const [interests, setInterests] = useState([]);
  const [newInterest, setNewInterest] = useState('');

  const handleSave = () => {
    // Validación de correo electrónico
    if (!isValidEmail(email)) {
      alert("El correo electrónico es inválido");
      return;
    }

    // Validación de contenido inapropiado en el nombre
    if (containsInappropriateContent(userName)) {
      alert("El nombre contiene contenido inapropiado");
      return;
    }

    setIsEditing(false);
  };

  const addInterest = () => {
    if (newInterest !== '') {
      setInterests([...interests, newInterest]);
      setNewInterest('');
    }
  };

  // Función para validar el formato del correo electrónico
  const isValidEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    return emailRegex.test(email);
  };

  // Función para verificar contenido inapropiado en el nombre
  const containsInappropriateContent = (name) => {
    // Define aquí tu lista de palabras o patrones inapropiados que deseas detectar
    const inappropriateContent = ["palabra1", "palabra2", "otrapalabra"];
    const nameInLowerCase = name.toLowerCase();

    for (const word of inappropriateContent) {
      if (nameInLowerCase.includes(word)) {
        return true;
      }
    }

    return false;
  };

  return (
    <div className="profile">
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-picture">
            <img
              src={icono2}
              alt="Foto de perfil"
              className="profile-image"
            />
          </div>
          <div className="profile-info">
            {isEditing ? (
              <>
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  className="input-field"
                />
                <input
                  type="text"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field"
                />
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className="input-field"
                >
                  <option value="6° Grado">6° Grado</option>
                  <option value="7° Grado">7° Grado</option>
                  <option value="8° Grado">8° Grado</option>
                  <option value="9° Grado">9° Grado</option>
                  <option value="10° Grado">10° Grado</option>
                  <option value="11° Grado">11° Grado</option>
                </select>
                <div className="interest-section">
                  <input
                    type="text"
                    placeholder="Agregar interés"
                    value={newInterest}
                    onChange={(e) => setNewInterest(e.target.value)}
                    className="input-field"
                  />
                  <button onClick={addInterest} className="add-interest-button">
                    Agregar
                  </button>
                </div>
                <div>
                  {interests.map((interest, index) => (
                    <span key={index} className="interest-tag">
                      {interest}
                    </span>
                  ))}
                </div>
              </>
            ) : (
              <>
                <h2>{userName}</h2>
                <p>Correo electrónico: {email}</p>
                <p>Ciudad: {city}</p>
                <p>Intereses: {interests.join(', ')}</p>
              </>
            )}
          </div>
        </div>
        <div className="profile-footer">
          {isEditing ? (
            <button className="profile-button" onClick={handleSave}>
              Guardar
            </button>
          ) : (
            <>
              <Link to="/" className="profile-exit-button">
                Salir de sesión
              </Link>
              <button className="profile-button" onClick={() => setIsEditing(true)}>
                Editar perfil
              </button>
            </>
          )}
        </div>
      </div>
      <Gateway />
    </div>
  );
};

export default Profile;

import React from 'react';
import {createRoot} from 'react-dom/client';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './home/home';
import Filing from '../src/components/filing'
import Login from './components/login';
import Register from './components/register';
import Gateway from './components/gateway';
import Calendar from './components/calendar';
import Profile from './components/Profile';
import Forum from './components/forum';


function App() {
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh"
      }}>
        <Router>
      <Routes>
        <Route path='/forum'element={<Forum/>} />
        <Route path='/profile'element={<Profile/>} />
        <Route path="/" element={<Home/>} />
        <Route path="/filing" element={<Filing/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/gateway" element={<Gateway />} />
        <Route path='/calendar'element={<Calendar />} />
      </Routes>
    </Router>
    </div>
    
  );
}


const root = createRoot(document.getElementById('root'));

root.render(
  <App />
)

export default App;
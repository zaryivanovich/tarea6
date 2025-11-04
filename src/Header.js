// Importamos estilos y dependencias
import './App.css';
import { useState } from 'react';
import Boton from './Boton';

// Importa imágenes tienen que estar en src
import dia from './dia.jpg';      // 🌞 imagen para modo día
import noche from './noche.jpg';  // 🌙 imagen para modo noche

function Header() {
  // Estado que controla el modo (true = día / false = noche)
  const [modo, setModo] = useState(true);

  return (
    <div
      className="header"
      // Cambiamos el color de fondo y texto según el modo
      style={{
        backgroundColor: modo ? 'white' : 'black',
        color: modo ? 'black' : 'white',
        height: '100vh',
        textAlign: 'center',
        paddingTop: '40px',
        transition: '0.5s' // animación suave al cambiar
      }}
    >
      {/* Título que cambia según el modo */}
      <h1>{modo ? 'Modo Día ☀️' : 'Modo Noche 🌙'}</h1>

      {/* Imagen que cambia según el modo */}
      <img 
        src={modo ? dia : noche} 
        alt={modo ? "Imagen día" : "Imagen noche"} 
        style={{
          width: '300px',
          borderRadius: '20px',
          margin: '30px auto',
          display: 'block',
          boxShadow: modo ? '0 0 15px gray' : '0 0 20px purple'
        }}
      />

      {/* Botón para cambiar el modo */}
      <Boton 
        message="Cambiar modo" 
        modo={modo} 
        setModo={setModo} 
      />
    </div>
  );
}

export default Header;

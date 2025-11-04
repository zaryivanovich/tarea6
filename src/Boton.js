import './App.css';
//aqui estan los props message (texto del botón), modo (día/noche) y setModo para cambiar dia de noche
function Boton({ message, modo, setModo }) {
  return (
    <div className="button">
      <button
        onClick={() => setModo(!modo)}
        style={{
          backgroundColor: modo ? 'black' : 'white',
          color: modo ? 'white' : 'black',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 20px',
          cursor: 'pointer',
        }}
      >
        {message}
      </button>
    </div>
  );
}

export default Boton;


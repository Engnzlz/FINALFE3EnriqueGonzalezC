import React from "react";
import { useAppContext } from "./utils/global.context"; // Importa useAppContext
import { Link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, toggleTheme } = useAppContext(); // Usa useAppContext

  // Aplica la clase CSS correspondiente al tema
  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
    <nav className={themeClass}>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}

      <div>
        <h1>
          <span>D</span>h Onto
        </h1>
      </div>
      <ul>
        <li>
          <Link to="/Home">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/favs">Favs</Link>
        </li>
      </ul>

      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}

      <button onClick={toggleTheme}>Theme</button> {/* Usa toggleTheme */}
    </nav>
  );
};

export default Navbar;


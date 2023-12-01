import React, { useContext } from "react";
import { ContextProvider, ContextGlobal } from "./utils/global.context";
import { Link, Route, Routes, link } from "react-router-dom";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
  const { state, toggletheme } = useContext(ContextGlobal);

  const Home = () => {
    <h1>Home</h1>;
  };
  const Contact = () => {
    <h1>Contact</h1>;
  };
  const Favs = () => {
    <h1>Favs</h1>;
  };

  return (
    <nav>
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

      <button onClick={toggletheme}>Theme</button>
    </nav>
  );
};

export default Navbar;

import React from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useAppContext } from "../Components/utils/global.context"; // Importa useAppContext

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const { state } = useAppContext(); // Usa useAppContext

  // Aplica la clase CSS correspondiente al tema
  const themeClass = state.theme === 'dark' ? 'dark' : '';

  // Obtiene los destacados del localStorage
  const favs = JSON.parse(localStorage.getItem('favs')) || [];

  return (
    <div className={`card-grid ${themeClass}`}> {/* Aplica la clase CSS correspondiente al tema */}
      <Navbar />
      <h1>Dentists Favs</h1>
      {/* este componente debe consumir los destacados del localStorage */}
      {/* Deberan renderizar una Card por cada uno de ellos */}
      {favs.map(fav => <Card key={fav.id} {...fav} />)}
      <Footer />
    </div>
  );
};

export default Favs;

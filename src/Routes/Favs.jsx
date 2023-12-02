import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useAppContext } from '../Components/utils/global.context';
import Card from '../Components/Card';

const Favs = () => {
  const { state } = useAppContext();
  const themeClass = state.theme === 'dark' ? 'dark' : '';

  // Obtiene los favoritos directamente del localStorage en la función de renderizado
  const favs = JSON.parse(localStorage.getItem('FavCards')) || [];

  return (
    <div className={`card-grid ${themeClass}`}>
      <Navbar />
      <h1 className='tituloFav'>Dentists Favs</h1>
      {favs.length > 0 ? (
        favs.slice(0, ).map((fav, index) => (
          <Card key={index} userId={fav.id} />
        ))
      ) : (
        <p>No hay favoritos.</p>
      )}
      <Footer />
    </div>
  );
};

export default Favs;




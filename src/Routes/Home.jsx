import React from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { useAppContext } from '../Components/utils/global.context';


const Home = () => {
  // Array de IDs de usuario
  const userIds = [1, 2, 3, 4, 5, 6, 7, 8];
  const { state } = useAppContext();
  const themeClass = state.theme === 'dark' ? 'dark' : '';


  return (
    <main className={themeClass} >
      <Navbar />
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui se renderizan las cards */}
        {userIds.map(id => <Card key={id} userId={id} />)}
      <Footer />
      </div>
    </main>
  )
}

export default Home

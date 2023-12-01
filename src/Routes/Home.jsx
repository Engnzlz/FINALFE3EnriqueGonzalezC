import React from 'react'
import Card from '../Components/Card'
import Navbar from '../Components/Navbar';

const Home = () => {
  // Array de IDs de usuario
  const userIds = [1, 2, 3, 4, 5, 6, 7, 8];

  return (
    <main className="" >
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui se renderizan las cards */}
        {userIds.map(id => <Card key={id} userId={id} />)}
      </div>
    </main>
  )
}

export default Home

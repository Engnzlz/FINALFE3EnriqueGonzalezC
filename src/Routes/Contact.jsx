import React from 'react'
import Form from '../Components/Form'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import { useAppContext } from '../Components/utils/global.context';

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Contact = () => {

  const { state } = useAppContext(); // Usa useAppContext

  // Aplica la clase CSS correspondiente al tema
  const themeClass = state.theme === 'dark' ? 'dark' : '';

  return (
    
    <div>
      <Navbar/>
      <h2>Want to know more?</h2>
      <p>Send us your questions and we will contact you</p>
      <Form/>
      <Footer/>
    </div>
  )
}

export default Contact
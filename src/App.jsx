import React from 'react';
import styles from './style';
import Navbar from './components/Navbar';
import Button from './components/Button';
import Caraousal from './components/Caraousal';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';
import { Container,Box  } from '@chakra-ui/react'

const App = () => {
  return (
    <div>
      <Container w='100%' h='100%' minWidth='full' minHeight='full'  align='start'  bg='#040D12' color='white'>
      
      <div className="Higher-div ">
        <div className= "navbar-short-div">
          <div className= "Short-div">
            <Navbar/>
          </div>
        </div>
      </div>
      <div className= "Carousal-short-div">
        <div className= "Short-div">
          <Caraousal/>
        </div>
      </div>
      
      
      <div className= "Testimonial-short-div">
        <div className= "Short-div">
          <Testimonial/>
        </div>
      </div>
      
      <div className= "Footer-short-div">
        <div className= "Short-div">
          <Footer/>
        </div>
      </div>
      <h1>this is me</h1>
      </Container>
    </div>
  )
}

export default App

import React from 'react'
import { Container,Box , Grid, GridItem, Text , Stack, Image } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Aboutus from '../components/Aboutus'

const Aboutuspage = () => {
  return (
    <div>
      <Container  w='100%'  minWidth='full'   bg='#040D12' color='white'>
      <Navbar/>
      <Aboutus/> 
      
      </Container>
      
    
    </div>
  )
}

export default Aboutuspage

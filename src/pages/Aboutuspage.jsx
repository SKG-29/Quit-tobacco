import React from 'react'
import { Container,Box  } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Aboutus from '../components/Aboutus'

const Aboutuspage = () => {
  return (
    <div>
      <Container minWidth='1600px' minHeight='1200px' bg='#040D12' color='white'>
      <Navbar/>
      <Aboutus/>
      </Container>
      
      
    </div>
  )
}

export default Aboutuspage

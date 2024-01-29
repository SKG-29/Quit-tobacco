import React from 'react'
import { Container,Box , Stack } from '@chakra-ui/react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Container >
      <Box  w='100%' p={3.5} color='white'>
        <Box pt='3px'  mt='1rem' ml='-32.5rem' borderRadius='15px' align='center'   h='35px' w='70px'  bg='#DBDFEA' color='#040D12'>
          Logo
        </Box>
        <Stack mt='-2rem' mb='0.75rem'  spacing={3} direction='row' align="center" justify="center">
        <Box ml='8rem' pl='1.5rem' pr='1rem'>
          <Link to= "/">Home</Link>
        </Box>
        <Box pl='1.5rem' pr='1rem'>
          <Link to= "/tips">Tips</Link>
        </Box>
        <Box pl='1.5rem' pr='1rem'>
          <Link to= "/community">Community</Link>
        </Box>
        <Box pl='1.5rem' pr='1rem'>
          <Link to= "/aboutus">Aboutus</Link>
        </Box>
        <Box pb='2px' pt='2px' pl='2rem' pr='2rem' bg='#DBDFEA' borderRadius='20px' as='b' color='#040D12'>
          <Link to= "/login">Login</Link>
        </Box>
        
        
        </Stack>
        
</Box>

</Container>
      
    </div>
  )
}

export default Navbar

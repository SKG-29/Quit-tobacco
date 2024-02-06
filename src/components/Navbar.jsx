import React from 'react'
import { Container,Box , Stack } from '@chakra-ui/react'
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <Container alignSelf='center' maxWidth='full' maxHeight='full' w='85%'  >
      <Box   color='white'>
         
        <Stack alignItems='center' pt='2rem' mb='2rem' spacing={3} direction='row'>
        <Box   pb='5px' pt='5px' pl='2rem' pr='2rem' bg='#DBDFEA' borderRadius='20px' as='b' color='#040D12'>
          Logo
        </Box>
        <Stack ml='25rem' direction='row'>
        <Box  pl='1.5rem'>
          <Link to= "/">Home</Link>
        </Box>
        <Box pl='2rem' pr='1rem'>
          <Link to= "/tips">Tips</Link>
        </Box>
        <Box pl='1.5rem' pr='1rem'>
          <Link to= "/community">Community</Link>
        </Box>
        <Box pl='1.5rem'  pr='3rem'>
          <Link to= "/aboutus">Aboutus</Link>
        </Box>
        <Box pb='2px' pt='2px' pl='2rem' pr='2rem' bg='#DBDFEA' borderRadius='20px' as='b' color='#040D12'>
          <Link to= "/login">Login</Link> 
        </Box>
        </Stack>
        
        
        
        </Stack>     
</Box>

</Container>
      
    </div>
  )
}

export default Navbar

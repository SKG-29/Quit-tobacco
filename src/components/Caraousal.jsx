import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';   
// import image1 from '../assets/index'
import { Container,Box , Stack, Text , Image,Button} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

const Caraousal = () => {
  return (
    <div>
      <Container ml='2rem' mr='2rem' minWidth='1250px' minHeight='500px'   borderRadius='15px' bg='#DBDFEA' color='#040D12' >
        <Stack direction='row'>
        <Box mt='3rem' mb='3rem' ml='4rem' mr='20rem'>
          <Box>
            <Text fontSize='6xl' as='b' mr='6rem' lineHeight='120%'>
              Sometimes it is a Good Thing to Quit!
            </Text>
          </Box>
          <Box>
            <Text mt='2rem' fontSize='2xl' mr='4rem'>
              Quit smoking today with the help of QuitIT
            </Text>
          </Box>
        </Box>
        <Box mt='5rem' mb='3rem' mr='15rem'>
        <Image  src='' alt='Dan Abramov' />
        </Box>
        </Stack>
        
  <Stack direction='row'>
  <Button   ml='4rem' mr='20rem' borderRadius='20px' bg='#040D12' color='#DBDFEA' variant='solid'>
    <Text ml='1rem' mr='1rem' mt='0.5rem' mb='0.5rem'>
    Take a Survey
    </Text>
    
  </Button>
  <Box  mt='0.5rem' ml='-20.1rem' mr='15rem'>
    <ArrowRightIcon/>
  </Box>
    </Stack>      
  
        
        
      </Container>
      
    </div>
  )
}

export default Caraousal

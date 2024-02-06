import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';   
// import image1 from '../assets/index'
import { Container,Box , Stack, Text , Image,Button} from '@chakra-ui/react'
import { ArrowRightIcon } from '@chakra-ui/icons'

const Caraousal = () => {
  return (
    <div>
      <Container alignself='center'   maxWidth='full' maxHeight='full' w='90%'  h='400px'  borderRadius='15px' bg='#DBDFEA' color='#040D12' >
        <Stack ml='2rem' direction='column'>

        
        <Stack   direction='row'>
         <Box  >
          <Box mt='2rem' mr='13rem' >
            <Text  fontSize='6xl' as='b' mr='0rem' mb='0rem' lineHeight='110%'>
              Sometimes it is a Good Thing to Quit!
            </Text>
          </Box>
          <Box>
            <Text mt='1rem' fontSize='1xl' mb='2rem' mr='13rem'>
              Quit smoking today with the help of QuitIT
            </Text>
          </Box>
        </Box>
        <Box mt='5rem' mb='3rem' mr='15rem'>
        <Image  src='' alt='Dan Abramov' />
        </Box> 
        </Stack>
        
   <Stack direction='row' pb='2rem'>
  <Button    mr='20rem' borderRadius='20px' bg='#040D12' colorScheme='#DBDFEA' variant='solid'>
    <Text ml='1rem' mr='1rem' mt='0.5rem' mb='0.5rem' _hover= 'b'>
    Take a Survey
    </Text>
    
  </Button>
  <Box  mt='0.5rem' ml='-20.1rem' mr='15rem'>
    <ArrowRightIcon/>
  </Box>
    </Stack> 
    </Stack>      
  
        
        
      </Container>
      
    </div>
  )
}

export default Caraousal

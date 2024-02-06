import React from 'react'
import { Container,Box , Grid, GridItem , Image, Text, Button, Stack} from '@chakra-ui/react'
const Testimonial = () => {
  return (
    <div>
      <Container alignSelf='start' alignItems='center' maxWidth='full' maxHeight='full' w='90%' mt='2rem'>
        
        <Grid  templateColumns='repeat(3, 1fr)' gap={6}>
        <GridItem minH='330px' minW='377px' borderRadius='15px' bg='#D7C0AE' >
        <Box mt='1rem' mb='1rem' ml='1rem' mr='1rem'>
          <Box>
          <Image mb='1rem' src='' alt='Dan Abramov' />
          </Box>
          <Box>
            <Text mb='1rem'>
              Protect your family and friends from the effects of smoking
            </Text>
          </Box>
          <Box>
            <Button ml='6rem'  borderRadius='20px' bg='#040D12' color='#DBDFEA' variant='solid'>
             
              <Text ml='1rem' mr='1rem' mt='0.5rem' mb='0.5rem'>
              Refer now
    </Text>
    
            </Button>
          </Box>
        </Box>
          </GridItem>
        <GridItem minH='330px' minW='377px' borderRadius='15px' bg='#E6A4B4' >
          <Box mt='1rem' mb='1rem' ml='1rem' mr='1rem'>
            <Box>
              <Text mb='1rem'>
                500+ Users are now nicotine free. Read about their inspirational journey
              </Text>
            </Box>
            <Box mb='1rem'>
          <Image mb='1rem' src='' alt='Dan Abramov' />
          </Box>
            <Box>
            <Button ml='6rem'  borderRadius='20px' bg='#040D12' color='#DBDFEA' variant='solid'>
             
             <Text ml='1rem' mr='1rem' mt='0.5rem' mb='0.5rem'>
             Read now
   </Text>
   </Button>
            </Box>

          </Box>

        </GridItem>
        <GridItem minH='330px' minW='377px' borderRadius='15px' bg='#D0BFFF' >
          <Box>
            <Box>
              <Text mt='1rem'ml='1rem' mr='1rem' mb='1rem'>
                Effects of Smoking
              </Text>
            </Box>
            
             </Box>
        </GridItem>
        
        </Grid>
       
      
      </Container>
      
    </div>
  )
}

export default Testimonial

import React from 'react'
import { Container,Box , Grid, GridItem } from '@chakra-ui/react'
const Testimonial = () => {
  return (
    <div>
      <Container mt='2rem'>
        <Box ml='-31.5rem'>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
        <GridItem minH='350px' minW='397px' borderRadius='15px' bg='#D7C0AE' >
        
          </GridItem>
        <GridItem minH='350px' minW='397px' borderRadius='15px' bg='#E6A4B4' >

        </GridItem>
        <GridItem minH='350px' minW='397px' borderRadius='15px' bg='#D0BFFF' >

        </GridItem>
        
        </Grid>
        </Box>
      
      </Container>
      
    </div>
  )
}

export default Testimonial

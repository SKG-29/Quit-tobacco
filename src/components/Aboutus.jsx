import React from 'react'
import { Container,Box , Grid, GridItem, Text , Stack, Image } from '@chakra-ui/react'
const Aboutus = () => {
  return (
    <div>
      <Container ml='5rem'  mt='2rem' maxWidth='full' maxHeight='full' alignself='start' w='80%'>
        <Box>
          <Text pt='6.5rem'  fontSize='4xl' as='b'>
          About Our Team
          </Text>
          
        </Box>
        <Stack direction='row'>
          <Box>
          <Text  mb='5rem' mt='2rem'   fontSize='1xl'>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Text>
          </Box>
          <Box  >
          <Image boxSize='250px' objectFit='cover' mb='3rem' ml='10rem' mr='13rem' borderRadius='full'  src='https://t4.ftcdn.net/jpg/04/53/77/53/360_F_453775334_wufmzkta1lTA1YnvbnPJkLKYeKdMbXQD.jpg' alt='Us'/>
        </Box> 
        
        
        </Stack>
        
        <Box >
          {/* grid os team mates */}
          <Grid templateColumns='repeat(3, 1fr)' pb='5rem' gap={3}>
        <GridItem ml='3rem' mr='2.5rem' h='250px' w='270px' borderRadius='15px' bg='#D7C0AE' >
        <Box boxSize='200px'  >
  <Image mt='1rem' ml='2rem' mr='2rem' borderRadius='full' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
  <Text fontSize='20px' as ='b' ml='3rem' mr='-8rem'>
    Sakshi Varshney
  </Text>
</Box>
        
          </GridItem>
        <GridItem ml='3rem' mr='2.5rem' h='250px' w='270px' borderRadius='15px' bg='#E6A4B4' >
        <Box boxSize='200px'>
  <Image mt='1rem' ml='2rem' mr='2rem' borderRadius='full' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
  <Text fontSize='20px' as ='b' ml='4rem' mr='-7rem' mt='1rem' mb='1rem'>
    Khushi Rawat
  </Text>
</Box>

        </GridItem>        
        <GridItem ml='3rem' mr='5rem' h='250px' w='270px' borderRadius='15px' bg='#D0BFFF' >
        <Box boxSize='200px'>
  <Image mt='1rem' ml='2rem' mr='2rem' borderRadius='full' src='https://bit.ly/dan-abramov' alt='Dan Abramov' />
  <Text  fontSize='20px' as ='b' ml='4.5rem' mr='-7rem'>
    Garima Gill
  </Text>
</Box>

        </GridItem>
        
        </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default Aboutus

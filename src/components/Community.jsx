import {React, useState} from 'react'
import { Container,Box , Image, Stack , Text, Button ,Center, Wrap, WrapItem, Icon , Input } from '@chakra-ui/react'
import {  InputGroup, InputLeftElement } from '@chakra-ui/react';
import { SunIcon ,StarIcon, SpinnerIcon, AddIcon, ViewIcon, ChevronDownIcon, SearchIcon, TriangleDownIcon} from '@chakra-ui/icons'
const Community = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  }
  return (
    <div>
      <Container alignSelf='start' >
        This is what
        {/* <Box>
        
            <Box h='2rem' bg='#E6A4B4'  >
                
                <Text >
                Don't miss out any conversation happening in your spaces!
                </Text >
                    <Button  size='xs' colorScheme='purple' variant='outline'>
                    Enable Notification
                    </Button>   
            </Box> */}
            {/* first wrap---------------------------------------------------------------- */}
            {/* <Wrap   spacing='0px' mt='0rem' mb='0rem' border='1px' borderColor='gray'  > */}
              {/* first portion */}
  {/* <WrapItem>
    <Center w='110px' h='80px' bg='gray.900' border='1px' borderColor='gray'>
      <Box>
        <Text >
        <Icon mt='1rem' as={ViewIcon} boxSize={6} />
        
        </Text>
      </Box>
    </Center>
  </WrapItem> */}
  {/* second portion */}
  {/* <WrapItem>
    <Center w='260px' h='80px' bg='#040D12' border='1px' borderColor='gray'>
      <Box>
        <Stack direction='row'>
        <Text >
        Studio Space
        </Text>
        <Icon  as={ChevronDownIcon} boxSize={5} />
        
        </Stack>
        
      </Box>
    </Center>
  </WrapItem> */}
  {/* third portion */}
  {/* <WrapItem>
    <Center w='700px' h='80px' bg='#040D12' border='1px' borderColor='gray' paddingRight='25rem'>
      <Box>
        <Box>
        <InputGroup>
      <InputLeftElement
        pointerEvents="none"
        children={<SearchIcon color="gray.300" />}
      />
      <Input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        borderRadius="20px"
      />
    </InputGroup>
        </Box>
      </Box>
    </Center>
  </WrapItem> */}
  {/* fouth portion */}
  {/* <WrapItem>
    <Center  w='300px' h='80px' bg='#040D12' border='1px' borderColor='gray' >
      <Box>
        <Box>
        <Text  >
        Your Space
</Text>
        </Box>
        </Box>
        
      
    </Center>
  </WrapItem>
  </Wrap> */}
 {/* second wrap-------------------------------------------------------------------- */}
 {/* <Box  border='1px' borderColor='gray' > 
 <Wrap  spacing='0px' >
  <WrapItem>
    <Center w='110px' bg='gray.900'  border='1px' borderColor='gray' >
      <Stack  direction='column'>
      <Icon mt='1rem' as={SunIcon} boxSize={6} />
    <Icon mt='1rem' as={SpinnerIcon} boxSize={6} />
    
    <Icon mt='1rem' as={StarIcon} boxSize={6} />
    
    <Icon  mt='1rem' mb='1rem' as={AddIcon} boxSize={4} />
      </Stack>
    
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='260px' bg='#040D12'  border='1px' borderColor='gray' >
      <Stack mt='1rem' mb='1rem'>
        <Text>
          <Stack direction='row'>
          <Text>Getting started</Text>
          
          <Icon as={TriangleDownIcon} boxSize={3} />
          </Stack>
          
   
        </Text>
        <Text>
          <Stack direction='row'>
            <Text>Chat Channels</Text>
          
          <Icon  as={TriangleDownIcon} boxSize={3} />
          </Stack>
          
        </Text>
        <Text>
          <Stack direction='row'>
          <Text>Huddle Channels</Text>
          
          <Icon  as={TriangleDownIcon} boxSize={3} />
          </Stack>
         
        </Text>
        </Stack>
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='700px'   border='1px' borderColor='gray' >
      <Stack direction='column' mt='1rem' >
        <Box bg='#040D12'>
        <Text as='b'>
            #General Chat
          </Text>
        <Stack direction='row' color='gray'>
          <Text>
            150 Members 
          </Text>
          <Text>
            19 Online
          </Text>
          </Stack>
        </Box>
        <Box bg='black'>
          posts
        </Box>
      
        
      </Stack>
    </Center>
  </WrapItem>
  <WrapItem>
    <Center w='300px' bg='#040D12'  border='1px' borderColor='gray' >
      Box 4
    </Center>
  </WrapItem>
</Wrap>

 </Box>
 
            
        </Box> */}
      </Container>
    </div>
  )
}

export default Community

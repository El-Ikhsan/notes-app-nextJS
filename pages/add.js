import { Flex, Heading, Input, Stack, Button } from '@chakra-ui/react';

const Add = () => {
  return (
    <Flex
      height="100vh"
      alignItems="center"
      justifyContent="center"
      background="gray.200" 
    >
      <Flex
        height="50vh"
        width="30vw"
        rounded="md"
        direction="column"
        p={6}
        position="relative"
        background="gray.900" 
      >

        <Heading mb={6} color="gray.200" textAlign="center" >Add Note</Heading>

        <Stack spacing={5} direction='column' align='center'>
          <Input variant='filled' placeholder='title' size='lg' />
          <Input variant='filled' placeholder='body' size='lg' />
        </Stack>

        <Button colorScheme='teal' variant='solid' mt={5} size='lg' >
          add
        </Button>

      </Flex>
    </Flex>
  );
}

export default Add;

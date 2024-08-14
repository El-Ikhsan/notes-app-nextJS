import { useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading, Input, Button, Stack } from '@chakra-ui/react';

const Edit = () => {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter(); 

  const handleSubmit = async (e) => {
    e.preventDefault();

    const noteData = { title, body };
    const { noteId } = router.query;

    try {
      const response = await fetch(`/api/edit/${noteId}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(noteData),
      });

      if (response.ok) {
        router.push('/');
      } else {
        console.error('Failed to add note');
        setStatus('Failed to add note');
      }
    } catch (error) {
      console.error('An error occurred while adding note:', error);
      setStatus('An error occurred while adding note');
    }
  };

  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      direction="column"
      p={6}
      background="#D37676"
    >
       <Flex
          height="80vh"
          width="55vw"
          rounded="md"
          align="center"
          justify="center"
          p={6}
          background="#73536b" 
        >

          <Flex background="#ba9e97" h="72vh" w="51vw" justify="center" align="center">

            <Flex direction="column" p={6} justify="center" w="90%" h="90%" align="center" background="#73536b">
              <Heading mb={8} color="#f3f6f4">Edit Note</Heading>
              <Stack spacing={4} w="80%">
                <Input
                  placeholder="Title"
                  value={title}
                  background='#e2d3cf'
                  variant='filled'
                  _focus= {{
                    background:'white',
                    borderColor: '#0ca9a9',
                    borderWidth: '1.5px',
                    boxShadow: '0 0 0 1px #0ca9a9'
                  }}
                  onChange={(e) => setTitle(e.target.value)}
                />
                <Input
                  placeholder="Body"
                  value={body}
                  background='#e2d3cf'
                  variant='filled'
                  _focus= {{
                    background:'white',
                    borderColor: '#0ca9a9',
                    borderWidth: '1.5px',
                    boxShadow: '0 0 0 1px #0ca9a9'
                  }}
                  onChange={(e) => setBody(e.target.value)}
                />
                <Button onClick={handleSubmit} colorScheme="teal" color="#f3f6f4">
                  Add Note
                </Button>
              </Stack>

            </Flex>
          </Flex>
        </Flex>
      </Flex>
  );
};

export default Edit;

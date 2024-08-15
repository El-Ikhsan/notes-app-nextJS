import { Flex, Heading, Stack, Button, Spacer, Card, CardBody, CardHeader, Text, IconButton} from '@chakra-ui/react';
import { ViewIcon } from '@chakra-ui/icons'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const [notes, setNotes] = useState([]);
  const router = useRouter();

  useEffect(() => {

    const fetchNotes = async () => {
      try {
        const response = await fetch('/api/getAll', {
          method: 'GET',
        });
        if (response.ok) {
          const data = await response.json();
          setNotes(data);
        } else {
          console.error('Failed to fetch notes');
        }
      } catch (error) {
        console.error('An error occurred while fetching notes:', error);
      }
    };

    fetchNotes();
  }, []);

  const handleDeleteAll = async () => {

      try {
        const response = await fetch(`/api/removeAll`, {
          method: 'DELETE',
        });
        if (response.ok) {
          router.reload();
        } else {
          console.error('Gagal menghapus data catatan');
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat menghapus data catatan:', error);
      }
    
  };

  let content;
  if (notes.length === 0) {
    content = (
      <Flex
        background="#ba9e97" 
        h="67vh" 
        w="80vw" 
        rounded="md" 
        p={4} 
        justify="center" 
        align="center"
      >
        <Heading size="md" color="white">Tidak ada catatan</Heading>
      </Flex>
    )} else {
      content = (
        <Flex 
          background="#ba9e97" 
          h="67vh" 
          w="80vw" 
          direction="row" 
          rounded="md" 
          p={4}
          justify="flex-start" 
          overflow="auto" 
          wrap="wrap" 
          columnGap={9} 
          rowGap={4}
        >
                
        {notes.map(note => (

          <Card key={note.id} w="17vw" h="28vh" background="#EBD8B7">

            <CardHeader w="100%">
              <Flex direction="row" justify="space-between" align="center">
                <Heading size="lg" fontSize="24px" w="54%" noOfLines={1}>{note.title}</Heading>
                <Flex direction="row" align="center" justify="flex-end" w="48%">
                  <Link href={`/detail/${note.id}`}>
                    <IconButton variant='outline' colorScheme='teal' aria-label='view note' icon={<ViewIcon />} />
                  </Link>
                </Flex>
              </Flex>
              <Heading as='h3' size="xs" noOfLines={1}>
                {new Date(note.createdAt).toISOString().split('T')[0]}
              </Heading>
            </CardHeader>

            <CardBody mt="-4vh">
              <Text noOfLines={[1, 2, 3]}>{note.body}</Text>
            </CardBody>

          </Card>
        ))}
        </Flex>
    )}

  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      background="#D37676"
      direction="row" 
      wrap="wrap"  
    >

      <Flex
        height="83vh"
        width="85vw"
        rounded="md"
        direction="column"
        align="center"
        justify="center"
        p={6}
        background="#73536b" 
      >

        <Stack direction='row' w="80vw" spacing={4} align='center'>
          <Link href="/add">
            <Button bg="#6c9c88" _hover={{ bg: "#578974" }} color="white" w="45vw" variant='solid'>
              Add Note
            </Button>
          </Link>
          <Button bg="#6c9c88" _hover={{ bg: "#578974" }} color="white" w="45vw" variant='solid' onClick={handleDeleteAll}>
            Delete All
          </Button>
        </Stack>

        <Spacer />

        {content}

      </Flex>
    </Flex>
  );
}

export default Home;

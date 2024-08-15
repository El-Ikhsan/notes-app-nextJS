import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Heading, Text, IconButton, Card, CardBody, CardHeader } from '@chakra-ui/react';
import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import Link from 'next/link';

const Detail = () => {
  const [note, setNote] = useState(null);
  const router = useRouter();
  const { noteId } = router.query;

  useEffect(() => {
    const fetchNote = async () => {
      if (noteId) {
        try {
          const response = await fetch(`/api/get/${noteId}`, {
            method: 'GET',
          });
          if (response.ok) {
            const data = await response.json();
            setNote(data);
          } else {
            console.error('Gagal mengambil data catatan');
          }
        } catch (error) {
          console.error('Terjadi kesalahan saat mengambil data catatan:', error);
        }
      }
    };

    fetchNote();
  }, [noteId]);

  const handleDelete = async () => {
    if (noteId) {
      try {
        const response = await fetch(`/api/remove/${noteId}`, {
          method: 'DELETE',
        });
        if (response.ok) {
          router.push('/');
        } else {
          console.error('Gagal menghapus data catatan');
        }
      } catch (error) {
        console.error('Terjadi kesalahan saat menghapus data catatan:', error);
      }
    }
  };


  if (!note) {
    return (
      <Flex
        w="100vw"
        h="100vh"
        alignItems="center"
        justify="center"
        background="#D37676"
      >
        <Heading>Loading...</Heading>
      </Flex>
    );
  }

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
        height="75vh"
        width="73vw"
        rounded="md"
        direction="column"
        align="center"
        justify="center"
        p={6}
        background="#73536b" 
      >
        <Flex background="#ba9e97" h="70vh" w="73vw" p={6} justify="center" align="center">
          <Card w="80%" h="85%" background="#EBD8B7" p={2}>
            <CardHeader w="100%">
              <Flex direction="row" justify="space-between" align="center">
                <Heading size="xl">{note.title}</Heading>
                <Flex direction="row" align="center" justify="space-between" w="15%">
                  <Link href={`/edit/${note.id}`}>
                    <IconButton variant='outline' colorScheme='teal' aria-label='edit note' icon={<EditIcon />} />
                  </Link>
                  <IconButton variant='outline' colorScheme='teal' aria-label='delete note' icon={<DeleteIcon/>} onClick={handleDelete} />
                </Flex>
              </Flex>
              <Heading as='h3' size="md">{new Date(note.createdAt).toLocaleDateString()}</Heading>
            </CardHeader>
            <CardBody mt="1vh" overflow="auto">
              <Text>{note.body}</Text>
            </CardBody>
          </Card>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Detail;

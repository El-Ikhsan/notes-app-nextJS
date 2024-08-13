import { Flex, Heading, Input, Stack, Button, Grid, GridItem, 
  Spacer, Card, CardBody, CardHeader, Text, IconButton} from '@chakra-ui/react';
  import { EditIcon, ViewIcon } from '@chakra-ui/icons'
  import Link from 'next/link';
const Home = () => {
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
          <Button bg="#6c9c88" _hover={{ bg: "#578974" }} color="white" w="45vw" variant='solid'>
            Delete Note
          </Button>
        </Stack>

        <Spacer/>

        <Flex background="#ba9e97" h="67vh" w="80vw" direction="row" 
        rounded="md" p={6} justify="flex-start" wrap="wrap" columnGap={9} rowGap={4}>
          
          <Card w="17vw" h="28vh" background="#EBD8B7">

          <CardHeader w="100%">
            <Flex direction="row" justify="space-between" align="center">
              <Heading size="xl" noOfLines={[1, 2, 3]}>Title</Heading>
              <Flex direction="row" align="center" justify="space-between" w="48%">
              <Link href="/edit">
                <IconButton variant='outline'colorScheme='teal' aria-label='edit note' icon={<EditIcon />} />
              </Link>
              <IconButton variant='outline'colorScheme='teal' aria-label='view note' icon={<ViewIcon />} />
              </Flex>
            </Flex>
              <Heading as='h3' size="md">Date</Heading>
          </CardHeader>

            <CardBody mt="-4vh">
              <Text noOfLines={[1, 2, 3]}>
                View a summary of all your customers over the last month.
                View a summary of all your customers over the last month.
                View a summary of all your customers over the last month.
                View a summary of all your customers over the last month.
              </Text>
            </CardBody>
          </Card>

        </Flex>

      </Flex>
    </Flex>
  );
}

export default Home;

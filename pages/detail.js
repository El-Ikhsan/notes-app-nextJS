import { Flex, Heading, Input, Stack, Button, Grid, GridItem, 
    Spacer, Card, CardBody, CardHeader, Text, IconButton} from '@chakra-ui/react';
    import { EditIcon, DeleteIcon } from '@chakra-ui/icons'
    import Link from 'next/link';
  const Detail = () => {
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

  
          <Flex background="#ba9e97" h="70vh" w="73vw" 
           p={6} justify="center" align="center">
            
            <Card w="80%" h="85%" background="#EBD8B7" p={2}>
  
            <CardHeader w="100%">
              <Flex direction="row" justify="space-between" align="center">
                <Heading size="xl">Title</Heading>
                <Flex direction="row" align="center" justify="space-between" w="15%">
                <Link href="/edit">
                  <IconButton variant='outline'colorScheme='teal' aria-label='edit note' icon={<EditIcon />} />
                </Link>
                <IconButton variant='outline'colorScheme='teal' aria-label='view note' icon={<DeleteIcon />} />
                </Flex>
              </Flex>
                <Heading as='h3' size="md">Date</Heading>
            </CardHeader>
  
              <CardBody mt="1vh" overflow="auto">
                <Text>
                  View a summary of all your customers over the last month.
                  View a summary of all your customers over the last month.
                  View a summary of all your customers over the last month.
                  View a summary of all your customers over the last month.
                  View a summary of all your customers over the last month.
                  View a summary of all your customers over the last month.
                  View a summary of all your customers over the last month.
                  View a summary of all your customers over the last month.
                  View a summary of all your customers over the last month.
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
  
  export default Detail;
  
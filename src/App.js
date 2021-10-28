import React from 'react';
import {
  ChakraProvider,
  Box,
  theme,
  Flex,
  Avatar,
  Center,
  Stack,
  Text,
  Divider,
  Container,
  Spacer,
  CircularProgress,
  CircularProgressLabel,
  Progress,
  Image,
  SimpleGrid,
  Grid,
  GridItem,
  WrapItem,
  Wrap,
  Button,
} from '@chakra-ui/react';
import { CheckIcon, DownloadIcon } from '@chakra-ui/icons';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box bg="#20202A" h="100vh" w="100%">
        <Flex minH="100vh">
          <Box bg="#424344" w="20%">
            {/* PERSONAL INFORMATION */}
            <Box p={10} h="260px" bg="#252531">
              <Center>
                <Flex direction="column" justify="center" align="center">
                  <Avatar
                    w="100px"
                    h="95px"
                    src="https://bit.ly/sage-adebayo"
                  />
                  <Stack spacing={3} p={3}>
                    <Text fontSize="md" textAlign="center" color="white">
                      Artur Carter
                    </Text>
                    <Text fontSize="xs" color="lightgray">
                      Front-end Deweloper Ui/UX Designer,
                    </Text>
                  </Stack>
                </Flex>
              </Center>
            </Box>
            {/* OTHER INFOS */}
            <Box bg="#20202A" h="100vh">
              <Container maxW="320px" p={4}>
                {/* MY ADDRESS */}
                <Stack spacing={3}>
                  <Flex>
                    <Text fontSize="xs" fontWeight="bold" color="lightgray">
                      Residence:
                    </Text>
                    <Spacer />
                    <Text fontSize="xs" fontWeight="semibold" color="gray">
                      Canada
                    </Text>
                  </Flex>
                  <Flex>
                    <Text fontSize="xs" fontWeight="bold" color="lightgray">
                      City:
                    </Text>
                    <Spacer />
                    <Text fontSize="xs" fontWeight="semibold" color="gray">
                      Toronto
                    </Text>
                  </Flex>
                  <Flex>
                    <Text fontSize="xs" fontWeight="bold" color="lightgray">
                      Age:
                    </Text>
                    <Spacer />
                    <Text fontSize="xs" fontWeight="semibold" color="gray">
                      26
                    </Text>
                  </Flex>
                </Stack>
                <Divider pt={4} borderColor="gray" />
                {/* LANGUAGE SKILLS */}
                <Box m={8}>
                  <Stack spacing={3}>
                    <Flex>
                      <CircularProgress
                        thickness="6px"
                        color="#FFC107"
                        value={100}
                      >
                        <CircularProgressLabel color="lightgray">
                          100%
                        </CircularProgressLabel>
                      </CircularProgress>
                      <Spacer />
                      <CircularProgress
                        thickness="6px"
                        color="#FFC107"
                        value={90}
                      >
                        <CircularProgressLabel color="lightgray">
                          90%
                        </CircularProgressLabel>
                      </CircularProgress>
                      <Spacer />
                      <CircularProgress
                        thickness="6px"
                        color="#FFC107"
                        value={70}
                      >
                        <CircularProgressLabel color="lightgray">
                          70%
                        </CircularProgressLabel>
                      </CircularProgress>
                    </Flex>
                    <Flex>
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="lightgray"
                      >
                        French
                      </Text>
                      <Spacer />
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="lightgray"
                      >
                        English
                      </Text>
                      <Spacer />
                      <Text
                        fontSize="xs"
                        fontWeight="semibold"
                        color="lightgray"
                      >
                        Spanish
                      </Text>
                    </Flex>
                  </Stack>
                </Box>
                <Divider pt={1} borderColor="gray" />
                {/* TECH SKILLS */}

                <Box pt={3}>
                  <Flex align="center">
                    <Text fontSize="sm" fontWeight="bold" color="lightgray">
                      html
                    </Text>
                    <Spacer />
                    <Text fontSize="xs" color="gray">
                      96%
                    </Text>
                  </Flex>
                  <Progress mt={2} value={96} colorScheme="yellow" size="xs" />
                </Box>
                <Box pt={3}>
                  <Flex align="center">
                    <Text fontSize="sm" fontWeight="bold" color="lightgray">
                      CSS
                    </Text>
                    <Spacer />
                    <Text fontSize="xs" color="gray">
                      95%
                    </Text>
                  </Flex>
                  <Progress mt={2} value={95} colorScheme="yellow" size="xs" />
                </Box>
                <Box pt={3}>
                  <Flex align="center">
                    <Text fontSize="sm" fontWeight="bold" color="lightgray">
                      JS
                    </Text>
                    <Spacer />
                    <Text fontSize="xs" color="gray">
                      90%
                    </Text>
                  </Flex>
                  <Progress mt={2} value={90} colorScheme="yellow" size="xs" />
                </Box>
                <Box pt={3}>
                  <Flex align="center">
                    <Text fontSize="sm" fontWeight="bold" color="lightgray">
                      React
                    </Text>
                    <Spacer />
                    <Text fontSize="xs" color="gray">
                      98%
                    </Text>
                  </Flex>
                  <Progress mt={2} value={98} colorScheme="yellow" size="xs" />
                </Box>
                <Box pt={3}>
                  <Flex align="center">
                    <Text fontSize="sm" fontWeight="bold" color="lightgray">
                      Redux
                    </Text>
                    <Spacer />
                    <Text fontSize="xs" color="gray">
                      96%
                    </Text>
                  </Flex>
                  <Progress mt={2} value={96} colorScheme="yellow" size="xs" />
                </Box>
                <Divider pt={8} borderColor="gray" />
                {/* FRAMEWORKS SKILLS */}
                <Flex align="center" pt={5}>
                  <CheckIcon w={3} color="#FFC107" mr={2} />
                  <Text fontSize="xs" fontWeight="semibold" color="gray">
                    Bootstrap, Materialize
                  </Text>
                </Flex>
                <Flex align="center" pt={5}>
                  <CheckIcon w={3} color="#FFC107" mr={2} />
                  <Text fontSize="xs" fontWeight="semibold" color="gray">
                    Stylus, Sass, Less
                  </Text>
                </Flex>
                <Flex align="center" pt={5}>
                  <CheckIcon w={3} color="#FFC107" mr={2} />
                  <Text fontSize="xs" fontWeight="semibold" color="gray">
                    Gulp, Webpack, Grunt
                  </Text>
                </Flex>
                <Flex align="center" pt={5}>
                  <CheckIcon w={3} color="#FFC107" mr={2} />
                  <Text fontSize="xs" fontWeight="semibold" color="gray">
                    GIT knowledge
                  </Text>
                </Flex>
                <Divider pt={5} borderColor="gray" />
                <Box mt={2}>
                  <Stack>
                    <Text fontSize="xs" fontWeight="medium" color="gray">
                      DOWNLOAD CV
                      <DownloadIcon w={3} color="#FFC107" ml={1} />
                    </Text>
                    <Spacer />
                  </Stack>
                </Box>
              </Container>
            </Box>
          </Box>

          {/*DISCOVERY */}

          <Box bg="#20202A" w="100%">
            <Box bg="" h="46vh">
              <Flex mt={32} ml={52}>
                <Stack color="white">
                  <Text fontSize="5xl" fontWeight="black">
                    Discover my Amazing <br />
                    Art Space!
                  </Text>
                  <Flex>
                    <Text mr={3} color="#FFC107">
                      code
                    </Text>
                    <Text mr={3}> I build automation tool</Text>
                    <Text color="#FFC107">code</Text>
                  </Flex>

                  <Flex>
                    <Text
                      fontWeight="semibold"
                      fontSize="small"
                      pt={3}
                      textAlign="center"
                      m={4}
                      bg="#FFC107"
                      w="16vh"
                      h="48px"
                      color="black"
                    >
                      EXPLORE NOW
                    </Text>
                  </Flex>
                </Stack>
                <Stack>
                  <Box boxSize="sm">
                    <Image
                      pt={6}
                      ml={10}
                      src="https://bit.ly/sage-adebayo"
                      alt="Segun Adebayo"
                    />
                  </Box>
                </Stack>
              </Flex>
            </Box>
            <Flex bgColor="" justify="center" mt={8} pl={10}>
              <Text fontWeight="bold" fontSize="2xl" color="#FFC107">
                10 +
              </Text>
              <Text
                ml={3}
                fontSize="sm"
                mt={2}
                fontWeight="semibold"
                color="white"
              >
                Years Experience
              </Text>
              <Spacer />

              <Text fontWeight="bold" fontSize="2xl" color="#FFC107">
                143
              </Text>
              <Text
                ml={3}
                fontSize="sm"
                fontWeight="semibold"
                mt={2}
                color="white"
              >
                Completed Projects
              </Text>
              <Spacer />
              <Spacer />

              <Text fontWeight="bold" fontSize="2xl" color="#FFC107">
                114
              </Text>
              <Text
                ml={3}
                fontSize="sm"
                fontWeight="semibold"
                mt={2}
                color="white"
              >
                Happy Customers
              </Text>
              <Spacer />
              <Spacer />

              <Text fontWeight="bold" fontSize="2xl" color="#FFC107">
                20 +
              </Text>
              <Text
                ml={3}
                fontSize="sm"
                fontWeight="semibold"
                mt={2}
                color="white"
              >
                Honors and Awards
              </Text>
              <Spacer />
            </Flex>
            <Stack>
              <Text color="#FFC107" fontSize="xl" my={6} pt={10}>
                My Services
              </Text>
            </Stack>

            <SimpleGrid columns={3} spacingX="1rem" spacingY="3rem">
              <Box bg="tomato" height="15rem" width="24rem">
                1
              </Box>
              <Box bg="tomato" height="15rem" width="24rem">
                2
              </Box>
              <Box bg="tomato" height="15rem" width="24rem">
                3
              </Box>
              <Box bg="tomato" height="15rem" width="24rem">
                4
              </Box>
              <Box bg="tomato" height="15rem" width="24rem">
                5
              </Box>
            </SimpleGrid>
          </Box>

          {/* |||| */}

          <Box bg="green" w="10%">
            3
          </Box>
        </Flex>
      </Box>
    </ChakraProvider>
  );
}

export default App;

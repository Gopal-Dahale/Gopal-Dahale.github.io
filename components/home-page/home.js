/* ------------------------ Imports ------------------------ */
import React from 'react'
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  Button,
  UnorderedList,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { HiOutlineExternalLink } from 'react-icons/hi'

// Custom Components
import { MotionBox, MotionFlex } from '../ui/motion'
import Header from '../layout/header'

// Constants
const ANIMATION_DURATION = 0.5
const ORANGE = '#ff9400'

/* ------------------------ Component ------------------------ */
const Home = () => (
  <Flex direction="column" align="center">
    <Flex direction={['column', 'column', 'row']}>
      <MotionBox
        opacity="0"
        initial={{
          translateX: -150,
          opacity: 0
        }}
        animate={{
          translateX: 0,
          opacity: 1,
          transition: {
            duration: ANIMATION_DURATION
          }
        }}
        m="auto"
        mb={[16, 16, 'auto']}
      >
        <Avatar size="2xl" name="Gopal Ramesh Dahale" src="assets/images/user_icon.png" />
      </MotionBox>
      <MotionFlex
        ml={['auto', 'auto', 16]}
        m={['auto', 'initial']}
        w={['90%', '85%', '80%']}
        maxW="800px"
        opacity="0"
        justify="center"
        direction="column"
        initial={{
          opacity: 0,
          translateX: 150
        }}
        animate={{
          opacity: 1,
          translateX: 0,
          transition: {
            duration: ANIMATION_DURATION
          }
        }}
      >
        <Header underlineColor={ORANGE} emoji="👋" mt={0}>
          Hello!
        </Header>
        <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
          <Box as="span">Welcome to my online backyard 🏡! &nbsp;</Box>
          I&apos;m&nbsp;
          <Box as="strong" fontWeight="600">
            Gopal,&nbsp;
          </Box>
          <Box as="div">
            a passionate Quantum Computing and Machine Learning enthusiast with extensive experience in related
            research areas 🚀.{' '}
          </Box>
          <Box as="div">
            I&apos;m actively seeking opportunities to pursue a PhD 🎓 in Quantum Computing and
            Algorithms, Variational Methods, and Quantum Machine Learning.
          </Box>
          <Box as="span" whiteSpace="nowrap" />
        </Box>
        <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
          Here, I share what I&apos;ve learned and the projects I&apos;ve created in this exciting
          field 😃.
        </Box>
      </MotionFlex>
    </Flex>
    <MotionBox
      w="100%"
      opacity="0"
      initial={{
        translateY: 80
      }}
      animate={{
        translateY: 0,
        opacity: 1,
        transition: {
          delay: ANIMATION_DURATION - 0.1,
          duration: ANIMATION_DURATION
        }
      }}
    >
      <Box mt={10}>
        <Stack
          mb={10}
          mx={[0, 0, 10]}
          padding={4}
          align="start"
          borderLeft="4px solid"
          borderColor="#53c8c4"
          color="whatsapp"
          _hover={{ shadow: 'lg' }}
          backgroundColor={useColorModeValue('gray.100', '#1e2533')}
          rounded="sm"
          fontSize="md"
        >
          <Text textAlign="center" color="#53c8c4" fontWeight="bold">
            Highlights
          </Text>
          <UnorderedList textAlign="left" paddingLeft={5} m={0}>
            <ListItem>
              <NextLink href="/open-source" passHref>
                <Button _hover={{ color: 'teal' }} variant="link">
                  Checkout my recent work
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                </Button>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="/Resume" passHref>
                <Link isExternal>
                  <Button
                    _hover={{ color: 'teal' }}
                    rightIcon={<HiOutlineExternalLink />}
                    variant="link"
                  >
                    Resume
                  </Button>
                </Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="/ILearnQuantum" target="_blank" passHref>
                <Link isExternal>
                  <Button
                    _hover={{ color: 'teal' }}
                    rightIcon={<HiOutlineExternalLink />}
                    variant="link"
                  >
                    Read my latest blogs
                  </Button>
                </Link>
              </NextLink>
            </ListItem>
          </UnorderedList>
        </Stack>
      </Box>
    </MotionBox>
  </Flex>
)

export default Home

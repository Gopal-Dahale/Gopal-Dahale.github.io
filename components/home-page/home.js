/* ------------------------ Imports ------------------------ */
import {
  Flex,
  Avatar,
  Box,
  Text,
  Badge,
  Stack,
  Link,
  UnorderedList,
  ListItem,
  useColorModeValue
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { MotionBox, MotionFlex } from '../ui/motion'
import Header from '../layout/header'

const ANIMATION_DURATION = 0.5
const ORANGE = '#ff9400'

const Home = ({ projects }) => (
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
        mb={[16, 16, 'auto']}>
        <Avatar size="2xl" src="assets/images/user_icon.png" />
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
        }}>
        <Header underlineColor={ORANGE} emoji="👋" mt={0}>
          Hello!
        </Header>
        <Box as="h2" fontSize="2xl" fontWeight="400" textAlign="left">
          I'm&nbsp;
          <Box as="strong" fontWeight="600">
            Gopal,&nbsp;
          </Box>
          <Box as="span">a student who enjoys making&nbsp;</Box>
          <Box as="span">Full Stack projects with&nbsp;</Box>
          <Box as="span">a blend of Machine Learning 🚀.&nbsp;</Box>
          <Box as="div"> I'm focused on developing stuff that can influence&nbsp;</Box>
          <Box as="span"> people, and&nbsp;</Box>
          <Box as="span"> I'm constantly seeking work opportunities&nbsp;</Box>
          <Box as="span">with tech companies&nbsp;</Box>
          <Box as="span"> on such projects 👨‍💻.&nbsp;</Box>
          <Box as="span" whiteSpace="nowrap" />
        </Box>
        <Box as="h2" fontSize="2xl" fontWeight="400" mt={5} textAlign="left">
          This place is my online backyard 🏡, where I share what I've learnt and the projects I
          made. 😃
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
      }}>
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
          fontSize="md">
          <Text textAlign="center" color="#53c8c4" fontWeight="bold">
            Highlights
          </Text>
          <UnorderedList textAlign="left" paddingLeft={5} m={0}>
            <ListItem>
              <NextLink href="/open-source" passHref>
                <Link>
                  Live/Local Github Repos
                  <Badge ml="1" colorScheme="green">
                    New
                  </Badge>
                </Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="/about" passHref>
                <Link>Work Experience</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink
                href="https://drive.google.com/file/d/1vfSivLbATuVK2lxbczEts8hRcBIrafWO/view?usp=sharing"
                passHref>
                <Link>Resume</Link>
              </NextLink>
            </ListItem>
            <ListItem>
              <NextLink href="https://jovian.ai/dahalegopal27" passHref>
                <Link>Jovian</Link>
              </NextLink>
              &nbsp;and&nbsp;
              <NextLink href="https://www.kaggle.com/gopalrameshdahale" passHref>
                <Link>Kaggle</Link>
              </NextLink>
              &nbsp;Profile
            </ListItem>
          </UnorderedList>
        </Stack>
      </Box>
    </MotionBox>
  </Flex>
)

export default Home

/* ------------------------ Imports ------------------------ */
import React from 'react'
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack
} from '@chakra-ui/react'
import NextLink from 'next/link'
import PropTypes from 'prop-types'

// Icons
import { GiHamburgerMenu } from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'

// Custom Components
import ColorModeSwitcher from '../ui/ColorModeSwitcher'

// Constants
const webLinks = [
  { name: 'About', path: '/about' },
  { name: 'Tech Stack', path: '/tech-stack' },
  { name: 'Projects', path: '/open-source' },
  { name: 'Achievements', path: '/achievements' }
]

const NavLink = (props) => {
  const { path, name, onClose } = props
  const link = {
    bg: useColorModeValue('gray.200', 'gray.900'),
    color: useColorModeValue('blue.500', 'blue.200')
  }
  return (
    <NextLink href={path} passHref>
      <Link
        px={2}
        py={1}
        rounded="md"
        _hover={{
          textDecoration: 'none',
          bg: link.bg
        }}
        _activeLink={{
          color: link.color
        }}
        onClick={() => onClose()}>
        {name}
      </Link>
    </NextLink>
  )
}

/* ------------------------ Component ------------------------ */
export default function TopNav() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Box
        bg={useColorModeValue('white', 'gray.700')}
        px={4}
        boxShadow="lg"
        position="fixed"
        width="100%"
        zIndex="55">
        <Flex
          h={16}
          alignItems="center"
          justifyContent="space-between"
          w={['90%', '85%', '80%']}
          maxW={800}
          mx="auto">
          <IconButton
            size="md"
            icon={isOpen ? <AiOutlineClose /> : <GiHamburgerMenu />}
            aria-label="Open Menu"
            display={['inherit', 'inherit', 'none']}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems="center">
            <Box>
              <NextLink href="/" passHref>
                <Avatar as={Link} size="sm" src="assets/images/user_icon.png" />
              </NextLink>
            </Box>
            <HStack as="nav" spacing={4} display={{ base: 'none', md: 'flex' }}>
              {webLinks.map((link, index) => (
                <NavLink di key={index} name={link.name} path={link.path} onClose={onClose} />
              ))}
            </HStack>
          </HStack>
          <Flex alignItems="center">
            <ColorModeSwitcher justifySelf="flex-end" />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box
            pb={4}
            w={['100%', '100%', '80%']}
            maxW={800}
            display={['inherit', 'inherit', 'none']}>
            <Stack as="nav" spacing={4}>
              {webLinks.map((link, index) => (
                <NavLink
                  key={index}
                  index={index}
                  name={link.name}
                  path={link.path}
                  onClose={onClose}
                />
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  )
}

/* ------------------------ PropTypes ------------------------ */
NavLink.propTypes = {
  path: PropTypes.string,
  name: PropTypes.string,
  onClose: PropTypes.func
}

NavLink.defaultProps = {
  path: '',
  name: '',
  onClose: () => {}
}

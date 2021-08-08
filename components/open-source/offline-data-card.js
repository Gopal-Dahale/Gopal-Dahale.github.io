/* ------------------------ Imports ------------------------ */
import * as React from 'react'
import {
  Box,
  Image,
  useColorModeValue,
  VStack,
  Text,
  Stack,
  AspectRatio,
  HStack,
  Tag,
  Icon,
  useDisclosure,
  Modal,
  ModalOverlay,
  Skeleton,
  ModalContent,
  ModalBody,
  Center,
  Flex,
  Tooltip
} from '@chakra-ui/react'
import { useState } from 'react'
import useFetch from 'use-http'
import { BiGitRepoForked, BiStar } from 'react-icons/bi'
import { FiGithub } from 'react-icons/fi'
import { VscRocket } from 'react-icons/vsc'
import PropTypes from 'prop-types'
import { getTagColor } from '../ui/theme'
import { MotionBox } from '../ui/motion'
import { CardTransition } from '../ui/page-transitions'
import LazyImage from '../ui/lazy-image'

/* ------------------------ Component ------------------------ */
const RepositoryCard = (props) => {
  const { title, cover, blurHash, technologies, url, live } = props
  const { get } = useFetch('https://api.github.com')
  const { isOpen, onOpen, onClose } = useDisclosure()

  const [loadingState, setLoadingState] = useState(false)
  const [description, setDescription] = useState(null)
  const [stars, setStars] = useState(null)
  const [forks, setForks] = useState(null)

  const handleClick = () => {
    onOpen()
    setLoadingState(true)
    get(`/repos${url.split('github.com')[1]}`).then((res) => {
      if (res) {
        setDescription(res.description)
        setStars(res.stargazers_count)
        setForks(res.forks_count)
      }
      setLoadingState(false)
    })
  }

  const handleLinkClick = (e, link) => {
    window.open(link)
    e.stopPropagation()
  }

  const transition = { duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }

  const thumbnailVariants = {
    initial: { scale: 0.9, opacity: 0 },
    enter: { scale: 1, opacity: 1, transition },
    exit: {
      scale: 0.5,
      opacity: 0,
      transition: { duration: 1.5, ...transition }
    }
  }

  const imageVariants = {
    hover: { scale: 1.1 }
  }

  return (
    <CardTransition>
      <Box onClick={handleClick} cursor="pointer" size="xl">
        <VStack
          rounded="xl"
          borderWidth="1px"
          bg={useColorModeValue('white', 'gray.800')}
          borderColor={useColorModeValue('gray.100', 'gray.700')}
          _hover={{
            shadow: 'lg',
            textDecoration: 'none'
          }}
          overflow="hidden"
          align="start"
          spacing={0}>
          <Box position="relative" w="100%">
            <MotionBox variants={thumbnailVariants}>
              <MotionBox whileHover="hover" variants={imageVariants} transition={transition}>
                <AspectRatio
                  ratio={1.85 / 1}
                  maxW="400px"
                  w="100%"
                  borderBottomWidth="1px"
                  borderColor={useColorModeValue('gray.100', 'gray.700')}>
                  <LazyImage src={cover} blurHash={blurHash} />
                </AspectRatio>
              </MotionBox>
            </MotionBox>
          </Box>
          <VStack py={2} px={[2, 4]} spacing={1} align="start" w="100%">
            <Flex justifyContent="space-between" width="100%">
              <Tooltip hasArrow label="Github link" placement="top">
                <HStack>
                  <Icon as={FiGithub} boxSize="0.9em" mt="1px" />
                  <Text
                    fontSize="sm"
                    noOfLines={1}
                    fontWeight="600"
                    align="left"
                    onClick={(e) => handleLinkClick(e, url)}>
                    {title}
                  </Text>
                </HStack>
              </Tooltip>
            </Flex>
            <Flex justifyContent="space-between" width="100%">
              <Box>
                <HStack spacing="1">
                  {technologies.map((tech, index) => (
                    <Tag key={index} size="sm" colorScheme={getTagColor(tech)}>
                      <Text fontSize={['0.55rem', 'inherit', 'inherit']}>{tech}</Text>
                    </Tag>
                  ))}
                </HStack>
              </Box>
            </Flex>
          </VStack>
        </VStack>
        <Modal isOpen={isOpen} onClose={onClose} isCentered allowPinchZoom>
          <ModalOverlay />
          <ModalContent bg="none" maxW="28rem" w="auto">
            <ModalBody p={0} rounded="lg" overflow="hidden" bg="none">
              <Box bg={useColorModeValue('white', 'gray.900')}>
                <Image src={cover} />
              </Box>
              <VStack
                py={2}
                px={[2, 4]}
                spacing={1}
                align="start"
                w="100%"
                bg={useColorModeValue('white', 'gray.900')}>
                <Flex justifyContent="space-between" width="100%">
                  <Tooltip hasArrow label="Github link" placement="top">
                    <HStack maxWidth="80%">
                      <Icon as={FiGithub} boxSize="0.9em" mt="1px" />
                      <Text
                        fontSize="sm"
                        noOfLines={2}
                        fontWeight="600"
                        align="left"
                        onClick={(e) => handleLinkClick(e, url)}>
                        {title}
                      </Text>
                    </HStack>
                  </Tooltip>

                  {loadingState ? (
                    <Box>
                      <Skeleton height="30px" width="60px" />
                    </Box>
                  ) : (
                    <HStack cursor="pointer">
                      {forks && (
                        <Box
                          _hover={{ color: 'blue.500' }}
                          onClick={(e) => handleLinkClick(e, url)}>
                          <Icon as={BiGitRepoForked} boxSize="0.9em" mt="1px" />
                          <Box as="span" ml="1" fontSize="sm">
                            {forks}
                          </Box>
                        </Box>
                      )}
                      {stars && (
                        <Box
                          _hover={{ color: 'blue.500' }}
                          onClick={(e) => handleLinkClick(e, url)}>
                          <Icon as={BiStar} boxSize="0.9em" mt="1px" />
                          <Box as="span" ml="1" fontSize="sm">
                            {stars}
                          </Box>
                        </Box>
                      )}
                      {live && (
                        <Tooltip hasArrow label="View Deployment" placement="top">
                          <Box
                            _hover={{ color: 'blue.500' }}
                            onClick={(e) => handleLinkClick(e, live)}>
                            <Icon as={VscRocket} boxSize="0.9em" mt="1px" />
                          </Box>
                        </Tooltip>
                      )}
                    </HStack>
                  )}
                </Flex>
                <Flex justifyContent="space-between" width="100%">
                  <Box>
                    <HStack spacing="1">
                      {technologies.map((tech, index) => (
                        <Tag key={index} size="sm" colorScheme={getTagColor(tech)}>
                          <Text fontSize={['0.55rem', 'inherit', 'inherit']}>{tech}</Text>
                        </Tag>
                      ))}
                    </HStack>
                  </Box>
                </Flex>
                <Box width="100%" py={2}>
                  {loadingState ? (
                    <>
                      <Skeleton height="16px" width="100%" />
                      <Stack spacing={2} mt={1} isInline alignItems="center">
                        <Skeleton height="16px" width="100%" />
                      </Stack>
                      <Stack spacing={2} mt={1} isInline alignItems="center">
                        <Skeleton height="16px" width="80%" />
                      </Stack>
                    </>
                  ) : (
                    <Text fontSize="sm">{description ?? ''}</Text>
                  )}
                </Box>
              </VStack>
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    </CardTransition>
  )
}

export default RepositoryCard

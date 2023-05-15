/* ------------------------ Imports ------------------------ */
import React from 'react'
import {
  Box,
  Stack,
  VStack,
  Heading,
  Flex,
  Text,
  Tag,
  Image,
  useColorMode,
  useColorModeValue
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

// Icons
import { FaGraduationCap } from 'react-icons/fa'
import { BsFillBriefcaseFill } from 'react-icons/bs'

// Custom Components
import { PageSlideFade, StaggerChildren, CardTransition } from '../components/ui/page-transitions'
import { MotionBox } from '../components/ui/motion'
import { companies, institutes } from '../data/data'
import Header from '../components/layout/header'
import PageLayout from '../components/layout/pageLayout'

// Constants
const TURQUOISE = '#06b6d4'

const Card = (props) => {
  const { title, role, skills, period, logo, link, colorMode, alt } = props
  return (
    <CardTransition>
      <Box
        px={4}
        py={5}
        borderWidth="1px"
        _hover={{ shadow: 'lg' }}
        bg={useColorModeValue('white', 'gray.800')}
        position="relative"
        rounded="md"
      >
        <Flex justifyContent="space-between">
          <Flex>
            <a target="_blank" href={link} rel="noreferrer">
              <Image
                rounded="full"
                w={16}
                h={16}
                objectFit="cover"
                fallbackSrc="assets/images/placeholder.png"
                src={logo}
                alt={alt}
              />
            </a>
            <Stack spacing={2} pl={3} align="left">
              <Heading align="left" fontSize="xl" color={`mode.${colorMode}.career.text`}>
                {title}
              </Heading>
              <Heading align="left" fontSize="sm" color={`mode.${colorMode}.career.subtext`}>
                {role}
              </Heading>
              <Stack
                spacing={1}
                mt={3}
                isInline
                alignItems="center"
                display={['none', 'none', 'flex', 'flex']}
              >
                {skills.map((skill) => (
                  <Tag size="sm" padding="0 3px" key={skill}>
                    {skill}
                  </Tag>
                ))}
              </Stack>
              <Stack
                spacing={1}
                mt={3}
                isInline
                alignItems="center"
                display={['none', 'none', 'flex', 'flex']}
              />
            </Stack>
          </Flex>
          <Stack display={['none', 'none', 'flex', 'flex']}>
            <Text fontSize={14} color={`mode.${colorMode}.career.subtext`}>
              {period}
            </Text>
          </Stack>
        </Flex>
        <Stack
          spacing={1}
          mt={3}
          isInline
          alignItems="center"
          display={['flex', 'flex', 'none', 'none']}
        >
          {skills.map((skill) => (
            <Tag size="sm" padding="0 3px" key={skill}>
              {skill}
            </Tag>
          ))}
        </Stack>
      </Box>
    </CardTransition>
  )
}

/* ------------------------ Container ------------------------ */
const About = () => {
  const { colorMode } = useColorMode()

  return (
    <PageLayout title="About" keywords="Google Summer of Code, Quantum Open Source Foundation, Qiskit" description="My educational and professional journey so far">
      <PageSlideFade>
        <StaggerChildren>
          <MotionBox>
            <Heading>
              <Flex alignItems="center">
                <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                  Career
                </Header>
                <Stack pl={3}>
                  <Box as={BsFillBriefcaseFill} size="25px" />
                </Stack>
              </Flex>
            </Heading>
          </MotionBox>
          <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={12}>
            {companies.map((company, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={company.title}
                  role={company.role}
                  skills={company.skills}
                  period={company.period}
                  logo={company.logo}
                  link={company.link}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
          <Heading>
            <Flex alignItems="center">
              <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                Education
              </Header>
              <Stack pl={3}>
                <Box as={FaGraduationCap} size="25px" />
              </Stack>
            </Flex>
          </Heading>
          <VStack spacing={4} marginBottom={6} align="left" mx={[0, 0, 6]} mt={12}>
            {institutes.map((institute, index) => (
              <MotionBox whileHover={{ y: -5 }} key={index}>
                <Card
                  key={index}
                  title={institute.title}
                  role={institute.role}
                  skills={institute.skills}
                  period={institute.period}
                  logo={institute.logo}
                  link={institute.link}
                  colorMode={colorMode}
                />
              </MotionBox>
            ))}
          </VStack>
        </StaggerChildren>
      </PageSlideFade>
    </PageLayout>
  )
}

export function getStaticProps() {
  return {
    props: {
      companies,
      institutes
    }
  }
}

/* ------------------------ PropTypes ------------------------ */
Card.propTypes = {
  title: PropTypes.string,
  role: PropTypes.string,
  skills: PropTypes.array,
  period: PropTypes.string,
  logo: PropTypes.string,
  link: PropTypes.string,
  colorMode: PropTypes.string,
  alt: PropTypes.string
}

Card.defaultProps = {
  title: '',
  role: '',
  skills: [],
  period: '',
  logo: '',
  link: '',
  colorMode: '',
  alt: ''
}

export default About

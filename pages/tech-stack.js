/* ------------------------ Imports ------------------------ */
import * as React from 'react'
import { useState } from 'react'
import {
  Icon,
  VStack,
  HStack,
  Text,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useColorModeValue,
  SimpleGrid
} from '@chakra-ui/react'
import PropTypes from 'prop-types'

// Icons
import { FaAtom, FaRobot } from 'react-icons/fa'
import { BiCode } from 'react-icons/bi'
import { MdNote } from 'react-icons/md'

// Custom Components
import Section from '../components/skills/section'
import SkillCard from '../components/skills/skill-card'
import { skillsArray } from '../data/data'
import Header from '../components/layout/header'
import { MotionBox } from '../components/ui/motion'
import { container, PageSlideFade } from '../components/ui/page-transitions'
import PageLayout from '../components/layout/pageLayout'

/* ------------------------ Container ------------------------ */
const TechStack = ({ skills }) => {
  const [skillsList, setSkillsList] = useState([])

  React.useEffect(() => {
    if (skillsList.length === 0) {
      setSkillsList(skills.filter((skill) => skill.type === 'quantum'))
    } else {
      setSkillsList(skills)
    }
  }, [])

  const filterSkills = (tab) => {
    if (tab.length) setSkillsList(skills.filter((skill) => skill.type === tab))
    else setSkillsList(skills)
  }

  return (
    <PageLayout title="Skills" keywords="rails, ruby, react, javascript, typescript">
      <PageSlideFade>
        <VStack spacing={8}>
          <Section>
            <VStack>
              <Header mt={0} mb={1}>
                Tech Stack
              </Header>
              <Text
                fontSize="xl"
                color={useColorModeValue('gray.500', 'gray.200')}
                maxW="lg"
                textAlign="center"
              >
                This is a list of my favourite tools and technologies that I use frequently.
              </Text>
            </VStack>
          </Section>
          <Section>
            <Tabs variant="soft-rounded" colorScheme="blue" align="center" w="100%">
              <TabList display="flex" flexWrap="wrap">
                {/* <Tab
                  bg={useColorModeValue('gray.100', 'gray.800')}
                  color={useColorModeValue('gray.600', 'gray.500')}
                  _selected={{
                    color: 'green.800',
                    bg: 'green.100'
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills('')}>
                  <HStack spacing={1}>
                    <Text>All</Text>
                  </HStack>
                </Tab> */}
                <Tab
                  bg={useColorModeValue('gray.100', 'gray.800')}
                  color={useColorModeValue('gray.500', 'gray.500')}
                  _selected={{
                    color: useColorModeValue('gray.100', 'gray.800'),
                    bg: useColorModeValue('gray.900', 'gray.100')
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills('quantum')}
                >
                  <HStack spacing={1}>
                    <Icon as={FaAtom} />
                    <Text>Quantum Computing</Text>
                  </HStack>
                </Tab>
                <Tab
                  bg={useColorModeValue('gray.100', 'gray.800')}
                  color={useColorModeValue('gray.600', 'gray.500')}
                  _selected={{
                    color: 'green.800',
                    bg: 'green.100'
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills('ml')}
                >
                  <HStack spacing={1}>
                    <Icon as={FaRobot} />
                    <Text>Machine Learning for Hybrid Computation</Text>
                  </HStack>
                </Tab>
                <Tab
                  bg={useColorModeValue('gray.100', 'gray.800')}
                  color={useColorModeValue('gray.600', 'gray.500')}
                  _selected={{
                    color: 'red.800',
                    bg: 'red.100'
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills('language')}
                >
                  <HStack spacing={1}>
                    <Icon as={BiCode} />
                    <Text>Programming Languages</Text>
                  </HStack>
                </Tab>
                <Tab
                  bg={useColorModeValue('gray.100', 'gray.800')}
                  color={useColorModeValue('gray.600', 'gray.500')}
                  _selected={{
                    color: 'red.800',
                    bg: 'red.100'
                  }}
                  mr={2}
                  mt={2}
                  onClick={() => filterSkills('editor')}
                >
                  <HStack spacing={1}>
                    <Icon as={MdNote} />
                    <Text>Editors</Text>
                  </HStack>
                </Tab>
              </TabList>
              <TabPanels minHeight="45vh">
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
                <TabPanel px={0}>
                  <MotionBox variants={container} initial="hidden" animate="visible">
                    <SimpleGrid columns={[1, 2]} spacing={4} mt={8}>
                      {skillsList.map((tool, index) => (
                        <SkillCard
                          key={index}
                          name={tool.name}
                          description={tool.description}
                          image={tool.image}
                          link={tool.link}
                        />
                      ))}
                    </SimpleGrid>
                  </MotionBox>
                </TabPanel>
              </TabPanels>
            </Tabs>
          </Section>
        </VStack>
      </PageSlideFade>
    </PageLayout>
  )
}

export function getStaticProps() {
  return {
    props: {
      skills: skillsArray
    }
  }
}

/* ------------------------ PropTypes ------------------------ */
TechStack.propTypes = {
  skills: PropTypes.array
}

TechStack.defaultProps = {
  skills: []
}

export default TechStack

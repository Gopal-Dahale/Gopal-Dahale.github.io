/* ------------------------ Imports ------------------------ */
import * as React from 'react'
import {
  VStack,
  Text,
  useColorModeValue,
  HStack,
  Accordion,
  AccordionItem,
  AccordionPanel,
  AccordionButton
} from '@chakra-ui/react'

// Custom Components
import { PageSlideFade } from '../components/ui/page-transitions'
import Header from '../components/layout/header'
import OfflineData from '../components/open-source/offline-data'
import { btechRepositories, currentRepositories } from '../data/repositories'
import PageLayout from '../components/layout/pageLayout'

// Constants
const TURQUOISE = '#06b6d4'

/* ------------------------ Container ------------------------ */
const RepositoriesList = () => (
  <PageLayout title="Open-source" keywords="A list of open source projects">
    <PageSlideFade>
      <VStack align="start" spacing={3}>
        <HStack justifyContent="space-between" width="100%">
          <Header underlineColor={TURQUOISE} mt={0} mb={0}>
            Projects
          </Header>
        </HStack>
        <Text color={useColorModeValue('gray.500', 'gray.200')} textAlign="left">
          Here I bridge the gap between theory and practice by working on projects in Quantum
          Computing.
        </Text>
      </VStack>
      <OfflineData repositories={currentRepositories} />
      <Accordion allowToggle>
        <AccordionItem>
          <h2>
            <AccordionButton>
              <VStack align="start" spacing={3}>
                <HStack justifyContent="space-between" width="100%">
                  <Header underlineColor={TURQUOISE} mt={0} mb={0}>
                    University Projects
                  </Header>
                </HStack>
                <Text color={useColorModeValue('gray.500', 'gray.200')} textAlign="left">
                  Notable projects completed during my Bachelor&apos;s.
                </Text>
              </VStack>
            </AccordionButton>
          </h2>
          <AccordionPanel pb={0}>
            <OfflineData repositories={btechRepositories} />
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
    </PageSlideFade>
  </PageLayout>
)

export function getStaticProps() {
  return {
    props: {
      btechRepositories,
      currentRepositories
    }
  }
}

export default RepositoriesList

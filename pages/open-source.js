/* ------------------------ Imports ------------------------ */
import * as React from 'react'
import { VStack, Text, useColorModeValue, HStack } from '@chakra-ui/react'

// Custom Components
import { PageSlideFade } from '../components/ui/page-transitions'
import Header from '../components/layout/header'
import OfflineData from '../components/open-source/offline-data'
import repositories from '../data/repositories'
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
          This page contains some of the projects that I have worked on.
        </Text>
      </VStack>
      <OfflineData repositories={repositories} />
    </PageSlideFade>
  </PageLayout>
)

export function getStaticProps() {
  return {
    props: {
      repositories
    }
  }
}

export default RepositoriesList

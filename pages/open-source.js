/* ------------------------ Imports ------------------------ */
import * as React from 'react'
import {
  VStack,
  Text,
  useColorModeValue,
  HStack,
  IconButton,
  Tooltip,
  Skeleton
} from '@chakra-ui/react'
import useSound from 'use-sound'
import { PageSlideFade } from '../components/ui/page-transitions'
import Header from '../components/layout/header'
import OfflineData from '../components/open-source/offline-data'
import { repositories } from '../data/repositories'
import PageLayout from '../components/layout/pageLayout'

const TURQUOISE = '#06b6d4'

const iconProps = {
  variant: 'ghost',
  size: 'md',
  isRound: true
}

/* ------------------------ Container ------------------------ */
const RepositoriesList = ({ repositories }) => (
  <PageLayout title="Open-source" keywords="A list of open source projects">
    <PageSlideFade>
      <VStack align="start" spacing={3}>
        <HStack justifyContent="space-between" width="100%">
          <Header underlineColor={TURQUOISE} mt={0} mb={0}>
            Open Source
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

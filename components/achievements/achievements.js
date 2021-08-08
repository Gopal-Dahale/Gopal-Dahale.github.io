/* ------------------------ Imports ------------------------ */
import * as React from 'react'
import { FiPackage, FiHome, FiEdit2, FiUsers, FiBarChart2 } from 'react-icons/fi'
import { SiQwiklabs, SiHackerrank, SiIbm, SiKotlin, SiCodechef } from 'react-icons/si'
import { FaFreeCodeCamp } from 'react-icons/fa'
import { VStack, Heading, Box, Link, LinkProps } from '@chakra-ui/react'
import NextLink from 'next/link'
import { TimelineItem } from './Timeline'
import { PageSlideFade } from '../ui/page-transitions'
import Header from '../layout/header'

const ExternalLink = ({ url, linkProps, text, ...props }) => (
  <NextLink href={url} passHref>
    <Link {...linkProps} {...props}>
      {text}
    </Link>
  </NextLink>
)

const Achievements = () => (
  <PageSlideFade>
    <Box align="start" mb={6}>
      <Header mt={0} mb={0}>
        Achievements
      </Header>
    </Box>
    <VStack textAlign="start" align="start" mb={5}>
      <Box>
        <Heading fontSize="2xl" fontWeight="600" my={5}>
          2021
        </Heading>
        <Box>
          <TimelineItem icon={SiCodechef} skipTrail>
            Earned 3 star rating on
            <ExternalLink
              color="blue.200"
              url="https://www.codechef.com/users/gopald27"
              text=" CodeChef"
              target="_blank"
            />
          </TimelineItem>
        </Box>
      </Box>
      <Box>
        <Heading fontSize="2xl" fontWeight="600" my={5}>
          2020
        </Heading>
        <Box>
          <TimelineItem icon={FiBarChart2} skipTrail>
            Completed an online course Data Analysis with Python organised by
            <ExternalLink
              color="blue.200"
              url="https://jovian.ai/dahalegopal27"
              text=" Jovian.ai"
              target="_blank"
            />
          </TimelineItem>
          <TimelineItem icon={SiKotlin} skipTrail>
            Participated in
            <ExternalLink
              color="blue.200"
              url="https://drive.google.com/file/d/1FGPYe8gs3-1bRX9CPSY-AxNC3qklIU8p/view"
              text=" 30 days of Kotlin Campaign "
              target="_blank"
            />
            organized by Google Developers.
          </TimelineItem>
          <TimelineItem icon={SiIbm} skipTrail>
            Earned
            <ExternalLink
              color="blue.200"
              url="https://www.credly.com/badges/db3418b1-9857-46bd-9663-4e5b68ac1552/linked_in"
              text=" IBM Quantum Challenge "
              target="_blank"
            />
            Badge
          </TimelineItem>
          <TimelineItem icon={SiHackerrank} skipTrail>
            Secured 43 rank out of 1513 in
            <ExternalLink
              color="blue.200"
              url="https://www.hackerrank.com/results/hack-the-interview-global/dahalegopal27"
              text=" Hack the Interview - Global"
              target="_blank"
            />
          </TimelineItem>
          <TimelineItem icon={FaFreeCodeCamp}>
            Completed Responsive Web Design Developer Certification from
            <ExternalLink
              color="blue.200"
              url="https://www.freecodecamp.org/certification/fccdcf64cea-ae73-4db1-8f4b-2f30b4fa70bdg/responsive-web-design"
              text=" freeCodeCamp"
              target="_blank"
            />
          </TimelineItem>
          <TimelineItem icon={SiHackerrank} skipTrail>
            Verified Skills and Badges on
            <ExternalLink
              color="blue.200"
              url="https://www.hackerrank.com/dahalegopal27"
              text=" HackerRank"
              target="_blank"
            />
          </TimelineItem>
        </Box>
      </Box>
      <Box>
        <Heading fontSize="2xl" fontWeight="600" my={5}>
          2019
        </Heading>
        <Box>
          <TimelineItem icon={SiHackerrank}>
            Earned 5 star badge in problem solving on
            <ExternalLink
              color="blue.200"
              url="https://www.hackerrank.com/dahalegopal27"
              text=" HackerRank"
              target="_blank"
            />
          </TimelineItem>
          <TimelineItem icon={SiQwiklabs} skipTrail>
            Earned
            <ExternalLink
              color="blue.200"
              url="https://google.qwiklabs.com/public_profiles/80cfcdb6-e310-48fe-b59b-662f3924c6fd"
              text=" Qwiklabs Essential Badges "
              target="_blank"
            />
            from Google Cloud Training
          </TimelineItem>
        </Box>
      </Box>
    </VStack>
  </PageSlideFade>
)

export default Achievements

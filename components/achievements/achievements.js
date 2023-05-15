/* ------------------------ Imports ------------------------ */
import * as React from 'react'
import { VStack, Heading, Box, Link } from '@chakra-ui/react'
import NextLink from 'next/link'
import PropTypes from 'prop-types'

// Icons
import { FiBarChart2 } from 'react-icons/fi'
import { SiQwiklabs, SiHackerrank, SiIbm, SiKotlin, SiCodechef, SiQiskit } from 'react-icons/si'
import { FaFreeCodeCamp, FaSun, FaCampground, FaBookOpen } from 'react-icons/fa'
import { BsCodeSlash } from 'react-icons/bs'
import { BiCodeCurly } from 'react-icons/bi'
import { GiMolecule } from 'react-icons/gi'
import { VscSourceControl } from 'react-icons/vsc'

// Custom Components
import TimelineItem from './Timeline'
import { PageSlideFade } from '../ui/page-transitions'
import Header from '../layout/header'

const ExternalLink = ({ url, linkProps, text, ...props }) => (
  <NextLink href={url} passHref>
    <Link {...linkProps} {...props}>
      {text}
    </Link>
  </NextLink>
)

/* ------------------------ Component ------------------------ */
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
          2023
        </Heading>
        <Box>
          <TimelineItem icon={FaSun}>
            Selected in the
            <ExternalLink
              color="blue.200"
              url="https://summerofcode.withgoogle.com/programs/2023/projects/sRqbxQyq"
              text=" Google Summer of Code 23 with ML4SCI"
              target="_blank"
            />.
          </TimelineItem>

          <TimelineItem icon={VscSourceControl}>
            Selected in the
            <ExternalLink
              color="blue.200"
              url="https://qosf.org/"
              text=" Quantum Open Source Foundation Cohort 7"
              target="_blank"
            />.
          </TimelineItem>

          <TimelineItem icon={GiMolecule}>
            Runner-up in
            <ExternalLink
              color="blue.200"
              url="https://app.ekipa.de/challenges/deloitte-quantum-23/brief"
              text=" Deloitte's Quantum Climate Challenge 23"
              target="_blank"
            />.
          </TimelineItem>

          <TimelineItem icon={SiIbm}>
            Successfully completed
            <ExternalLink
              color="blue.200"
              url="https://www.credly.com/badges/79ef7ec5-08c6-4cfa-8c35-d37286c018e2/public_url"
              text=" Variational Algorithm Design "
              target="_blank"
            />
            Module by Qiskit.
          </TimelineItem>

          <TimelineItem icon={FaBookOpen}>
            Successfully completed Qubit by Qubit&apos;s
            <ExternalLink
              color="blue.200"
              url="https://verified.sertifier.com/en/verify/54756615694912/"
              text=" Introduction to Quantum Computing "
              target="_blank"
            />
            course.
          </TimelineItem>

          <TimelineItem icon={BiCodeCurly}>
           QHack Open Hackathon Winner in
            <ExternalLink
              color="blue.200"
              url="https://drive.google.com/file/d/1RAAjDUDqbbrzIYPTJPdWUnUF0bOguV-g/view"
              text=" Quantum Chemistry Challenge "
              target="_blank"
            />
            and
            <ExternalLink
              color="blue.200"
              url="https://drive.google.com/file/d/1w9YmwXNT9fjFBVrl6r3sGSsagatQL9bJ/view"
              text=" AWS Challenge"
              target="_blank"
            />. Secured 21 rank of 793 in
            
            <ExternalLink
              color="blue.200"
              url="https://qhack.ai/"
              text=" Coding Challenges"
              target="_blank"
            />.
          </TimelineItem>

          <TimelineItem icon={SiQiskit}>
            Achieved the
            <ExternalLink
              color="blue.200"
              url="https://drive.google.com/file/d/1xoeAxj4N4SMggAOZTtThcucI0boMDypI/view"
              text=" Certificate of Quantum Excellence "
              target="_blank"
            />
            in Quantum Explorers Program by Qiskit.
          </TimelineItem>

          <TimelineItem icon={BsCodeSlash} skipTrail>
            <ExternalLink
              color="blue.200"
              url="https://drive.google.com/file/d/1E6b1CosAnNUjJpQn9zYygjmb4th_kQ-b/view"
              text="Successful submission "
              target="_blank"
            />
            to iQuHack IonQ Remote Challenge.
          </TimelineItem>
        </Box>
      </Box>

      <Box>
        <Heading fontSize="2xl" fontWeight="600" my={5}>
          2022
        </Heading>
        <Box>
          <TimelineItem icon={FaCampground}>
            Secured 19th rank out of 429 in
            <ExternalLink
              color="blue.200"
              url="https://codecamp.xanadu.ai/"
              text=" PennyLane Code Camp"
              target="_blank"
            />.
          </TimelineItem>
          <TimelineItem icon={SiIbm}>
            Mentee in
            <ExternalLink
              color="blue.200"
              url="https://www.credly.com/badges/753352aa-64c2-4cde-a85c-a61f68dbb976/public_url"
              text=" Qiskit Advocate Mentorship Program Fall 22"
              target="_blank"
            />.
          </TimelineItem>
          <TimelineItem icon={SiIbm}>
            Advanced badge in
            <ExternalLink
              color="blue.200"
              url="https://www.credly.com/badges/97d76c09-1e5b-4446-8fd9-874f6c7e2d14/public_url"
              text=" IBM Quantum Challenge Fall 2022 Achievement"
              target="_blank"
            />.
          </TimelineItem>
          <TimelineItem icon={SiIbm}>
            Successfully completed
            <ExternalLink
              color="blue.200"
              url="https://www.credly.com/badges/5f68cecd-3cc4-4d01-8363-c9fa4b452331/public_url"
              text=" Qiskit Global Summer School 22"
              target="_blank"
            />.
          </TimelineItem>
          <TimelineItem icon={SiIbm}>
            Became
            <ExternalLink
              color="blue.200"
              url="https://www.credly.com/badges/b2426e47-db32-49ef-bd24-40cb51ff637f/public_url"
              text=" Qiskit Advocate"
              target="_blank"
            />.
          </TimelineItem>
          <TimelineItem icon={SiIbm}>
            <ExternalLink
              color="blue.200"
              url="https://www.credly.com/badges/3ae61f77-2fd0-419b-863f-1d0cd070bf13/public_url"
              text=" IBM Certified Associate Developer - Quantum Computation using Qiskit v0.2X"
              target="_blank"
            />.
          </TimelineItem>
          <TimelineItem icon={SiIbm}>
            Earned the
            <ExternalLink
              color="blue.200"
              url="https://www.credly.com/badges/62cf82ba-cc6f-4e48-9598-ad6196c67580/public_url"
              text=" IBM Quantum Spring Challenge "
              target="_blank"
            />
            Badge.
          </TimelineItem>
          <TimelineItem icon={FaSun} skipTrail>
            Selected in the
            <ExternalLink
              color="blue.200"
              url="https://summerofcode.withgoogle.com/archive/2022/projects/0gbpQgKv"
              text=" Google Summer of Code 22 with ML4SCI"
              target="_blank"
            />.
          </TimelineItem>
        </Box>
      </Box>

      <Box>
        <Heading fontSize="2xl" fontWeight="600" my={5}>
          2021
        </Heading>
        <Box>
          <TimelineItem icon={SiCodechef} skipTrail>
            Earned 3-star rating on
            <ExternalLink
              color="blue.200"
              url="https://www.codechef.com/users/gopald27"
              text=" CodeChef"
              target="_blank"
            />.
          </TimelineItem>
        </Box>
      </Box>
      <Box>
        <Heading fontSize="2xl" fontWeight="600" my={5}>
          2020
        </Heading>
        <Box>
          <TimelineItem icon={FiBarChart2}>
            Completed the Data Analysis with Python online course organised by
            <ExternalLink
              color="blue.200"
              url="https://jovian.ai/dahalegopal27"
              text=" Jovian.ai"
              target="_blank"
            />.
          </TimelineItem>
          <TimelineItem icon={SiKotlin}>
            Participated in
            <ExternalLink
              color="blue.200"
              url="https://drive.google.com/file/d/1FGPYe8gs3-1bRX9CPSY-AxNC3qklIU8p/view"
              text=" 30 days of Kotlin Campaign "
              target="_blank"
            />
            organized by Google Developers.
          </TimelineItem>
          <TimelineItem icon={SiIbm}>
            Earned
            <ExternalLink
              color="blue.200"
              url="https://www.credly.com/badges/db3418b1-9857-46bd-9663-4e5b68ac1552/public_url"
              text=" IBM Quantum Challenge "
              target="_blank"
            />
            Badge
          </TimelineItem>
          <TimelineItem icon={SiHackerrank}>
            Secured 43rd rank out of 1513 in
            <ExternalLink
              color="blue.200"
              url="https://www.hackerrank.com/results/hack-the-interview-global/dahalegopal27"
              text=" Hack the Interview - Global"
              target="_blank"
            />.
          </TimelineItem>
          <TimelineItem icon={FaFreeCodeCamp}>
            Completed Responsive Web Design Developer Certification from
            <ExternalLink
              color="blue.200"
              url="https://www.freecodecamp.org/certification/gopald27/responsive-web-design"
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
            />.
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
            />.
          </TimelineItem>
          <TimelineItem icon={SiQwiklabs} skipTrail>
            Attained
            <ExternalLink
              color="blue.200"
              url="https://google.qwiklabs.com/public_profiles/80cfcdb6-e310-48fe-b59b-662f3924c6fd"
              text=" Qwiklabs Essential Badges "
              target="_blank"
            />
            from Google Cloud Training.
          </TimelineItem>
        </Box>
      </Box>
    </VStack>
  </PageSlideFade>
)

/* ------------------------ PropTypes ------------------------ */
ExternalLink.propTypes = {
  url: PropTypes.string,
  linkProps: PropTypes.object,
  text: PropTypes.string
}

ExternalLink.defaultProps = {
  url: '',
  linkProps: {},
  text: ''
}

export default Achievements

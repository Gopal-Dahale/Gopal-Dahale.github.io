/* ------------------------ Imports ------------------------ */
import { Fragment } from 'react'
import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'
import TopNav from './top-nav'
import Footer from './footer'

/* ------------------------ Component ------------------------ */
function AppLayout(props) {
  return (
    <>
      <TopNav />
      <Box textAlign="center" fontSize="xl" w={['90%', '85%', '80%']} maxW={800} mx="auto">
        <Box pt="7rem" pb={10}>
          {props.children}
        </Box>
      </Box>
      <Footer />
    </>
  )
}

export default AppLayout

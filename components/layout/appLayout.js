/* ------------------------ Imports ------------------------ */
import React, { Fragment } from 'react'
import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'

// Custom Components
import TopNav from './top-nav'
import Footer from './footer'

/* ------------------------ Component ------------------------ */
function AppLayout(props) {
  const { children } = props
  return (
    <>
      <TopNav />
      <Box textAlign="center" fontSize="xl" w={['90%', '85%', '80%']} maxW={800} mx="auto">
        <Box pt="7rem" pb={10}>
          {children}
        </Box>
      </Box>
      <Footer />
    </>
  )
}

/* ------------------------ PropTypes ------------------------ */
AppLayout.propTypes = {
  children: PropTypes.elementType
}

AppLayout.defaultProps = {
  children: {}
}

export default AppLayout

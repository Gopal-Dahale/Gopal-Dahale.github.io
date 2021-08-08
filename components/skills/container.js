/* ------------------------ Imports ------------------------ */
import React from 'react'
import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'

/* ------------------------ Component ------------------------ */
export const Container = (props) => (
  <Box textAlign="center" fontSize="xl" w={['90%', '85%', '80%']} maxW={800} mx="auto" {...props} />
)

export default Container

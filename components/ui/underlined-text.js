/* ------------------------ Imports ------------------------ */
import React from 'react'
import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'

/* ------------------------ Component ------------------------ */
const UnderlinedText = (props) => {
  const { children, h } = props
  return (
    <Box as="span" display="inline-block" position="relative">
      {children}
      <Box
        as="span"
        display="block"
        position="absolute"
        bg="gray.200"
        w="100%"
        h={h || '1px'}
        bottom={-2}
      />
    </Box>
  )
}

/* ------------------------ PropTypes ------------------------ */
UnderlinedText.propTypes = {
  h: PropTypes.string,
  children: PropTypes.elementType
}

UnderlinedText.defaultProps = {
  h: '',
  children: {}
}

export default UnderlinedText

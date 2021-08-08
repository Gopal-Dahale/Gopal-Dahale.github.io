/* ------------------------ Imports ------------------------ */
import React from 'react'
import { Box } from '@chakra-ui/react'
import PropTypes from 'prop-types'

// Custom Components
import UnderlinedText from '../ui/underlined-text'

/* ------------------------ Component ------------------------ */
const Header = ({ children, underlineColor, emoji, ...props }) => (
  <Box
    as="h1"
    mt={10}
    mb={6}
    fontSize="3xl"
    lineHeight="shorter"
    fontWeight="bold"
    {...props}
    textAlign="left">
    <UnderlinedText color={underlineColor}>{children}</UnderlinedText>
    {emoji ? ` ${emoji}` : ''}
  </Box>
)

/* ------------------------ PropTypes ------------------------ */
Header.propTypes = {
  children: PropTypes.elementType,
  underlineColor: PropTypes.string,
  emoji: PropTypes.string
}

Header.defaultProps = {
  children: {},
  underlineColor: '',
  emoji: ''
}

export default Header

import { Box } from '@chakra-ui/react';
import UnderlinedText from '../ui/underlined-text';

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
    {emoji ? ' ' + emoji : ''}
  </Box>
);
export default Header;

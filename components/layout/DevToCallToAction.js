import { Flex, Link, Text, Icon } from '@chakra-ui/react';
import { FaDev } from 'react-icons/fa';

const DevToCallToAction = ({ href }) => (
  <Flex justifyContent="center" marginTop="7">
    <Link href={href} isExternal>
      <Text marginBottom="2" fontSize="2xl" fontWeight="400">
        React, comment and follow on
      </Text>
      <Icon as={FaDev} w={12} h={12} />
    </Link>
  </Flex>
);

export default DevToCallToAction;

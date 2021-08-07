import * as React from 'react';
import { useEffect } from 'react';
import { SimpleGrid } from '@chakra-ui/react';
import useFetch from 'use-http';
import { PageSlideFade, StaggerChildren } from '../ui/page-transitions';
import RepositoryCard from './offline-data-card';
import { MotionBox } from '../ui/motion';

const OfflineData = ({ repositories }) => {
  // const {
  //   loading,
  //   error,
  //   data = []
  // } = useFetch('https://api.github.com/repos/Gopal-Dahale/Digit-recognition-visualiser-NN', []);
  return (
    <PageSlideFade>
      {/* {error && 'Error!'}
      {loading && 'Loading...'}
      {data && console.log(data)} */}
      <StaggerChildren>
        <SimpleGrid columns={[1, 2, 3]} spacing={4} mt={12}>
          {repositories.map((repo, index) => (
            <MotionBox whileHover={{ y: -5 }} key={index}>
              <RepositoryCard
                key={index}
                title={repo.title}
                description={repo.description}
                cover={repo.cover}
                blurHash={repo.blurHash}
                technologies={repo.technologies}
                url={repo.url}
                live={repo.live}
                stars={repo.stars}
                fork={repo.fork}
              />
            </MotionBox>
          ))}
        </SimpleGrid>
      </StaggerChildren>
    </PageSlideFade>
  );
};

export default OfflineData;
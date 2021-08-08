/* ------------------------ Imports ------------------------ */
import * as React from 'react'
import { SimpleGrid } from '@chakra-ui/react'
import PropTypes from 'prop-types'

// Custom Components
import { PageSlideFade, StaggerChildren } from '../ui/page-transitions'
import RepositoryCard from './offline-data-card'
import { MotionBox } from '../ui/motion'

/* ------------------------ Component ------------------------ */
const OfflineData = (props) => {
  const { repositories } = props

  return (
    <PageSlideFade>
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
  )
}

/* ------------------------ PropTypes ------------------------ */
OfflineData.propTypes = {
  repositories: PropTypes.array
}

OfflineData.defaultProps = {
  repositories: []
}

export default OfflineData

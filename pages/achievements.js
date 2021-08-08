/* ------------------------ Imports ------------------------ */
import React from 'react'

// Custom Components
import Achievements from '../components/achievements/achievements'
import PageLayout from '../components/layout/pageLayout'

/* ------------------------ Container ------------------------ */
const Index = () => (
  <PageLayout title="Achievements" keywords="My achievements">
    <Achievements />
  </PageLayout>
)

export default Index

/* ------------------------ Imports ------------------------ */
import React from 'react'

// Custom Components
import Achievements from '../components/achievements/achievements'
import PageLayout from '../components/layout/pageLayout'

/* ------------------------ Container ------------------------ */
const Index = () => (
  <PageLayout title="Achievements" keywords="Quantum Computing, Quantum Machine Learning, Quantum Chemistry, QHack, Quantum Climate Challenge, Google Summer of Code, M Quantum Open Source Foundation, Qiskit Advocate, IBM">
    <Achievements />
  </PageLayout>
)

export default Index

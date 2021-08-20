/* ------------------------ Imports ------------------------ */
import React from 'react'

// Custom Components
import Home from '../components/home-page/home'
import PageLayout from '../components/layout/pageLayout'

/* ------------------------ Container ------------------------ */
export default function Index() {
  return (
    <PageLayout
      title="Gopal Dahale - Full Stack/ Machine Learning Developer"
      keywords="Full Stack Development, Machine Learning, Deep Learning, Programming"
      description="Software Engineer. Full Stack Developer. Machine Learning. Student at IIT Bhilai.">
      <Home />
    </PageLayout>
  )
}

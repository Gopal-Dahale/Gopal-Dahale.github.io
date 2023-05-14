/* ------------------------ Imports ------------------------ */
import React from 'react'

// Custom Components
import Home from '../components/home-page/home'
import PageLayout from '../components/layout/pageLayout'

/* ------------------------ Container ------------------------ */
export default function Index() {
  return (
    <PageLayout
      title="Gopal Dahale - Quantum Computing and Machine Learning Researcher"
      keywords="Quantum Computing, Machine Learning, Quantum Machine Learning, Variational Methods, Quantum Noise Mitigation, Quantum Chemistry, Carbon-capture, Measurement based Imaginary Time Evolution (ITE), HEP, Google Summer of Code, Quantum Open Source Foundtion, Qiskit Advocate"
      description="Gopal Dahale is a quantum computing and machine learning researcher. He is passionate about using these technologies to solve real-world problems. His research interests include variational methods, quantum noise mitigation, and quantum chemistry. He is currently working on the application of quantum computing to carbon capture.">
      <Home />
    </PageLayout>
  )
}

/* ------------------------ Imports ------------------------ */
import React from 'react'
import { motion } from 'framer-motion'
import PropTypes from 'prop-types'
import Meta from './meta'

const variants = {
  hidden: { opacity: 0, x: -200, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -100 }
}

/* ------------------------ Component ------------------------ */
const PageLayout = ({ children, title, description, keywords }) => (
  <>
    <Meta title={title} description={description} keywords={keywords} />
    <motion.main
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
    >
      {children}
    </motion.main>
  </>
)

/* ------------------------ PropTypes ------------------------ */
PageLayout.propTypes = {
  children: PropTypes.elementType,
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string
}

PageLayout.defaultProps = {
  children: {},
  title: '',
  description: '',
  keywords: ''
}

export default PageLayout

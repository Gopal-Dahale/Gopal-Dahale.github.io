/* ------------------------ Imports ------------------------ */
import React from 'react'
import { SlideFade } from '@chakra-ui/react'
import PropTypes from 'prop-types'

// Custom Components
import { MotionBox } from './motion'

/* ------------------------ Transitions ------------------------ */

const staggerVariants = {
  initial: {
    opacity: 0,
    translateY: -20
  },
  enter: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 }
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const variants = {
  initial: {
    opacity: 0,
    translateY: -20
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
}

export const easing = [0.6, -0.05, 0.01, 0.99]

export const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export const fadeInUp = {
  initial: {
    y: 60,
    opacity: 0,
    transition: { duration: 0.6, ease: easing }
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: easing
    }
  }
}

export const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
}

export const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1
  }
}

export const PageSlideFade = ({ children }) => <SlideFade in>{children}</SlideFade>

export const StaggerChildren = ({ children }) => (
  <MotionBox
    animate={{
      opacity: 1,
      translateY: 0
    }}
    variants={staggerVariants}
  >
    {children}
  </MotionBox>
)

export const CardTransition = ({ children }) => (
  <MotionBox variants={variants}>{children}</MotionBox>
)

/* ------------------------ PropTypes ------------------------ */
PageSlideFade.propTypes = {
  children: PropTypes.elementType
}

StaggerChildren.propTypes = {
  children: PropTypes.elementType
}

CardTransition.propTypes = {
  children: PropTypes.elementType
}

PageSlideFade.defaultProps = {
  children: {}
}

StaggerChildren.defaultProps = {
  children: {}
}

CardTransition.defaultProps = {
  children: {}
}

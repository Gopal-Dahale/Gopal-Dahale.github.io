/* ------------------------ Imports ------------------------ */
import React from 'react'
import { Box, Flex, Image, forwardRef } from '@chakra-ui/react'
import { motion, isValidMotionProp } from 'framer-motion'

/* ------------------------ Component ------------------------ */
export const MotionBox = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Box ref={ref} {...chakraProps} />
  })
)

/* ------------------------ Component ------------------------ */
export const MotionFlex = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      // do not pass framer props to DOM element
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Flex ref={ref} {...chakraProps} />
  })
)

/* ------------------------ Component ------------------------ */
export const MotionImage = motion(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    )
    return <Image ref={ref} fallbackSrc="/assets/images/placeholder.png" {...chakraProps} />
  })
)

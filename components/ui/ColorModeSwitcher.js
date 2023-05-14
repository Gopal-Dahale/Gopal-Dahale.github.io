/* ------------------------ Imports ------------------------ */
import React from 'react'
import { useColorMode, useColorModeValue } from '@chakra-ui/react'
import useSound from 'use-sound'
import { AnimatePresence } from 'framer-motion'

// Custom Components
import { MotionBox } from './motion'

/* ------------------------ Component ------------------------ */
const ColorModeSwitcher = () => {
  const { toggleColorMode } = useColorMode()
  const mode = useColorModeValue('dark', 'light')

  const [play] = useSound('/assets/audios/lightswitch.mp3', {
    volume: 0.05,
    sprite: {
      on: [0, 300],
      off: [500, 300]
    }
  })

  const handleClick = () => {
    if (mode === 'dark') {
      play({ id: 'on' })
    } else {
      play({ id: 'off' })
    }
    toggleColorMode()
  }

  return (
    <AnimatePresence exitBeforeEnter initial={false}>
      <MotionBox
        onClick={handleClick}
        key={mode === 'dark' ? 'dark-icon' : 'light-icon'}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.2 }}
        cursor="pointer"
        fontSize={['2xl', '3xl', '3xl']}
      >
        {mode === 'dark' ? '🌤' : '🌙'}
      </MotionBox>
    </AnimatePresence>
  )
}

export default ColorModeSwitcher

/* ------------------------ Imports ------------------------ */
import React, { useEffect } from 'react'
import App from 'next/app'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { AnimatePresence } from 'framer-motion'
import PropTypes from 'prop-types'

// Custom Components
import AppLayout from '../components/layout/appLayout'
import { theme } from '../components/ui/theme'
import { PrismGlobal } from '../components/ui/prism'
import * as gtag from '../lib/gtag'

/* ------------------------ Container ------------------------ */
function MyApp(props) {
  const { Component, pageProps } = props
  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <ChakraProvider theme={theme} resetCSS>
      <PrismGlobal />
      <AppLayout>
        <AnimatePresence
          exitBeforeEnter
          initial={false}
          onExitComplete={() => window.scrollTo(0, 0)}
        >
          <Box key={router.route}>
            <Component {...pageProps} />
          </Box>
        </AnimatePresence>
      </AppLayout>
    </ChakraProvider>
  )
}

MyApp.getInitialProps = async (appContext) => {
  const appProps = await App.getInitialProps(appContext)
  return { ...appProps }
}

/* ------------------------ PropTypes ------------------------ */
MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object
}

MyApp.defaultProps = {
  Component: {},
  pageProps: {}
}

export default MyApp

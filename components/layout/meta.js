/* ------------------------ Imports ------------------------ */
import React from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

/* ------------------------ Component ------------------------ */
const Meta = ({ title, keywords, description }) => (
  <Head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta charSet="utf-8" />
    <meta name="keywords" content={keywords} />
    <meta name="description" content={description} />
    <title>{title}</title>
  </Head>
)

/* ------------------------ PropTypes ------------------------ */
Meta.propTypes = {
  title: PropTypes.string,
  keywords: PropTypes.string,
  description: PropTypes.string
}

Meta.defaultProps = {
  title: '',
  keywords: '',
  description: ''
}

export default Meta

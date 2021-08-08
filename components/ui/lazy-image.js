/* ------------------------ Imports ------------------------ */
import * as React from 'react'
import ProgressiveImage from 'react-progressive-image'
import { BlurhashCanvas } from 'react-blurhash'
import { Image } from '@chakra-ui/react'
import PropTypes from 'prop-types'

/* ------------------------ Component ------------------------ */
const LazyImage = (props) => {
  const { src, blurHash, width, height, size, layout, rounded } = props
  const placeholder = '/assets/images/placeholder.png'

  return (
    <ProgressiveImage delay={500} src={src} placeholder={placeholder}>
      {(source, loading) =>
        loading ? (
          <BlurhashCanvas
            hash={blurHash}
            width={width}
            height={height}
            punch={1}
            style={{ borderRadius: rounded ? '5px' : '' }}
          />
        ) : (
          <Image
            src={source}
            objectFit="cover"
            alt="cover image"
            width={width}
            height={height}
            size={size}
            layout={layout}
            rounded={rounded}
          />
        )
      }
    </ProgressiveImage>
  )
}

/* ------------------------ PropTypes ------------------------ */
LazyImage.propTypes = {
  src: PropTypes.string,
  blurHash: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
  size: PropTypes.number,
  layout: PropTypes.string,
  rounded: PropTypes.string
}

LazyImage.defaultProps = {
  src: '',
  blurHash: '',
  width: 100,
  height: 100,
  size: 5,
  layout: '',
  rounded: ''
}

export default LazyImage

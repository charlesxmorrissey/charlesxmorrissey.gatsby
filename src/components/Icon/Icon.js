import React from 'react'
import PropTypes from 'prop-types'

import { IconContainer } from './Icon.style'

const Icon = ({ fillColor, name }) => (
  <IconContainer fillColor={fillColor}>
    <use xlinkHref={`#${name}`} />
  </IconContainer>
)

Icon.propTypes = {
  fillColor: PropTypes.string,
  name: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  fillColor: '#000',
}

export default Icon

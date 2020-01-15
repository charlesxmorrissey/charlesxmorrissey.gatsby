import React from 'react'
import PropTypes from 'prop-types'

import colors from 'styles/colors'

import { IconWrapper } from './Icon.style'

const Icon = ({ fillColor, name }) => (
  <IconWrapper fillColor={fillColor}>
    <use xlinkHref={`#${name}`} />
  </IconWrapper>
)

Icon.propTypes = {
  fillColor: PropTypes.string,
  name: PropTypes.string.isRequired,
}

Icon.defaultProps = {
  fillColor: colors.black,
}

export default Icon

import React from 'react'
import PropTypes from 'prop-types'
import colors from 'styles/colors'

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
  fillColor: colors.black,
}

export default Icon

import styled from 'styled-components'
import { rem } from 'utils/helpers'
import colors from 'styles/colors'

export const IconWrapper = styled.svg`
  fill: ${(props) => props.fillColor || colors.black};
  height: ${rem(20)};
  width: ${rem(20)};
`

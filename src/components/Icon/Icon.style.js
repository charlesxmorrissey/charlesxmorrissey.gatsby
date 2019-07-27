import styled from 'styled-components'
import { rem } from 'utils/helpers'

export const IconWrapper = styled.svg`
  fill: ${(props) => props.fillColor};
  height: ${rem(20)};
  width: ${rem(20)};
`

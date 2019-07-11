import styled from 'styled-components'
import { rem } from 'utils/helpers'

export const IconContainer = styled.svg`
  fill: ${(props) => props.fillColor};
  height: ${rem(24)};
  width: ${rem(24)};
`

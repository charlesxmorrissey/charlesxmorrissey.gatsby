import styled from 'styled-components'
import colors from 'styles/colors'

export const IconWrapper = styled.svg`
  fill: ${(props) => props.fillColor || colors.black};
  height: 20px;
  width: 20px;
`

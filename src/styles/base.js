import styled from 'styled-components'
import { media } from 'utils/helpers'

export const Block = styled.div`
  padding-left: 20px;
  padding-right: 20px;

  ${media.medium`
    padding-left: 40px;
    padding-right: 0;
  `}
`

export const HideVisually = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`

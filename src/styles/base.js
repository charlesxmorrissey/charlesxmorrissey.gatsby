import styled from 'styled-components'
import { media, rem } from 'utils/helpers'

export const Block = styled.div`
  padding-left: ${rem(20)};
  padding-right: ${rem(20)};

  ${media.medium`
    padding-left: ${rem(40)};
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

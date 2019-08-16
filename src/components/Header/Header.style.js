import styled from 'styled-components'
import { rem } from 'utils/helpers'

export const HeaderWrapper = styled.header`
  background: tomato;
  max-width: 440px;
`

export const HeaderSocialWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-left: -${rem(8)};
`

export const HeaderSocialLink = styled.a`
  margin-right: ${rem(4)};
  padding: ${rem(8)};

  &:first-of-type {
    svg {
      height: ${rem(24)};
      width: ${rem(24)};
    }
  }
`

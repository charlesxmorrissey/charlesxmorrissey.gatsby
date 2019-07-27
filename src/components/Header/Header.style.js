import styled from 'styled-components'
import { rem } from 'utils/helpers'

export const HeaderWrapper = styled.header`
  max-width: 440px;
`

export const HeaderSocialWrapper = styled.div`
  align-items: center;
  display: flex;
`

export const HeaderSocialLink = styled.a`
  margin-right: ${rem(8)};
  padding: ${rem(8)};

  &:first-of-type {
    svg {
      height: ${rem(24)};
      width: ${rem(24)};
    }
  }
`

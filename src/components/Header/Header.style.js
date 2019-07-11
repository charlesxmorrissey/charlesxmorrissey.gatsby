import styled from 'styled-components'
import { media, rem } from 'utils/helpers'

export const HeaderStyle = styled.header`
  max-width: 440px;
`

export const HeaderTitleStyle = styled.h1`
  font-size: ${rem(36)};

  ${media.medium`
    font-size: ${rem(42)};
  `}
`

export const HeaderCopyStyle = styled.p`
  font-size: ${rem(18)};

  ${media.medium`
    font-size: ${rem(24)};
  `}
`

export const HeaderSocialWrapper = styled.div`
  align-items: center;
  display: flex;
`

export const HeaderSocialLink = styled.a`
  line-height: 0;
  margin-right: ${rem(8)};
  padding: 5px;

  svg {
    height: ${rem(20)};
    width: ${rem(20)};
  }

  &:first-child {
    svg {
      height: ${rem(24)};
      width: ${rem(24)};
    }
  }
`

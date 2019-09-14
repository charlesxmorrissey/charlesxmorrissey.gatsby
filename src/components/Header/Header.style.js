import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  max-width: 440px;
`

export const HeaderSocialWrapper = styled.div`
  align-items: center;
  display: flex;
  margin-left: -8px;
`

export const HeaderSocialLink = styled.a`
  margin-right: 4px;
  padding: 8px;

  &:first-of-type {
    svg {
      height: 24px;
      width: 24px;
    }
  }
`

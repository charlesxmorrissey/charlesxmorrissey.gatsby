import React from 'react'
import { useSiteMetadata } from 'hooks'
import Icon from 'components/Icon'

import {
  HeaderStyle,
  HeaderTitleStyle,
  HeaderCopyStyle,
  HeaderSocialWrapper,
  HeaderSocialLink,
} from './Header.style'
import { HideVisually } from 'styles/base'

import 'svg/email.svg'
import 'svg/github.svg'
import 'svg/linkedin.svg'

const Header = () => {
  const { author, description, social } = useSiteMetadata()

  return (
    <HeaderStyle>
      <HeaderTitleStyle>{author}</HeaderTitleStyle>
      <HeaderCopyStyle>{description}</HeaderCopyStyle>

      {social && (
        <HeaderSocialWrapper>
          {Object.keys(social).map((item, i) => (
            <HeaderSocialLink href={social[item]} key={`${item}-${i}`}>
              <HideVisually>{item}</HideVisually>
              <Icon name={item} />
            </HeaderSocialLink>
          ))}
        </HeaderSocialWrapper>
      )}
    </HeaderStyle>
  )
}

export default Header

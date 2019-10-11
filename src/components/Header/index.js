import React from 'react'
import { useSiteMetadata } from 'utils/useSiteMetadata'
import Icon from 'components/Icon'

import {
  HeaderWrapper,
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
    <HeaderWrapper>
      <h1>{author}</h1>
      <p>{description}</p>

      {social && (
        <HeaderSocialWrapper>
          {Object.keys(social).map((item, i) =>
            social[item] ? (
              <HeaderSocialLink href={social[item]} key={`${item}-${i}`}>
                <HideVisually>{item}</HideVisually>
                <Icon name={item} />
              </HeaderSocialLink>
            ) : null
          )}
        </HeaderSocialWrapper>
      )}
    </HeaderWrapper>
  )
}

export default Header

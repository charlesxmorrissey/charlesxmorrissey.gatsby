import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from 'styles/globalStyle'
import { Block } from 'styles/base'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Block as="main">{children}</Block>
  </>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

export default Layout

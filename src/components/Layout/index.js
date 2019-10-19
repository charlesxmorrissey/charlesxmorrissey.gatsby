import React from 'react'
import PropTypes from 'prop-types'

import GlobalStyle from 'styles/globalStyle'
import { Container } from 'styles/base'

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Container as="main">{children}</Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired,
}

export default Layout

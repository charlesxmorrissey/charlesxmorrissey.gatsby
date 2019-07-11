import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { useSiteMetadata } from 'hooks'

const SEO = ({ lang, ...props }) => {
  const { author, description, title } = useSiteMetadata()

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={author}
      titleTemplate={`%s | ${title}`}
      meta={[
        {
          name: `description`,
          content: description,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: description,
        },
      ].concat(props.meta)}
    />
  )
}

SEO.propTypes = {
  description: PropTypes.string.isRequired,
  lang: PropTypes.string.isRequired,
  meta: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired,
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
}

export default SEO

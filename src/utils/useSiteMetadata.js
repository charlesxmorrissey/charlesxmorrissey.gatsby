import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            description
            title
            social {
              email
              linkedin
              github
            }
          }
        }
      }
    `
  )

  return site.siteMetadata
}

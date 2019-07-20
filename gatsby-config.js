const siteMetadata = {
  title: `Senior Web Engineer`,
  author: `Charles X. Morrissey`,
  description: `I build accessible web applications using technologies like Vue, React, Node, ES6, Webpack, and more.`,
  siteUrl: `http://work.charles-x.com/`,
  social: {
    email: `mailto:hi@charles-x.com?subject=hello%20from%20website`,
    github: `https://github.com/charlesxmorrissey`,
    linkedin: `https://www.linkedin.com/in/charles-x-morrissey-b366976`,
  },
}

module.exports = {
  siteMetadata,

  plugins: [
    {
      resolve: `gatsby-plugin-resolve-src`,
    },
    {
      resolve: `gatsby-plugin-eslint`,
      options: {
        test: /\.js$|\.jsx$/,
        stages: [`develop`],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        displayName: process.env.NODE_ENV !== `production`,
      },
    },
    {
      resolve: `gatsby-plugin-svg-sprite`,
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        background_color: `#FFFFFF`,
        crossOrigin: `use-credentials`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        include_favicon: true,
        name: siteMetadata.author,
        short_name: siteMetadata.author,
        start_url: `/`,
        theme_color: `#FFFFFF`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
    },
  ],
}

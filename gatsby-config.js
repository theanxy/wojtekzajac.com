module.exports = {
  siteMetadata: {
    title: `Wojtek Zając`
  },
  pathPrefix: `/wojtekzajac.com`,
  plugins: [
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography.js`
      }
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ]
};

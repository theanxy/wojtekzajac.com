module.exports = {
  siteMetadata: {
    title: `Wojtek Zając`
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-242891-5',
        respectDNT: true,
        exclude: []
      }
    },
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

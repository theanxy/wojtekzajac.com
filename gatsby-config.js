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
		{
			resolve: 'gatsby-plugin-mailchimp',
			options: {
				endpoint: 'https://wojtekzajac.us20.list-manage.com/subscribe/post?u=610c5d99e8fe1f368b75160e6&amp;id=80fd18d63c'
			},
		},
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`
  ]
};

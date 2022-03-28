module.exports = {
  pathPrefix: '/leslie-left-frontend',
  siteMetadata: {
    title: 'Leslie Left',
    description: 'Stockholm-based Leslie Left is an upcoming indie music group and one of the city’s most exciting bands that you definitely do not want to miss.',
    author: 'Leslie Left',
  },
  plugins: [
    // styled components support
    'gatsby-plugin-styled-components',

    // react-helmet is used to inject data in the <head /> tag
    'gatsby-plugin-react-helmet',

    // Preload fonts
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: [
          'Lato',
          'Roboto',
        ],
        display: 'swap',
      },
    },

    // Google analytics
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-142479920-1',
        head: true,
        anonymize: true,
        respectDNT: false,
      },
    },

  ],
};

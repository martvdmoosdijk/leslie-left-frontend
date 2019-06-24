module.exports = {
  pathPrefix: '/leslie-left-frontend',
  siteMetadata: {
    title: 'Leslie Left',
    description: 'EP Come on - Out now! Stockholm-based Leslie Left is an upcoming indie music group and one of the city’s most exciting bands that you definitely don’t want to miss.',
    author: 'Leslie Left',
  },
  plugins: [
    // styled components support
    'gatsby-plugin-styled-components',

    // react-helmet is used to inject data in the <head /> tag
    'gatsby-plugin-react-helmet',

    // Preload fonts
    {
      resolve: 'gatsby-plugin-prefetch-google-fonts',
      options: {
        fonts: [
          {
            family: 'Righteous',
          },
          {
            family: 'Roboto',
          },
        ],
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

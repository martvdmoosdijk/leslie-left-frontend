module.exports = {
  siteMetadata: {
    title: 'Leslie Left',
    description: 'Leslie left - EP RUNNING FROM THE RED ROOM - Out now!',
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
    // {
    //   resolve: 'gatsby-plugin-web-font-loader',
    //   options: {
    //     google: {
    //       families: ['Righteous', 'Roboto'],
    //     },
    //   },
    // },

    // source-filesystem is used to load files into graphql queries
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },

    // transformer-sharp and plugin-sharp are used to transform image files into optimized versions
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',

    // plugin-manifest creates web manifest for progressive Web App
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
  ],
};

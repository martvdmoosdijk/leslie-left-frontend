module.exports = {
  siteMetadata: {
    title: 'Leslie Left',
    description: 'EP YELLOW YELLOW, PINK PINK - Out now!',
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
  ],
};

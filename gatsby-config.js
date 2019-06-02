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
  ],
};

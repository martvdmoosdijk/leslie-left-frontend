import React from 'react';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

const SEO = () => {
  const { siteMetadata } = useStaticQuery(
    graphql`
        query {
          site {
            siteMetadata {
              title
              description
              author
            }
          }
        }
      `,
  ).site;

  const metaDescription = siteMetadata.description;

  return (
    <Helmet titleTemplate="%s">
      <html lang="en" />
      <title>{siteMetadata.title}</title>
      <meta name="description" content={metaDescription} />
      <meta name="msapplication-TileColor" content="#00aba9" />
      <meta name="theme-color" content="#ffffff" />

      <meta property="og:title" content={siteMetadata.title} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content="website" />
      {/* <meta property="og:image" content={albumCover} /> */}

      <meta name="twitter:card" content="summary" />
      <meta name="twitter:creator" content={siteMetadata.author} />
      <meta name="twitter:title" content={siteMetadata.title} />
      <meta name="twitter:description" content={metaDescription} />

      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png?v=lk2RMxd56B" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png?v=lk2RMxd56B" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png?v=lk2RMxd56B" />
      <link rel="manifest" href="/site.webmanifest?v=lk2RMxd56B" />
      <link rel="mask-icon" href="/safari-pinned-tab.svg?v=lk2RMxd56B" color="#000000" />
      <link rel="shortcut icon" href="/favicon.ico?v=lk2RMxd56B" />

      <script src="https://cdnjs.cloudflare.com/ajax/libs/smoothscroll/1.4.10/SmoothScroll.min.js" />

    </Helmet>
  );
};

export default SEO;

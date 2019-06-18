import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

import favicon from '../images/favicon.ico';
import favicon16 from '../images/favicon-16x16.png';
import favicon32 from '../images/favicon-32x32.png';
import appleTouchIcon from '../images/apple-touch-icon.png';

const SEO = ({
  description,
  lang,
  meta,
  link,
  title,
}) => {
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

  const metaDescription = description || siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{ lang }}
      title={title}
      titleTemplate={`%s | ${siteMetadata.title}`}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: siteMetadata.author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
      link={[
        {
          rel: 'shortcut icon', href: `${favicon}`,
        },
        {
          rel: 'icon', type: 'image/png', sizes: '16x16', href: `${favicon16}`,
        },
        {
          rel: 'icon', type: 'image/png', sizes: '32x32', href: `${favicon32}`,
        },
        {
          rel: 'apple-touch-icon', sizes: '180x180', href: `${appleTouchIcon}`,
        },
      ].concat(link)}
    />
  );
};

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  link: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  link: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
};

export default SEO;

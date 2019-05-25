import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

// import Header from './header';
// import Footer from './footer';
import '../../styles/global.css';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;

const Layout = ({ children, showHeader, showFooter }) => {
  const { siteMetadata } = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `).site;

  return (
    <>
      { showHeader && (
        <div>
          Header | {siteMetadata.title}
        </div>
      ) }

      <Container>
        {children}
      </Container>

      { showFooter && (
        <div>
          Footer
        </div>
      ) }
    </>
  );
};

Layout.defaultProps = {
  showHeader: true,
  showFooter: true,
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
};

export default Layout;

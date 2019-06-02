import React from 'react';
import PropTypes from 'prop-types';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import '../styles/global.css';
import Footer from './footer';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => (props.fullHeight ? '100%' : 'auto')};
`;

const MaxWidthWrapper = styled.div`
  max-width: ${props => (props.maxWidth ? '1600px;' : 'auto')};
  height: 100%;
  width: 100%;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: ${props => (props.fullHeight ? '100%' : 'auto')};
  padding: 20px;
`;

const Header = styled.header``;

const Layout = ({
  className,
  children,
  fullHeight,
  maxWidth,
  showHeader,
  showFooter,
}) => {
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
    <Container className={className} fullHeight={fullHeight}>
      <MaxWidthWrapper maxWidth={maxWidth}>
        { showHeader ? (
          <Header>Header | {siteMetadata.title}</Header>
        ) : <div /> }

        <Content fullHeight={fullHeight}>
          {children}
        </Content>

        { showFooter ? (
          <Footer />
        ) : <div /> }
      </MaxWidthWrapper>
    </Container>
  );
};

Layout.defaultProps = {
  className: '',
  fullHeight: true,
  maxWidth: true,
  showHeader: false,
  showFooter: false,
};

Layout.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  fullHeight: PropTypes.bool,
  maxWidth: PropTypes.bool,
  showHeader: PropTypes.bool,
  showFooter: PropTypes.bool,
};

export default Layout;

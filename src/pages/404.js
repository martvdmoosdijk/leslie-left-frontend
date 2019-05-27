import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

import { YELLOW, PINK } from '../styles/variables';
import Layout from '../components/layout';
import SEO from '../components/seo';

const StyledLayout = styled(Layout)`
  background-color: ${PINK};
  color: ${YELLOW};

  a {
    color: ${YELLOW};
    cursor: pointer;
    text-decoration: underline;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  width: 100%;
  height: 100%;

  margin-bottom: 20%;
`;

const Title = styled.h1``;

const NotFoundPage = () => (
  <StyledLayout>
    <SEO title="404 - Not found" />
    <Container>
      <Title>404 - NOT FOUND</Title>
      <p>
        Damn, this page is missing! <Link to="/">Lets go back?</Link>
      </p>
    </Container>
  </StyledLayout>
);

export default NotFoundPage;

import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Logo from '../components/logo';
// import Image from '../components/image';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  background-color: yellow;
`;

// const TextContainer = styled.div`
//   width: 100%;
//   display: flex;
//   justify-content: center;
// `;

const IndexPage = () => (
  <Layout showHeader={false} showFooter={false}>
    <SEO title="Home" />

    <Container>
      <Logo />
      {/* <TextContainer>
        <h1>Leslie Left</h1>
      </TextContainer> */}
    </Container>
  </Layout>
);

export default IndexPage;

import React from 'react';
import styled from 'styled-components';
// import { Link } from 'gatsby';

import Layout from '../components/layout/layout';
import SEO from '../components/seo';
import Logo from '../components/logo';
// import Image from '../components/image';

const TABLET = 'min-width: 540px';
const LAPTOP = 'min-width: 1024px';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: yellow;
`;

const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  width: 90%;
  height: 100%;
  margin: auto;
  
  @media (${TABLET}) {
    flex-direction: row;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 0;
  
  @media (${TABLET}) {
    margin-top: -10%;
    align-items: flex-start;
    justify-content: center;
  }

  @media(${LAPTOP}) {
    width: 90%;
  }
`;

const Title = styled.h1`
  font-size: 14vw;

  @media (${TABLET}) {
    font-size: 9vw;
  }

  @media(${LAPTOP}) {
    font-size: 90px;
  }
`;

const SubTitle = styled.h2`
  font-size: 6vw;

  @media (${TABLET}) {
    font-size: 2vw;
  }

  @media(${LAPTOP}) {
    font-size: 21px;
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-top: 25px;
  font-size: 7vw;
  width: 100%;
  
  @media (${TABLET}) {
    margin-top: 50px;
    font-size: 32px;
  }

`;

const Link = styled.a`
  text-decoration: underline;
  color: black;
  margin-bottom: 4px;
`;

const IndexPage = () => (
  <Layout showHeader={false} showFooter={false}>
    <SEO title="Home" />

    <Container>
      <ContainerWrapper>
        <Logo />
        <TextContainer>
          <Title>Leslie Left</Title>
          <SubTitle>Running from the red room</SubTitle>
          <Links>
            <Link href="http://google.com">Music</Link>
            <Link href="http://google.com">Tour</Link>
            <Link href="http://google.com">News</Link>
          </Links>
        </TextContainer>
      </ContainerWrapper>
    </Container>
  </Layout>
);

export default IndexPage;

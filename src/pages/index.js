import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Logo from '../components/logo';
import PromoVideo from '../components/promo-video';
import { YELLOW, PINK } from '../styles/variables';

const StyledLayout = styled(Layout)`
  background-color: ${YELLOW};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 40% auto 1fr;

  margin: auto;
  max-width: 800px;

  @media (orientation: landscape) {
    grid-template-columns: 50% 1fr;
    grid-template-rows: auto 1fr;
    max-width: 1300px;
    max-height: 600px;
  }
`;

const LogoContainer = styled.div`
  @media (orientation: landscape) {
    grid-row: 1 / span 2;
  }
`;

const TitleContainer = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  @media (orientation: landscape) {
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const SubTitle = styled.h3`
  text-align: center;
`;

const AlbumLink = styled.a`
  color: ${PINK};
  text-decoration: underline;
`;

const PlayerContainer = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default class IndexPage extends Component {
  componentDidMount() {
    window.addEventListener('resize', () => {
      // console.log(window.innerWidth / window.innerHeight);
    });
  }

  render() {
    return (
      <StyledLayout showFooter>
        <SEO />

        <Container>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <TitleContainer>
            <Title className="title">Leslie Left</Title>
            <SubTitle>Come on - <AlbumLink href="https://open.spotify.com/album/3wGtrJpPrWq4Nn1TQJIonc" target="_blank" rel="noopener noreferrer">EP OUT NOW!</AlbumLink></SubTitle>
          </TitleContainer>

          <PlayerContainer>
            <PromoVideo embedCode="GQnehaz1ipQ" />
          </PlayerContainer>
        </Container>
      </StyledLayout>
    );
  }
}

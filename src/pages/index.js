import React, { Component } from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Logo from '../components/logo';
import PromoVideo from '../components/promo-video';
import { YELLOW, PINK } from '../styles/variables';

const StyledLayout = styled(Layout)`
  background-color: ${YELLOW};
  overflow: hidden;
`;

const Container = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr auto 1fr;

  margin: auto;
  max-width: 800px;

  @media (orientation: landscape) {
    grid-template-columns: 50% 1fr;
    grid-template-rows: auto 1fr;
    max-width: 1300px;
    max-height: 600px;
  }
`;

const TitleContainer = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
  
  @media (orientation: landscape) {
    align-items: flex-start;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const AlbumOut = styled.h3`
  text-align: center;
  margin-bottom: 10px;
`;

const AlbumLink = styled.a`
  color: ${PINK};
  text-decoration: underline;
`;

const LogoContainer = styled.div`
  z-index: 1;

  @media (orientation: landscape) {
    grid-row: 1 / span 2;
  }
`;

const PlayerContainer = styled.div`
  display: flex;  
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;

  @media (orientation: landscape) {
    align-items: flex-start;
  }
`;

export default class IndexPage extends Component {
  constructor(props) {
    super(props);

    this.container = React.createRef();
  }

  componentDidMount() {
    this.container.current.style.opacity = 1;
  }

  render() {
    return (
      <StyledLayout showFooter>
        <SEO />

        <Container ref={this.container}>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <TitleContainer>
            <Title className="title">Leslie Left</Title>
            <AlbumOut>Come on - <AlbumLink href="https://open.spotify.com/album/3wGtrJpPrWq4Nn1TQJIonc" target="_blank" rel="noopener noreferrer">EP OUT NOW!</AlbumLink></AlbumOut>
          </TitleContainer>

          <PlayerContainer>
            <PromoVideo embedCode="9LgS91uSi2I" />
          </PlayerContainer>
        </Container>
      </StyledLayout>
    );
  }
}

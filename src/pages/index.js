import React, { Component } from 'react';
import styled from 'styled-components';

import {
  YELLOW, PINK, MQ_TABLET, MQ_LAPTOP,
} from '../styles/variables';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Logo from '../components/logo';
import PromoVideo from '../components/promo-video';

const StyledLayout = styled(Layout)`
  background-color: ${YELLOW};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: 40% auto 1fr;
  justify-items: center;
  align-items: center;
  opacity: 0;

  max-width: 520px;
  max-height: 800px;
  margin: auto;

  @media (max-width: ${MQ_TABLET}px) and (orientation: landscape) {
    grid-template-columns: 50% 50%;
    grid-template-rows: auto 1fr;
    max-width: inherit;
  }

  @media (min-width: ${MQ_LAPTOP}px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 0.3fr auto 1fr 0.3fr;
    max-width: inherit;
  }

`;

const LogoContainer = styled.div`
  width: 100%;  
  height: 100%;

  @media (max-width: ${MQ_TABLET}px) and (orientation: landscape) {
    grid-row: 1 / span 2;
  }

  @media (min-width: ${MQ_LAPTOP}px) {
    grid-row: 1 / span 4;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  @media (max-width: ${MQ_TABLET}px) and (orientation: landscape) {
    grid-row-start: 1;
  }

  @media (min-width: ${MQ_LAPTOP}px) {
    grid-row-start: 2;
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
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  @media (max-width: ${MQ_TABLET}px) and (orientation: landscape) {
    grid-row-start: 2;
  }

  @media (min-width: ${MQ_LAPTOP}px) {
    grid-row-start: 3;
  }
`;

class IndexPage extends Component {
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
        <SEO title="Home" />

        <Container ref={this.container}>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <TextContainer>
            <Title className="title">Leslie Left</Title>
            <SubTitle>Come on - <AlbumLink href="https://open.spotify.com/artist" target="_blank" rel="noopener noreferrer">EP OUT NOW!</AlbumLink></SubTitle>
          </TextContainer>

          <PlayerContainer>
            <PromoVideo embedCode="NpEaa2P7qZI" />
          </PlayerContainer>
        </Container>
      </StyledLayout>
    );
  }
}

export default IndexPage;

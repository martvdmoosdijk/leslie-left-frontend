import React, { Component } from 'react';
import styled from 'styled-components';

import { YELLOW, MQ_TABLET, MQ_LAPTOP } from '../styles/variables';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Logo from '../components/logo';
import Player from '../components/player';

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
  margin: auto;

  @media (max-width: ${MQ_TABLET}px) and (orientation: landscape) {
    grid-template-columns: 50% 50%;
    grid-template-rows: auto 1fr;
    max-width: inherit;
  }

  @media (min-width: ${MQ_LAPTOP}px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr auto 1fr 1fr;
    max-width: inherit;
  }
`;

const Hamburger = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  height: 40px;
  cursor: pointer;
  padding: inherit;
  z-index: 2;

  @media (max-width: ${MQ_TABLET}px) and (orientation: landscape) {
    left: 0;
    right: auto;
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

const PlayerContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: ${MQ_TABLET}px) and (orientation: landscape) {
    grid-row-start: 2;
  }

  @media (min-width: ${MQ_LAPTOP}px) {
    grid-row-start: 3;
    // justify-self: flex-start;
    // max-width: 400px;
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
      <StyledLayout>
        <SEO title="Home" />

        <Hamburger>Menu placeholder</Hamburger>

        <Container ref={this.container}>
          <LogoContainer>
            <Logo />
          </LogoContainer>

          <TextContainer>
            <Title className="title">Leslie Left</Title>
            <h3>Yellow yellow, pink pink</h3>
          </TextContainer>

          <PlayerContainer>
            <Player />
          </PlayerContainer>
        </Container>
      </StyledLayout>
    );
  }
}

export default IndexPage;

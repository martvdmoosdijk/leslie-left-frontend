import React, { Component } from 'react';
import styled from 'styled-components';

import { YELLOW, MQ_TABLET } from '../styles/variables';
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

  @media (max-device-width: ${MQ_TABLET}px) and (orientation: landscape) {
    grid-template-columns: 50% 50%;
    grid-template-rows: auto 1fr;
  }
`;

// const Hamburger = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   width: 40px;
//   height: 40px;
//   background-color: black;
//   cursor: pointer;
// `;

const LogoContainer = styled.div`
  width: 100%;  
  height: 100%;

  @media (max-device-width: ${MQ_TABLET}px) and (orientation: landscape) {
    grid-row: 1 / span 2;
  }
`;

const TextContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

const PlayerContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-device-width: ${MQ_TABLET}px) and (orientation: landscape) {
    grid-column-start: 2;
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

        <Container ref={this.container}>
          {/* <Hamburger /> */}

          <LogoContainer>
            <Logo />
          </LogoContainer>

          <TextContainer>
            <h1 className="title">Leslie Left</h1>
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

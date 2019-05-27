import React, { Component } from 'react';
import styled from 'styled-components';

import { YELLOW } from '../styles/variables';
import Layout from '../components/layout';
import SEO from '../components/seo';
import Logo from '../components/logo';

const StyledLayout = styled(Layout)`
  background-color: ${YELLOW};
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  // padding-bottom: 20%;
`;

const Hamburger = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background-color: black;
  cursor: pointer;
`;

const LogoContainer = styled.div`
  width: 100%;  
  height: 45%;
`;

const TextContainer = styled.div`
  width: 100%;
  height: 55%;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  // justify-content: center;
  // align-items: flex-start;
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
        </Container>
      </StyledLayout>
    );
  }
}

export default IndexPage;

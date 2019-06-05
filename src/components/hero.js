import React, { Component } from 'react';
import styled from 'styled-components';
import Div100vh from 'react-div-100vh';
import anime from 'animejs/lib/anime.es';

import {
  FONT_FAMILY_LATO, TABLET_BP, LAPTOP_BP, isTablet,
} from '../styles/variables';
import HeroBackground from '../images/background.png';
import LeslieLeft from '../svgs/leslie-left';
import Mouse from '../svgs/mouse';
import SocialIcons from './social-icons';

const HeroBg = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;

  background-image: url(${HeroBackground});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  z-index: 0;
  overflow: hidden;

  // Background overlay
  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    background-color: #121212;
    opacity: 0.69;
  }

  // Transition
  :after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 200px;
    background: linear-gradient(180deg, rgba(18, 18, 18, 0) 0%, #121212 85%);
    z-index: -1;
  }
`;

const Menu = styled.nav`
  position: absolute;
  top: 20px;
  left: 15%;
  right: 15%;

  display: flex;
  justify-content: space-around;

  font-family: ${FONT_FAMILY_LATO};
  font-weight: bold;

  a {
    font-size: 130%;

    transition: transform 0.3s;
    :hover {
      transform: scale(1.15);
    }
  }

  @media (min-width: ${TABLET_BP}px) {
    top: 50%;
    bottom: 0;
    left: 0;
    right: auto;
    flex-direction: column;

    transform: translate(-5px, -50%);
    height: 90%;
    max-height: 1000px;

    a {
      font-size: 2.7vw;
      transform: rotate(-90deg);

      transition: transform 0.3s;
      :hover {
        transform: rotate(-90deg) scale(1.15);
      }
    }
  }

  @media (min-width: ${LAPTOP_BP}px) {
    transform: translate(-15px, -50%);
  }

  @media screen and (min-width: 1600px) {
    a {
      // (1600 / 100) * 2.7 = 43.2
      font-size: 43px;
    }
  }
`;

const Logo = styled(LeslieLeft)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 80%;

  @media (min-width: ${TABLET_BP}px) {
    left: 53%;
    width: 65%;
  }

  @media (min-width: ${LAPTOP_BP}px) {
    width: 60%;
  }
`;

const StyledMouse = styled(Mouse)`
  display: none;

  @media (min-width: ${TABLET_BP}px) {
    display: block;

    position: absolute;
    bottom: 20px;
    right: 20px;

    width: 35px;
    height: 35px;
    opacity: 0.8;
  }
`;

const StyledSocialIcons = styled(SocialIcons)`
  position: absolute;
  bottom: 10px;
  left: 10%;
  right: 10%;

  @media (min-width: ${TABLET_BP}px) {
    top: 15px;
    right: 15px;
    bottom: auto;
    left: auto;

    width: 40%;
    max-width: 400px;
  }

  @media (min-width: ${LAPTOP_BP}px) {
    width: 30%;
  }
`;

class HeroComponent extends Component {
  constructor(props) {
    super(props);

    this.logo = React.createRef();
    this.socialIcons = React.createRef();
    this.menuItems = React.createRef();
    this.mouseIcon = React.createRef();
  }

  getNestedChildren(ref) {
    return [...ref.children].reduce((result, child) => {
      result.push(...child.children);
      return result;
    }, []);
  }

  prepareIntroAnim() {
    this.logo.current.prepareIntroAnim();

    anime.set(this.socialIcons.current, { translateY: isTablet() ? -100 : 100 });
    anime.set(this.mouseIcon.current, { translateY: 100 });
    anime.set(this.getNestedChildren(this.menuItems.current), { translateY: -100 });
  }

  introAnim() {
    this.logo.current.introAnim();

    anime({
      targets: this.socialIcons.current,
      translateY: [isTablet() ? -100 : 100, 0],
      delay: 1800,
    });

    anime({
      targets: this.mouseIcon.current,
      translateY: [100, 0],
      delay: 2100,
    });

    anime({
      targets: this.getNestedChildren(this.menuItems.current),
      translateY: [-100, 0],
      delay: anime.stagger(150, { start: 1300 }),
    });

    anime({
      targets: this.mouseIcon.current.children[1],
      loop: true,
      translateY: [0, 50],
      duration: 800,
      delay: 1000,
      direction: 'alternate',
    });
  }

  render() {
    return (
      <Div100vh>
        <HeroBg>

          <Menu ref={this.menuItems}>
            <a href="#about"><div>ABOUT</div></a>
            <a href="#music"><div>MUSIC</div></a>
            <a href="#tour"><div>TOUR</div></a>
          </Menu>

          <Logo ref={this.logo} />

          <StyledSocialIcons ref={this.socialIcons} />
          <StyledMouse ref={this.mouseIcon} />
        </HeroBg>
      </Div100vh>
    );
  }
}

export default HeroComponent;

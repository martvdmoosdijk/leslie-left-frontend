import React, { Component } from 'react';
import styled from 'styled-components';

import {
  TABLET_BP, LAPTOP_BP,
} from '../styles/variables';

import ExternalLink from './external-link';
import MailIcon from '../svgs/mail';
import InstagramIcon from '../svgs/instagram';
import FacebookIcon from '../svgs/facebook';
import SpotifyIcon from '../svgs/spotify';
import TwitterIcon from '../svgs/twitter';
import YoutubeIcon from '../svgs/youtube';

const SocialIcons = styled.ul`
  display: flex;
  justify-content: space-around;

  height: 50px;

  svg {
    fill: white;
    height: 100%;

    transition: transform 0.3s;
    :hover {
      transform: scale(1.3);
    }
  }

  @media (min-width: ${TABLET_BP}px) {
    width: 100%;
    max-width: 400px;
  }

  @media (min-width: ${LAPTOP_BP}px) {
    width: 30%;
  }
`;

class SocialIconsComponent extends Component {
  render() {
    const { className, innerRef } = this.props;

    return (
      <SocialIcons className={className} ref={innerRef}>
        <ExternalLink href="https://youtube.com/channel/UCO9py8g4_B53XIJaR-zuE0w">
          <YoutubeIcon />
        </ExternalLink>

        <ExternalLink href="https://open.spotify.com/artist/3CiEEdYaA6HIBidseYDeBI">
          <SpotifyIcon />
        </ExternalLink>

        <ExternalLink href="https://www.facebook.com/leslie.left.sthlm/">
          <FacebookIcon />
        </ExternalLink>

        <ExternalLink href="https://twitter.com/leslie_left">
          <TwitterIcon />
        </ExternalLink>

        <ExternalLink href="https://www.instagram.com/leslie.left/">
          <InstagramIcon />
        </ExternalLink>

        <ExternalLink href="mailto:leslieleftmusic@gmail.com">
          <MailIcon />
        </ExternalLink>
      </SocialIcons>
    );
  }
}

export default React.forwardRef((props, ref) => (
  <SocialIconsComponent
    innerRef={ref}
    // eslint-disable-next-line react/jsx-props-no-spreading
    {...props}
  />
));

import React, { Component } from 'react';
import styled from 'styled-components';
import anime from 'animejs/lib/anime.es';

import { PRIMARY_COLOR, TABLET_BP } from '../styles/variables';
import SEO from '../components/seo';
import Hero from '../components/hero';
import SocialIcons from '../components/social-icons';
import Footer from '../components/footer';
import VideoSection from '../components/video-section';
import AboutSection from '../components/about-section';
import MusicSection from '../components/music-section';
import TourSection from '../components/tour-section';
import PhotosSection from '../components/photos-section';
import ComeOnEp from '../images/come-on-ep-cover.png';

const Page = styled.div`
  height: 100%;
  background-color: #121212;
  color: ${PRIMARY_COLOR};

  opacity: 0;
`;

const StyledSocialIcons = styled(SocialIcons)`
  margin: 0 auto 20px auto;
  max-width: 320px;

  @media (min-width: ${TABLET_BP}px) {
    margin: 0 auto 30px auto;
  }
`;

class Homepage extends Component {
  constructor(props) {
    super(props);

    this.page = React.createRef();
    this.hero = React.createRef();
  }

  componentDidMount() {
    this.introAnim();
    this.hero.current.prepareIntroAnim();
    setTimeout(() => this.hero.current.introAnim(), 800);
  }

  introAnim() {
    anime({
      targets: this.page.current,
      duration: 2000,
      easing: 'easeInOutExpo',
      opacity: [0, 1],
    });
  }

  render() {
    return (
      <Page ref={this.page}>
        <SEO />

        <Hero ref={this.hero} />

        <VideoSection title="Come on" embedCode="9LgS91uSi2I" />
        <AboutSection anchor="about" />
        <MusicSection
          anchor="music"
          music={[
            { name: 'Come on', image: ComeOnEp, link: 'https://open.spotify.com/track/3TmEPTCRZtCNHkKd1RKyl7' },
            { name: 'It\'s Personal', image: ComeOnEp, link: 'https://open.spotify.com/track/4H8oaEc4zrR15Ub0peiPOF' },
            { name: 'I Do', image: ComeOnEp, link: 'https://open.spotify.com/track/20LVI1ZvJVXu15It8ewANK' },
          ]}
        />
        <TourSection
          anchor="tour"
          tours={[
            { date: '1 April 2020', venue: 'Snotty Seaside', location: 'Stockholm, Sweden' },
            {
              date: '19 June 2019', venue: 'Ö2', location: 'Stockholm, Sweden', isPast: true,
            },
          ]}
        />
        <PhotosSection />

        <StyledSocialIcons />
        <Footer />

      </Page>
    );
  }
}

export default Homepage;

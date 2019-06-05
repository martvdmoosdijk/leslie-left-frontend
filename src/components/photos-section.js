import React, { Component } from 'react';
import styled from 'styled-components';

import { TABLET_BP, LAPTOP_BP } from '../styles/variables';
import Section from './section';

const Photos = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 10px;
  grid-row-gap: 10px;

  @media (min-width: ${TABLET_BP}px) {
    grid-column-gap: 40px;
    grid-row-gap: 40px;
  }

  @media (min-width: ${LAPTOP_BP}px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

const Photo = styled.img`
  width: 100%;

  transition: transform 0.3s;
  :hover {
    transform: scale(1.05);
  }
`;

class PhotosSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      photos: [],
    };
  }

  async componentDidMount() {
    this.setState({
      photos: await this.getInstagramPhotos(),
    });
  }

  async getInstagramPhotos() {
    try {
      const res = await fetch('https://www.instagram.com/leslie.left/');
      const body = await res.text();

      const rawJson = body.match(/<script type="text\/javascript">window\._sharedData = (.*)<\/script>/)[1].slice(0, -1);
      const json = JSON.parse(rawJson);
      const { edges } = json.entry_data.ProfilePage[0].graphql.user.edge_owner_to_timeline_media;

      return edges
        .filter((e) => e.node.__typename === 'GraphImage')
        .map((e) => ({
          url: e.node.thumbnail_src,
          instagram: `https://www.instagram.com/p/${e.node.shortcode}/`,
        }));
    } catch (e) {
      console.error(`Unable to retrieve instagram photos. Reason: ${e.toString()}`);
    }

    return [];
  }

  render() {
    const { photos } = this.state;
    const filteredPhotos = [...photos].splice(0, 5);
    return (
      <Section>
        <h1>Instagram</h1>
        <Photos>
          {filteredPhotos.map((photo) => (
            <a key={photo.instagram} href={photo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Leslie Left @ Instagram">
              <Photo src={photo.url} alt="Leslie Left instagram" />
            </a>
          ))}
        </Photos>
      </Section>
    );
  }
}

export default PhotosSection;

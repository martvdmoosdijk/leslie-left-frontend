import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import { TABLET_BP } from '../styles/variables';
import Section from './section';

const MusicWrapper = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 15px;

  @media (min-width: ${TABLET_BP}px) {
    grid-gap: 25px;
  }
`;

const MusicItem = styled.li`
  > img {
    width: 100%;

    transition: transform 0.3s;
    :hover {
      transform: scale(1.05);
    }
  }

  > span {
    text-align: center;
    display: block;
    margin-top: 10px;
  }
`;

const MusicSection = ({ music, anchor }) => (
  <Section anchor={anchor}>
    <h1>Music</h1>

    <MusicWrapper>
      {music.map((m) => (
        <a key={m.name} href={m.link} target="_blank" rel="noopener noreferrer" aria-label={m.name}>
          <MusicItem>
            <img src={m.image} alt={m.name} />
            <span>{m.name}</span>
          </MusicItem>
        </a>
      ))}
    </MusicWrapper>
  </Section>
);

MusicSection.defaultProps = {
  anchor: '',
  music: [],
};

MusicSection.propTypes = {
  anchor: propTypes.string,
  music: propTypes.arrayOf(propTypes.shape({
    name: propTypes.string,
    image: propTypes.string,
    link: propTypes.string,
  })),
};

export default MusicSection;

import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { PINK, MQ_LAPTOP, GREY_LIGHT } from '../styles/variables';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  color: white;
`;

const Display = styled.div`
  width: 100%;
  background-color: black;
  color: ${PINK};
  padding: 12px 20px;
  border-radius: 6px;

  display: grid;
  grid-template-columns: 1fr auto;
  grid-row-gap: 5px;
`;

const SongTitle = styled.h2`
  font-weight: normal;
`;

const PlayPauseIcon = styled.svg`
  margin-left: 20px;
  width: 25px;
  grid-column-start: 2;
  grid-row-start: 1;
  grid-row-end: 3;

  justify-self: center;
  align-self: center;
`;

const SeekBar = styled.div`
  width: 100%;
      
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const ProgressBar = styled.div`
  background-color: ${PINK};
  flex-grow: 1;
  height: 8px;
`;

const ProgressTime = styled.div`
  padding-left: 10px;
  font-size: 70%;
`;

const Queue = styled.div`
  width: 95%;
  background-color: ${GREY_LIGHT};
  border-bottom-right-radius: 6px;
  border-bottom-left-radius: 6px;
  list-style: none;
  padding: 10px;
  color: white;
`;

const Song = styled.div`
  position: relative;
  padding: 8px 8px;
  cursor: pointer;
  
  background-color: ${props => (props.active ? 'rgba(60, 60, 60, 0.61)' : 'inherit')};
  border-radius: ${props => (props.active ? '10px' : '0')};
`;

class Player extends Component {
  constructor(props) {
    super(props);

    const { songs } = this.props;
    const activeSong = {
      ...songs[0],
      duration: '00:00',
      timestamp: '00:00',
    };

    this.state = {
      isPlaying: false,
      activeSong,
    };

    this.togglePlayPause = this.togglePlayPause.bind(this);
    this.audio = undefined;
  }

  togglePlayPause() {
    const { isPlaying } = this.state;

    if (isPlaying) {
      this.audio.pause();
    } else {
      this.audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/examples/t-rex-roar.mp3');
      this.audio.play();

      this.audio.addEventListener('loadeddata', () => {
        const duration = this.audio.duration;
        console.log(duration);
      });
    }

    // TODO Set song
    this.setState({ isPlaying: !isPlaying });
  }

  render() {
    const { isPlaying, activeSong } = this.state;
    const { songs } = this.props;

    return (
      <Container>
        <Display>
          <SongTitle>{ activeSong.title }</SongTitle>
          <PlayPauseIcon viewBox="0 0 448 512" onClick={this.togglePlayPause}>
            { isPlaying
              ? <path fill={PINK} d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
              : <path fill={PINK} d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            }
          </PlayPauseIcon>
          <SeekBar>
            <ProgressBar />
            <ProgressTime>{ activeSong.timestamp } / { activeSong.duration}</ProgressTime>
          </SeekBar>
        </Display>
        <Queue>
          { songs.map(song => <Song key={song.title} active={song.title === activeSong.title}>{ song.title }</Song>)}
        </Queue>
      </Container>
    );
  }
}

Player.defaultProps = {
  songs: [
    { title: 'Come on' },
    { title: 'It\'s personal' },
    { title: 'I do' },
  ],
};

Player.propTypes = {
  songs: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
  })),
};

export default Player;

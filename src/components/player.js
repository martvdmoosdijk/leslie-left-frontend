import React, { Component } from 'react';
import styled from 'styled-components';

import { PINK } from '../styles/variables';

const Container = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Tracks = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Track = styled.div`
  padding: 1px 0;
  font-family: 'Righteous', cursive;
  font-size: ${props => (props.active ? '130%' : '100%')};
  font-weight: ${props => (props.active ? 'bold' : 'normal')};
  color: ${props => (props.active ? PINK : 'inherit')};
  cursor: pointer;
`;

const Controls = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  margin-left: 5px;
  margin-top: 25px;
  margin-bottom: 18px;
`;

const Control = styled.svg`
  margin: 0 10px;
  cursor: pointer;
  width: 20px;
`;

const SeekBar = styled.div`
  width: 60%;
  height: 5px;
  background-color: red;
  opacity: ${props => (props.visible ? 1 : 0)};
  transition: opacity 0.2s;
`;

class Player extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSeekBar: false,
      isPlaying: false,
    };

    this.togglePlayPause = this.togglePlayPause.bind(this);
  }

  togglePlayPause() {
    const { isPlaying } = this.state;
    this.setState({ isPlaying: !isPlaying, showSeekBar: true });
  }

  render() {
    const { isPlaying, showSeekBar } = this.state;

    return (
      <Container>
        <Tracks>
          <Track>Its personal</Track>
          <Track active>Come on</Track>
          <Track>I do</Track>
        </Tracks>

        <Controls>
          <Control xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M64 468V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12v176.4l195.5-181C352.1 22.3 384 36.6 384 64v384c0 27.4-31.9 41.7-52.5 24.6L136 292.7V468c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12z" />
          </Control>
          { isPlaying && (
            <Control xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={this.togglePlayPause}>
              <path fill="currentColor" d="M144 479H48c-26.5 0-48-21.5-48-48V79c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v352c0 26.5-21.5 48-48 48zm304-48V79c0-26.5-21.5-48-48-48h-96c-26.5 0-48 21.5-48 48v352c0 26.5 21.5 48 48 48h96c26.5 0 48-21.5 48-48z" />
            </Control>
          )}
          { !isPlaying && (
            <Control xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" onClick={this.togglePlayPause}>
              <path fill="black" d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z" />
            </Control>
          )}
          <Control xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
            <path fill="currentColor" d="M384 44v424c0 6.6-5.4 12-12 12h-48c-6.6 0-12-5.4-12-12V291.6l-195.5 181C95.9 489.7 64 475.4 64 448V64c0-27.4 31.9-41.7 52.5-24.6L312 219.3V44c0-6.6 5.4-12 12-12h48c6.6 0 12 5.4 12 12z" />
          </Control>
        </Controls>

        <SeekBar visible={showSeekBar} />

      </Container>
    );
  }
}

// https://fontawesome.com/icons/play?style=solid
// https://fontawesome.com/icons/pause?style=solid
// https://fontawesome.com/icons/caret-right?style=solid
// https://fontawesome.com/icons/caret-left?style=solid

export default Player;

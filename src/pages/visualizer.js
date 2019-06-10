import React, { Component } from 'react';
import styled from 'styled-components';

import Logo from '../components/logo';
import { YELLOW } from '../styles/variables';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${YELLOW};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
position: fixed;
  top: 66%;
  left: 30%;
  transform: translateX(-50%)
`;

const Title = styled.h1`
  
`;

const SubTitle = styled.h3`
`;

export default class Visualizer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,
    };

    this.audioRef = React.createRef();
    this.logo = React.createRef();
    this.frequencyData = undefined;

    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.getFreq = this.getFreq.bind(this);
  }

  getFreq() {
    // if (process.env.NODE_ENV === 'development') {
    //   setTimeout(() => {
    //     requestAnimationFrame(this.getFreq.bind(this));
    //   }, 500);
    // } else {
    requestAnimationFrame(this.getFreq.bind(this));
    // }

    this.analyser.getByteFrequencyData(this.frequencyData);
    const { cubes, scaleCube } = this.logo.current;

    const samples = 81; // Dividable by 1024
    for (let i = 0; i < samples; i++) {
      const sampleSize = (this.frequencyData.length / samples);
      const start = sampleSize * i;
      const sample = this.frequencyData.slice(start, start + sampleSize);
      let count = sample.reduce((prev, cur) => prev + cur, 0);

      if (i === 0) {
        count /= 1.5;
      } else if (i === 1) {
        count /= 1.2;
      }

      const scale = count / 1600;
      // console.log(`Sample ${i} - ${scale} - ${count}`);

      const x = i % 9;
      const z = Math.floor(i / 9);
      scaleCube(cubes[x - 4][z - 4].el, 100, scale > 0 ? scale : 0.0001);
    }
  }

  play() {
    console.log('Play');
    const audio = this.audioRef.current;
    audio.play();

    if (!this.analyser) {
      const audioCtx = new AudioContext();
      const audioSrc = audioCtx.createMediaElementSource(audio);
      this.analyser = audioCtx.createAnalyser();
      audioSrc.connect(this.analyser);
      audioSrc.connect(audioCtx.destination);

      const bufferLength = this.analyser.frequencyBinCount;
      this.frequencyData = new Uint8Array(bufferLength);

      // setTimeout(this.getFreq, 1000);
      this.getFreq();
    }
  }

  pause() {
    const audio = this.audioRef.current;
    audio.pause();
  }

  render() {
    const { isPlaying } = this.state;
    return (
      <Container>
        <Logo ref={this.logo} />
        {/* <audio id="music" src="/sample.mp3" ref={this.audioRef} /> */}
        <audio id="music" src="/comeon.wav" ref={this.audioRef} />
        <button type="submit" onClick={this.play}>Play</button>
        <button type="submit" onClick={this.pause}>Pause</button>

        <TitleContainer>
          <Title className="title">Leslie Left</Title>
          <SubTitle>EP / Come on - OUT SOON!</SubTitle>
        </TitleContainer>

      </Container>
    );
  }
}

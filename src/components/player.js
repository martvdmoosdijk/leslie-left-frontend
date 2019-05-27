import React from 'react';
import styled from 'styled-components';

import { PINK, YELLOW } from '../styles/variables';

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

  margin-top: 25px;
`;

const Control = styled.div`
  margin: 0 10px;
  cursor: pointer;
`;

const Player = () => (
  <Container>
    <Tracks>
      <Track>Its personal</Track>
      <Track active>Come on</Track>
      <Track>I do</Track>
    </Tracks>

    <Controls>
      <Control>Prev</Control>
      <Control>PlayPause</Control>
      <Control>Next</Control>
    </Controls>
  </Container>
);

// https://fontawesome.com/icons/play?style=solid
// https://fontawesome.com/icons/pause?style=solid
// https://fontawesome.com/icons/caret-right?style=solid
// https://fontawesome.com/icons/caret-left?style=solid

export default Player;

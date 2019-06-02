import React from 'react';
import styled from 'styled-components';

import { PINK } from '../styles/variables';

const Title = styled.h2`
  margin-bottom: 10px;
  color: ${PINK};
`;

const AspectRatio = styled.div`
  width: 100%;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  position: relative;
  margin-bottom: ${props => (props.hasTitle ? '20px' : '0')};
`;

const YoutubeFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export default ({ title, embedCode }) => (
  <>
    { title && (
      <Title>Come on</Title>
    )}
    <AspectRatio hasTitle={!!title}>
      <YoutubeFrame
        title="Promo Video"
        type="text/html"
        src={`http://www.youtube.com/embed/${embedCode}?modestbranding=1`}
        frameBorder="0"
        allowFullScreen
      />
    </AspectRatio>
  </>
);

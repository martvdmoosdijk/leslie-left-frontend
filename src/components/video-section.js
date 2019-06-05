import React from 'react';
import propTypes from 'prop-types';

import Section from './section';
import Youtube from './youtube';

const VideoSection = ({ title, embedCode }) => (
  <Section>
    <h1>{title}</h1>
    <Youtube embedCode={embedCode} />
  </Section>
);

VideoSection.propTypes = {
  title: propTypes.string.isRequired,
  embedCode: propTypes.string.isRequired,
};

export default VideoSection;

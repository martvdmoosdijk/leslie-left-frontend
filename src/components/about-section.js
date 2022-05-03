import React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

import Section from './section';

const StyledSection = styled(Section)`
  > p {
    margin-bottom: 20px;

    :last-of-type {
      margin-bottom: 0px;
    }
  }
`;

function AboutSection({ anchor }) {
  return (
    <StyledSection anchor={anchor}>
      <h1>About</h1>
      <p>Leslie Left is an indie group with influences from bands like Joy Division, The Cure and David Bowie. With their personal songs they have carved out their own space on the vibrating alternative music scene in Stockholm.</p>
      <p>Lars Jansson’s voice spans from light flowing falsetto to dark suggestive tones and adds to the group’s charismatic sound. The band underwent a number of line-up changes before settling on the current setting, Lars Jansson (vocals), Mart van de Moosdijk (guitar), Mia Bohlin (bass) and Anders Jonson (drums)</p>
    </StyledSection>
  );
}

AboutSection.defaultProps = {
  anchor: '',
};

AboutSection.propTypes = {
  anchor: propTypes.string,
};

export default AboutSection;

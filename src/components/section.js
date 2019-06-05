import React from 'react';
import styled from 'styled-components';

import { TABLET_BP } from '../styles/variables';
import Container from './container';
import Anchor from './anchor';

const Section = styled(Container)`
  padding-bottom: 60px;
  position: relative;

  > h1 {
    text-align: center;
    margin-bottom: 30px;
  }

  :first-of-type {
    margin-top: 40px;
  }

  @media (min-width: ${TABLET_BP}px) {
    padding-bottom: 110px;

    > h1 {
      text-align: center;
      margin-bottom: 40px;
    }

    :first-of-type {
      margin-top: 80px;
    }
  }
`;

export default ({ className, children, anchor }) => (
  <Section className={className}>
    {anchor ? <Anchor id={anchor} /> : null}
    {children}
  </Section>
);

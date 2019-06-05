import React from 'react';
import styled from 'styled-components';

import { TABLET_BP, BACKGROUND_COLOR } from '../styles/variables';
import Link from './external-link';

const Footer = styled.div`
  background-color: ${BACKGROUND_COLOR};
  padding: 20px;
  color: black;
  text-align: center;

  @media (min-width: ${TABLET_BP}px) {
    padding: 30px;
  }
`;

export default () => (
  <Footer>
    © 2020 Leslie Left | Developed by <Link href="https://www.linkedin.com/in/mart-van-de-moosdijk-661023a3/">Mart van de Moosdijk</Link>
  </Footer>
);

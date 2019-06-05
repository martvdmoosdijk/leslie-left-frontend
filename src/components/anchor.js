import React from 'react';
import styled from 'styled-components';

const Anchor = styled.div`
  position: absolute;
  top: -20px;
`;

export default ({ id }) => (
  <Anchor id={id} />
);

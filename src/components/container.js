import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { TABLET_BP } from '../styles/variables';

const Container = styled.section`
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;

  @media (min-width: ${TABLET_BP}px) {
    max-width: 1600px;
    margin: 0 auto;
    padding-left: 60px;
    padding-right: 60px;
  }
`;

const ContainerComponent = ({ className, children }) => (
  <Container className={className}>
    { children }
  </Container>
);

ContainerComponent.defaultProps = {
  className: '',
  children: [],
};

ContainerComponent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

export default ContainerComponent;

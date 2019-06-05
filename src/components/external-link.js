import React from 'react';
import propTypes from 'prop-types';

const ExternalLink = ({ children, href, desc }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" aria-label={desc}>
    {children}
  </a>
);

ExternalLink.defaultProps = {
  children: [],
  href: '',
  desc: '',
};

ExternalLink.propTypes = {
  children: propTypes.node,
  href: propTypes.string,
  desc: propTypes.string,
};

export default ExternalLink;

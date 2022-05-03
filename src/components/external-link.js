import React from 'react';
import propTypes from 'prop-types';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

function ExternalLink({ children, href, desc }) {
  return (
    <OutboundLink href={href} target="_blank" rel="noopener noreferrer" aria-label={desc}>
      {children}
    </OutboundLink>
  );
}

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

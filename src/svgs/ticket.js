import React from 'react';
import PropTypes from 'prop-types';

function Ticket({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 175.166 66"
    >
      <g>
        <rect fill="#FF8650" height="66.648" width="175.166" y="0" x="0" />
        <rect fill="#D97143" height="66.648" width="15.204" y="0" x="0" />
        <rect fill="#FFC04A" height="15.381" width="65.793" y="6.836" x="26.489" />
        <rect fill="#555A53" height="3.846" width="100.826" y="27.668" x="54.686" />
        <rect fill="#555A53" height="3.846" width="100.826" y="34.338" x="54.686" />
        <rect fill="#555A53" height="3.846" width="100.826" y="41.01" x="54.686" />
        <rect fill="#E85C58" height="10.824" width="27.83" y="50.004" x="35.594" />
        <circle fill="#48CEAA" r="9.887" cy="13.996" cx="155.446" />
      </g>
    </svg>
  );
}

Ticket.defaultProps = {
  className: '',
};

Ticket.propTypes = {
  className: PropTypes.string,
};

export default Ticket;

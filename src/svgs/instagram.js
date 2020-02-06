import React from 'react';
import PropTypes from 'prop-types';

const Instagram = ({ className }) => (
  <svg className={className} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M18.2327 25H6.76726C3.03573 25 0 21.9643 0 18.2327V6.76712C0 3.03578 3.03573 5.14984e-05 6.76726 5.14984e-05H18.2329C21.9642 5.14984e-05 24.9999 3.03578 24.9999 6.76712V18.2327C24.9999 21.9643 21.9642 25 18.2327 25V25ZM23.5343 6.76712C23.5343 3.84392 21.1561 1.46565 18.2327 1.46565H6.76726C3.84387 1.46565 1.4656 3.84392 1.4656 6.76712V18.2327C1.4656 21.1561 3.84387 23.5344 6.76726 23.5344H18.2329C21.1561 23.5344 23.5343 21.1561 23.5343 18.2327V6.76712Z" fill="white" />
    <path d="M12.5 19.3358C8.73068 19.3358 5.66425 16.2693 5.66425 12.5C5.66425 8.73072 8.73068 5.66429 12.5 5.66429C16.2693 5.66429 19.3357 8.73072 19.3357 12.5C19.3357 16.2693 16.2693 19.3358 12.5 19.3358ZM12.5 7.12989C9.53902 7.12989 7.12985 9.53887 7.12985 12.5C7.12985 15.461 9.53902 17.8702 12.5 17.8702C15.4611 17.8702 17.8701 15.461 17.8701 12.5C17.8701 9.53887 15.4611 7.12989 12.5 7.12989Z" fill="white" />
    <path d="M19.4992 21.7634C18.3853 21.7634 17.4793 20.8572 17.4793 19.7435C17.4793 18.6297 18.3853 17.7235 19.4992 17.7235C20.6131 17.7235 21.5193 18.6297 21.5193 19.7435C21.5193 20.8574 20.6131 21.7634 19.4992 21.7634ZM19.4992 19.1893C19.1936 19.1893 18.9449 19.438 18.9449 19.7435C18.9449 20.0493 19.1936 20.2978 19.4992 20.2978C19.8049 20.2978 20.0537 20.0493 20.0537 19.7435C20.0537 19.438 19.8049 19.1893 19.4992 19.1893Z" fill="white" />
  </svg>
);

Instagram.defaultProps = {
  className: '',
};

Instagram.propTypes = {
  className: PropTypes.string,
};

export default Instagram;
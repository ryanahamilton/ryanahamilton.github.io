import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { icons } from './icons'
import './Icon.css'

function Icon({ accessibilityLabel, className, icon, size }) {
  const classes = classNames('icon', className);
  const svgSize = size || 24;
  const ariaHidden = accessibilityLabel === '' ? true : null;
  const path = icons[icon];

  return (
    <svg
      className={classes}
      viewBox="0 0 24 24"
      width={svgSize}
      height={svgSize}
      aria-hidden={ariaHidden}
      aria-label={accessibilityLabel}
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d={path} />
    </svg>
  );
}

Icon.defaultProps = {};

Icon.propTypes = {
  accessibilityLabel: PropTypes.string,
  className: PropTypes.string,
  icon: PropTypes.string.isRequired,
  size: PropTypes.string,
};

export default Icon

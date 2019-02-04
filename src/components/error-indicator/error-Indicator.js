import React from 'react';

import './error-indicator.scss';

import icon from './death-star.png';

const ErrorIndicator = () => {
  return (
    <div className="error-indicator">
      <img className="error-icon" src={icon} alt="death-star icon" />
      <span className="boom">BOOM!</span>
      <span>something has gone terribly wrong</span>
      <span>(but we`ve already sent droids to fix it)</span>
    </div>
  )
}

export default ErrorIndicator;
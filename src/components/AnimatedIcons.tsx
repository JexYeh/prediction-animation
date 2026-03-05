import React from 'react';
import './AnimatedIcons.css';

export const SuccessIcon: React.FC = () => {
  return (
    <div className="icon-wrapper">
      <div className="circle-outer-success"></div>
      <div className="circle-inner-success"></div>
      <svg className="checkmark" viewBox="0 0 24 24" fill="none">
        <path
          d="M6 12L10 16L18 8"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="checkmark-path"
        />
      </svg>
    </div>
  );
};

export const ErrorIcon: React.FC = () => {
  return (
    <div className="icon-wrapper">
      <div className="circle-outer-error"></div>
      <div className="circle-inner-error"></div>
      <svg className="error-cross" viewBox="0 0 8 8" fill="none">
        <path
          d="M1 1L7 7M7 1L1 7"
          stroke="white"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

export const IconDemo: React.FC = () => {
  return (
    <div className="icon-container">
      <SuccessIcon />
      <ErrorIcon />
    </div>
  );
};

import React from 'react';
import './index.scss';

export default function Spinner({ center, size, relativeCenter = false }) {
  let wrapperIndicator = 'wrapper';
  let classIndicator = 'spinner';

  if (center) {
    wrapperIndicator = `${wrapperIndicator}_center`;
  }
  if (relativeCenter) {
    wrapperIndicator = `${wrapperIndicator}_relative--center`;
  }

  if (size) {
    classIndicator = `${classIndicator}--${size}`;
  }

  return (
    <div className={wrapperIndicator}>
      <div className={classIndicator} />
    </div>
  );
}

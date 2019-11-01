import React from 'react';

import SpinnerStyles from './SpinnerStyles';

const Spinner = ({ spacing }) => {

  return(
    <SpinnerStyles spacing={spacing}>
      <div className="spinner"></div>
    </SpinnerStyles>
  )
}

export default Spinner;

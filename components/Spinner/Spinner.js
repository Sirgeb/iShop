import React from 'react';

import SpinnerStyles from './SpinnerStyles';

const Spinner = ({ spacing, hide }) => {

  return(
    <SpinnerStyles spacing={spacing} hide={hide}>
      <div className="spinner"></div>
    </SpinnerStyles>
  )
}

export default Spinner;

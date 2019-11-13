import React from 'react';

import SigninAuth from '../components/Signin/SigninAuth';
import ManageComponent from '../components/Manage/Manage';

const Manage = () => {

  return (
    <SigninAuth>
      <ManageComponent />
    </SigninAuth>
  )
}

export default Manage;

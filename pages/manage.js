import React from 'react';

import SigninAuth from '../components/Signin/SigninAuth';
import ManageComponent from '../components/Manage/Manage';

const Manage = ({ query }) => {

  return (
    <SigninAuth>
      <ManageComponent page={parseFloat(query.page) || 1}/>
    </SigninAuth>
  )
}

export default Manage;

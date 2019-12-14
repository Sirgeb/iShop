import React from 'react';

import UpdateItem from '../components/UpdateItem/updateItem';
import SigninAuth from '../components/Signin/SigninAuth';

const update = props => (
  <SigninAuth>
    <UpdateItem id={props.query.id} />
  </SigninAuth>
)

export default update;

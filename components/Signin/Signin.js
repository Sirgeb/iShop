import React from 'react';
import Link from 'next/link';

import Form from '../styles/Form';
import PageInfo from '../PageInfo/PageInfo';
import { Center } from './SigninStyles';

const Signin = () => {

  return (  
    <>
    <PageInfo message1="Sign in" message2="" />

    <Form autoComplete="off">
      <input type="email" id="email"/>
      <label htmlFor="email">Email</label>

      <div className="divider"></div>

      <input type="password" id="password"/>
      <label htmlFor="password">Password</label>

      <div className="divider"></div>

      <Center>
        <button type="submit">Login</button> 
        <p>Don't have an account?&nbsp;
          <Link href="/signup">
            <a>Sign up</a>
          </Link>
        </p>
      </Center>
    </Form>

    </>
  )
}

export default Signin;

import React from 'react';
import Link from 'next/link';

import Form from '../styles/Form';
import PageInfo from '../PageInfo/PageInfo';
import { Center } from './SignupStyles';

const Signup = () => {

  return (  
    <>
    <PageInfo message1="Sign up" message2="" />

    <Form autoComplete="off">
    <input type="text" id="username"/>
      <label htmlFor="username">Username</label>

      <div className="divider"></div>

      <input type="email" id="email"/>
      <label htmlFor="email">Email</label>

      <div className="divider"></div>

      <input type="password" id="password"/>
      <label htmlFor="password">Password</label>

      <div className="divider"></div>

      <Center>
        <button type="submit">Sign up</button> 
        <p>Already have an account?&nbsp;
          <Link href="/signin">
            <a>Sign in</a>
          </Link>
        </p>
      </Center>
    </Form>

    </>
  )
}

export default Signup;

import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import Link from 'next/link';
import Router from 'next/router';
import gql from 'graphql-tag';

import { CURRENT_USER_QUERY } from '../User/User';
import Form from '../styles/Form';
import PageInfo from '../PageInfo/PageInfo';
import { Center } from './SignupStyles';
import Spinner from '../Spinner/Spinner';
import formatError from '../../lib/formatError';

const SIGNUP_MUTATION = gql`
  mutation SIGNUP_MUTATION($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email,  password: $password) {
      id
      username
      email 
    }
  }
`;

const INITIAL_STATE = {
  username: "",
  email: "",
  password: ""
}

const Signup = () => {

  const [user, setUser] = useState(INITIAL_STATE);

  function handleChange(event) {
    const { value, name } = event.target;
    setUser((prevState) => ({
      ...prevState,
      [name]: value
    }));
  }

  async function handleSubmit(event, signup) {
    event.preventDefault();
    await signup({ variables: { ...user }})
    setUser(INITIAL_STATE);
    Router.push({ pathname: '/' });
  }

  return (  
    <Mutation 
      mutation={SIGNUP_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY}]}
    >
      {
        (signup, { data, loading, error }) => {

          if (loading) return (
            <>
              <PageInfo message1="Signing up..." />
              <Spinner />
            </>
          );
          
          return (
            <>
            <PageInfo message1="Sign up" message2={formatError(error && error.message)} />
              <Form autoComplete="off" method="post" onSubmit={(event) => handleSubmit(event, signup)}>
                <input 
                  type="text" 
                  id="username"
                  name="username"
                  value={user.username}
                  onChange={handleChange}
                />
                <label htmlFor="username">Username</label>
          
                <div className="divider"></div>
          
                <input 
                  type="email" 
                  name="email"
                  value={user.email}
                  id="email"
                  onChange={handleChange}
                />
                <label htmlFor="email">Email</label>
          
                <div className="divider"></div>
          
                <input 
                  type="password" 
                  name="password"
                  value={user.password}
                  id="password"
                  onChange={handleChange}
                />
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
      }

    </Mutation>
  )
}

export default Signup;

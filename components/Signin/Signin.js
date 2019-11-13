import React, { useState } from 'react';
import { Mutation } from 'react-apollo';
import Router from 'next/router';
import gql from 'graphql-tag';
import Link from 'next/link';
import { CURRENT_USER_QUERY } from '../User/User';

import Form from '../styles/Form';
import PageInfo from '../PageInfo/PageInfo';
import { Center } from './SigninStyles';

const SIGN_IN_MUTATION = gql`
  mutation SIGN_IN_MUTATION($email: String!, $password: String!) {
    signin(email: $email, password: $password) {
      id
    }
  }
`;

const INITIAL_STATE = {
  email: "",
  password: ""
};

const authMessage = {
  wishlist: "To view wishlist",
  cart: "To view cart",
  orders: "To view orders",
  manage: "To manage Items in store",
  add: "To add an item",
}

const Signin = ({ pathname }) => {
  const [user, setUser] = useState(INITIAL_STATE);

  function handleChange(event) {
    const { name, value } = event.target;
    setUser((prevState) => ({...prevState, [name]: value}));
  }

  async function handleSubmit(event, signin) {
    event.preventDefault();
    await signin({
      variables: { ...user}
    });
    setUser(INITIAL_STATE);
    Router.push({ pathname: '/' });
  }

  return (  
    <Mutation 
      mutation={SIGN_IN_MUTATION}
      refetchQueries={[{ query: CURRENT_USER_QUERY}]}> 

      {
        (signin, { data, loading, error }) => {

          if (loading) console.log(loading);
          
          return (
            <> 
              <PageInfo 
                  message1={"Sign into your account"} 
                  message2={
                    error ? error.message : 
                    pathname === "/manage" ? authMessage.manage :
                    pathname === "/wishlist" ? authMessage.wishlist :
                    pathname === "/cart" ? authMessage.cart :
                    pathname === "/orders" ? authMessage.orders :
                    pathname === "/add" ? authMessage.add: null
                  }
                />

              <Form autoComplete="off" method="post" onSubmit={(event) => handleSubmit(event, signin)}>
                <input 
                  type="email" 
                  name="email"
                  onChange={handleChange}
                  value={user.email}
                  id="email"
                />
                <label htmlFor="email">Email</label>

                <div className="divider"></div>

                <input 
                  type="password" 
                  name="password"
                  onChange={handleChange}
                  value={user.password}
                  id="password"
                />
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
      }

    </Mutation>
  )
}

export default Signin;

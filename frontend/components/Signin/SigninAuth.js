import { useQuery } from '@apollo/client'
import { CURRENT_USER_QUERY } from '../User/User';
import { useRouter } from 'next/router';

import Signin from './Signin';
import Spinner from '../Spinner/Spinner';

const SignInAuth = (props) =>  {
  const router = useRouter();
  const { data, loading } = useQuery(CURRENT_USER_QUERY)

  if (loading) return <p> Loading... </p>;

  if (!data.me) {
    return (
      <Signin pathname={router.pathname && router.pathname} />
    )
  } 

  if (data && router.pathname === '/signin') {
    router.push('/');
    return <Spinner spacing="200px" />
  }
  
  return props.children;
}

export default SignInAuth;

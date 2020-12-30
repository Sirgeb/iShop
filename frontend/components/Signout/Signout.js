import { useMutation, gql } from '@apollo/client';
import SignoutStyles from './SignoutStyles';
import { CURRENT_USER_QUERY } from '../User/User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = () => {
  const [signout] = useMutation(SIGN_OUT_MUTATION, { refetchQueries: [{ query: CURRENT_USER_QUERY }] });

  return <SignoutStyles>
    <button onClick={async () => {
      if (confirm("Click on OK to Sign out")) {
        await signout();
      }
      }} >
      <i className="fas fa-power-off icon"></i>
      <br />Signout
    </button>
  </SignoutStyles>
}

export default Signout;

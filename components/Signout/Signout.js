import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import SignoutStyles from './SignoutStyles';
import { CURRENT_USER_QUERY } from '../User/User';

const SIGN_OUT_MUTATION = gql`
  mutation SIGN_OUT_MUTATION {
    signout {
      message
    }
  }
`;

const Signout = () => (
  <Mutation 
    mutation={SIGN_OUT_MUTATION} 
    refetchQueries={[{ query: CURRENT_USER_QUERY}]}
  >
    {(signout) => (
        <SignoutStyles>
            <button onClick={async () => {
              if (confirm("Click on OK to Sign out")) {
                await signout();
              }
             }} >
            <i className="fas fa-power-off icon"></i>
            <br />Signout
          </button>
        </SignoutStyles>
    )}
  </Mutation>
);

export default Signout;
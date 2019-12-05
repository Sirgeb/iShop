import React from 'react';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';
import { CURRENT_USER_QUERY } from '../User/User';

const DECREASE_ITEM_MUTATION = gql`
  mutation decreaseItem($id: ID!) {
    decreaseItem(id: $id) {
      id 
      quantity
    }
  }
`;

class DecreaseItem extends React.Component {

  render() {
    return <Mutation 
              mutation={DECREASE_ITEM_MUTATION} 
              variables={{id: this.props.id }} 
              refetchQueries={[{ query: CURRENT_USER_QUERY}]}
          >
            {
              (decreaseItem, { loading, error }) => (
                <button 
                  disabled={loading}
                  onClick={
                    () => {
                      decreaseItem().catch(err => alert(err.message));
                    }
                  }
                  >
                  {
                    loading ? <i className="fas fa-circle-notch fa-spin"></i> : "-"
                  }
                </button>
              )
            }
    </Mutation>
  }
}

export default DecreaseItem;

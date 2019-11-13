import React from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import ItemStyles from './ItemStyles';
import PageInfo from '../PageInfo/PageInfo';
import Spinner from '../Spinner/Spinner';
import formatMoney from '../../lib/formatMoney';

const ITEM_QUERY = gql`
  query ITEM_QUERY($id: ID!) {
    item(where: { id: $id}) {
      id
      itemName
      image1
      image2
      newPrice
      description
    }
  }
`;


const Item = ({ id }) => {

  return (
    <Query query={ITEM_QUERY} variables={{ id }}>
      {
        ({ data, loading }) => {

          if (loading) return <Spinner spacing="200px"/>;
          const { description, image1, image2, itemName, newPrice } = data.item;

          return (
            <>
            <PageInfo message1={itemName} message2="" />
              <ItemStyles>
                <div className="item">
                  <div className="flip-card">
                    <div className="flip-card-inner">
                      <div className="flip-card-front">
                        <img src={image1} alt={itemName} />
                      </div>
                      <div className="flip-card-back">
                        <img src={image2 ? image2 : image1} alt={image2 && itemName} />
                      </div>
                    </div>
                  </div>
                    <ul>
                      <li>Price: {formatMoney(newPrice)}</li>
                      <li><button>Add to Cart </button></li>
                      <li><button>Add to Wishlist </button></li>
                      <li>
                          <a>
                            <button>Checkout →</button>
                          </a>
                      </li>
                    </ul>
                  </div>
                <div className="content">
                  <h2>Product Description</h2>
                  <p>
                    {description}
                  </p>
                </div>
              </ItemStyles>
            </>
          )
        }
      }
    </Query>
  );
}

export default Item;

import React, { useState } from 'react';
import Head from 'next/head';
import { Mutation, Query } from 'react-apollo';
import gql from 'graphql-tag';

import PageInfo from '../PageInfo/PageInfo';
import Spinner from '../Spinner/Spinner';
import formatError from '../../lib/formatError';
import Form from '../styles/Form';

const UPDATE_ITEM_MUTATION = gql`
  mutation UPDATE_ITEM_MUTATION(
    $id: ID!
    $itemName: String
    $discountPercent: Int
    $category: Category
    $amount: Int
    $newPrice: Int
    $description: String
  ) {
    updateItem(
      id: $id
      itemName: $itemName
      discountPercent: $discountPercent
      category: $category
      amount: $amount
      newPrice: $newPrice
      description: $description
    ) {
      id
      itemName
      category
      amount
      description
    }
  }
`;

const SINGLE_ITEM_QUERY = gql`
  query SINGLE_ITEM_QUERY($id: ID!) {
    item(where: { id: $id }) {
      id
      itemName
      category
      description
      discountPercent
      newPrice
      amount
    }
  }
`;

const UpdateItem = ({ id }) => {
  const [item, setItem] = useState({});

  function handleChange(event) {
    const { name, type, value } = event.target;
    const val = type === 'number' ? parseFloat(value) : value;

    if (name === 'amount') {  
      if (item.discountPercent !== 0) {
        const discountAmount = value * (item.discountPercent/100);
        const newPrice = value - parseInt(discountAmount);
        
        setItem((prevState) => ({
          ...prevState,
          amount: value,
          newPrice,
          discountPercent: !item.discountPercent ? 0 : item.discountPercent
        }));
      } else {
        setItem((prevState) => ({
          ...prevState,
          amount: value,
          newPrice: value,
        }));
      }
    } else if ( name === 'discountPercent') {
      const discountAmount = item.amount * (value/100);
      const newPrice = item.amount - parseInt(discountAmount);

      if (item.amount) {
        setItem((prevState) => ({
          ...prevState,
          discountPercent: value,
          newPrice
        }));
      } else {
        setItem((prevState) => ({
          ...prevState,
          discountPercent: value,
          newPrice: 0,
          amount: 0
        }));
      }

    } else {
      setItem((prevState) => ({
        ...prevState,
        [name]: val,
      }));
    }
  }

  return (  
    <Query 
      query={SINGLE_ITEM_QUERY} 
      variables={{
        id
      }}
    >
      {
        ({data, loading}) => {
          
          if (loading) return <Spinner spacing="200px" />;

          const { itemName, amount, discountPercent, description, category, newPrice } = data.item;

          return (
            <Mutation
              mutation={UPDATE_ITEM_MUTATION} 
              variables={{
                ...item,
                  id
                }}
              >
              {
                (updateItem, {data, loading, error }) => {
                  if (loading) return <Spinner spacing="200px" />;

                  return (
                    <>
                    <Head>
                      <title>iShop | Update Item </title>
                    </Head>
                    <PageInfo 
                      message1="Update Item" 
                      message2={error && formatError(error && error.message) || data && "Updated Successfully"} />
                
                    <Form 
                       autoComplete="off"
                       onSubmit={ async (e) => {
                       e.preventDefault();
                       await updateItem();
                       }}
                    >
                      <input 
                        type="text" 
                        name="itemName"
                        onChange={handleChange}
                        defaultValue={itemName}
                        value={item.itemName && item.itemName}
                        id="name"
                      />
                      <label htmlFor="name">Name</label>
                
                      <div className="divider" />
                
                      <input 
                        type="number" 
                        name="amount"
                        onChange={handleChange}
                        defaultValue={amount}
                        value={item.amount && item.amount}
                        id="amount"
                      />
                      <label htmlFor="amount">Amount</label>
                
                      <div className="divider" />
                
                      <input 
                        type="number" 
                        id="discount-percent"
                        name="discountPercent" 
                        defaultValue={discountPercent}
                        value={item.discountPercent && item.discountPercent}
                        onChange={handleChange}
                      />
                      <label htmlFor="discount-percent">Discount Percent</label>
                
                      <div className="divider" />
                
                      <input 
                        type="number" 
                        disabled 
                        id="new-price" 
                        defaultValue={newPrice}
                        value={item.newPrice && item.newPrice}
                      />
                      <label htmlFor="new-price">New Price</label>
                
                      <div className="divider" />
                
                      <select 
                        defaultValue={category}
                        value={item.category && item.category}
                        onChange={handleChange}
                        name="category"
                      >
                        <option value="BAG">Bag</option>
                        <option value="SHOE">Shoe</option>
                        <option value="SHIRT">Shirt</option>
                        <option value="DEVICE">Device</option>
                        <option value="WRISTWATCH">Wrist Watch</option>
                      </select>

                      <label htmlFor="new-price">Collection</label>
                      <div className="divider" />
                
                      <textarea 
                        name="description" 
                        onChange={handleChange}
                        defaultValue={description}
                        value={item.description && item.description}
                        id="description"></textarea>
                      <label htmlFor="description">Description</label>
                
                      <div className="center">
                        <button type="submit">Updat{loading ? "ting" : "e"}</button> 
                      </div>
                
                      <div className="divider" />
                    </Form>
                    </>
                  )
                }
              }
            </Mutation>
          )
        }
      }
    </Query>
  )
}

export default UpdateItem;

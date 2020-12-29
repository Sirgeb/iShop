import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { useQuery, useMutation, gql } from '@apollo/client';

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
  const [oldData, setOldData] = useState(undefined);
  const { data: isData, loading: isLoading } = useQuery(SINGLE_ITEM_QUERY, { variables: { id } });
  const [updateItem, { data, loading, error }] = useMutation(UPDATE_ITEM_MUTATION, { variables: {...item, id} });
  
  useEffect(() => {
    if (!isLoading && isData !== undefined) {
      setOldData(isData)
    }
  }, [isData, isLoading])



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

  if (isLoading || loading || oldData === undefined) {
    return <Spinner spacing="200px" />
  }

  return (
    <>
      <Head>
        <title>iShop | Update Item </title>
      </Head>
      <PageInfo 
        message1="Update Item" 
        message2={error && formatError(error && error.message) || data && "Updated Successfully"} 
      />

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
          value={item.itemName && item.itemName || oldData.item.itemName}
          id="name"
        />
        <label htmlFor="name">Name</label>

        <div className="divider" />

        <input 
          type="number" 
          name="amount"
          onChange={handleChange}
          value={item.amount && item.amount || oldData.item.amount}
          id="amount"
        />
        <label htmlFor="amount">Amount</label>

        <div className="divider" />

        <input 
          type="number" 
          id="discount-percent"
          name="discountPercent" 
          value={item.discountPercent && item.discountPercent || oldData.item.discountPercent}
          onChange={handleChange}
        />
        <label htmlFor="discount-percent">Discount Percent</label>

        <div className="divider" />

        <input 
          type="number" 
          disabled 
          id="new-price" 
          value={item.newPrice && item.newPrice || oldData.item.newPrice}
        />
        <label htmlFor="new-price">New Price</label>

        <div className="divider" />

        <select 
          value={item.category && item.category || oldData.item.category}
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
          value={item.description && item.description || oldData.item.description}
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

export default UpdateItem;

import React, { useState } from 'react';
import Head from 'next/head';
import { gql, useMutation } from '@apollo/client';
import Router from 'next/router';

import PageInfo from '../PageInfo/PageInfo';
import Spinner from '../Spinner/Spinner';
import formatError from '../../lib/formatError';
import Form from '../styles/Form';

const ADD_ITEM_MUTATION = gql`
  mutation ADD_ITEM_MUTATION(
    $itemName: String!
    $discountPercent: Int
    $category: Category!
    $image1: String!
    $image2: String
    $amount: Int!
    $newPrice: Int
    $description: String!
  ) {
    createItem(
      itemName: $itemName
      discountPercent: $discountPercent
      category: $category
      image1: $image1
      image2: $image2
      amount: $amount
      newPrice: $newPrice
      description: $description
    ) {
      id
    }
  }
`;

const INITIAL_STATE = {
  itemName: "",
  discountPercent: 0,
  category: "BAG",
  image1: undefined,
  image2: undefined,
  amount: 0,
  newPrice: 0,
  description: undefined
}

const AddItem = () => {
  const [item, setItem] = useState(INITIAL_STATE);
  const [createItem, { loading, error }] = useMutation(ADD_ITEM_MUTATION, { variables: { ...item } })

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
          newPrice
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

      setItem((prevState) => ({
        ...prevState,
        discountPercent: value,
        newPrice
      }));

    } else {
      setItem((prevState) => ({
        ...prevState,
        [name]: val,
      }));
    }
  }

  async function uploadFile(e) {
    const imageName = e.target.name;
    const files = e.target.files;
    const data = new FormData();
    data.append('file', files[0]);
    data.append('upload_preset', 'ishopSite');

    const res = await fetch('https://api.cloudinary.com/v1_1/chybesta123/image/upload', {
      method: 'POST',
      body: data
    });

    const file = await res.json();

    if(imageName === "image1") {
      setItem((prevState) => ({
        ...prevState,
        image1: file.secure_url
      }));
    } else {
      setItem((prevState) => ({
        ...prevState,
        image2: file.secure_url
      }));
    }
  }

  if (loading) return <Spinner spacing="200px" />;

  return (
    <>
      <Head>
        <title>iShop | Add Item </title>
      </Head>
      <PageInfo message1="Add Item" message2={formatError(error && error.message)} />

      <Form 
        autoComplete="off"
          onSubmit={ async (e) => {
          e.preventDefault();
          const res = await createItem();
          setItem(INITIAL_STATE);
          if (res) {
            Router.push({
              pathname: '/manage',
            });
          }
        }}
      >
        <input 
          type="text" 
          name="itemName"
          onChange={handleChange}
          value={item.itemName}
          id="name"
        />
        <label htmlFor="name">Name</label>

        <div className="divider" />

        <input 
          type="number" 
          name="amount"
          onChange={handleChange}
          value={item.amount}
          id="amount"
        />
        <label htmlFor="amount">Amount</label>

        <div className="divider" />

        <input 
          type="number" 
          id="discount-percent"
          name="discountPercent" 
          value={item.discountPercent}
          onChange={handleChange}
        />
        <label htmlFor="discount-percent">Discount Percent</label>

        <div className="divider" />

        <input 
          type="number" 
          disabled 
          id="new-price" 
          value={item.newPrice}
        />
        <label htmlFor="new-price">New Price</label>

        <div className="divider" />

        <select 
          value={item.category}
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

        <input 
          type="file" 
          id="image1"
          name="image1"
          onChange={uploadFile}
        />
        <label htmlFor="image1">Upload an image</label>
        {item.image1 && <img src={item.image1} width="100" height="100" alt="upload preview"/>}
        <div className="divider" />

        <input 
          type="file" 
          id="image2"
          name="image2"
          onChange={uploadFile}
        />
        <label htmlFor="image2">Upload an image</label>
        {item.image2 && <img src={item.image2} width="100" height="100" alt="upload preview"/>}
        <div className="divider" />

        <textarea 
          name="description" 
          onChange={handleChange}
          value={item.description}
          id="description"></textarea>
        <label htmlFor="description">Description</label>

        <div className="center">
          <button type="submit">Submit{loading && "ting"}</button> 
        </div>

        <div className="divider" />
      </Form>
    </>
  )
}

export default AddItem;

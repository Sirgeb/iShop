import React from 'react';
import Head from 'next/head';

import PageInfo from '../PageInfo/PageInfo';
import Form from '../styles/Form';

const AddItem = () => {

  return (  
    <>
    <Head>
      <title>iShop | Add Item </title>
    </Head>
    <PageInfo message1="Add an item" message2="" />

    <Form autoComplete="off">
      <input type="text" id="name"/>
      <label htmlFor="name">Name</label>

      <div className="divider"></div>

      <input type="number" id="amount"/>
      <label htmlFor="amount">Amount</label>

      <div className="divider"></div>

      <input type="number" id="discount-percent"/>
      <label htmlFor="discount-percent">Discount Percent</label>

      <div className="divider"></div>

      <input type="number" disabled id="new-price" value="0"/>
      <label htmlFor="new-price">New Price</label>

      <div className="divider"></div>

      <select>
        <option>Bag</option>
        <option>Shirt</option>
        <option>Shoe</option>
        <option>Device</option>
        <option>Wrist-Watch</option>
      </select>
      <label htmlFor="new-price">Collection</label>
      <div className="divider"></div>

      <input type="file" id="image1"/>
      <label htmlFor="image1">Upload an image</label>
      <div className="divider"></div>

      <input type="file" id="image2"/>
      <label htmlFor="image2">Upload an image</label>
      <div className="divider"></div>

      <textarea name="description" id="description"></textarea>
      <label htmlFor="description">Description</label>

      <div className="center">
        <button type="submit">Add</button> 
      </div>

      <div className="divider"></div>
    </Form>

    </>
  )
}

export default AddItem;

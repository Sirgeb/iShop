import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

import PageInfo from '../PageInfo/PageInfo';
import Table from '../styles/Table';
import SearchItem from './SearchItem';
import { AddItem, IconStyle } from './ManageStyles';

const Manage = () => {

  return (
    <>
      <Head>
        <title>iShop | Manage </title>
      </Head>
      <PageInfo message1="Manage" message2="1 item in Store" />

      <AddItem>
        <Link href="/add">
          <a><i className="fas fa-plus"></i> Add an Item</a>
        </Link>
      </AddItem>

      <SearchItem />

      <Table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Amount</th>
            <th>Update</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
              <tr>
                <td>
                  <img src="./static/images/items/1.jpg" />
                </td>
                <td> Black Shirt </td>
                <td>$8000</td>
                <td><IconStyle><i className="fas fa-pen-square icon update"></i></IconStyle></td>
                <td><IconStyle><i className="fas fa-trash-alt icon remove"></i></IconStyle></td>
             </tr>
        </tbody>
      </Table>
    </>
  )
}

export default Manage;

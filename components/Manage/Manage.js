import React from 'react';

import PageInfo from '../PageInfo/PageInfo';
import Table from '../styles/Table';
import SearchItem from './SearchItem';
import { AddItem } from './ManageStyles';

const Manage = () => {

  return (
    <>
      <PageInfo message1="Manage" message2="1 item in Store" />

      <AddItem>
        <a><i className="fas fa-plus"></i> Add an Item</a>
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
                <td><i className="fas fa-pen-square icon"></i></td>
                <td><i className="fas fa-trash-alt icon"></i> </td>
             </tr>
        </tbody>
      </Table>
    </>
  )
}

export default Manage;

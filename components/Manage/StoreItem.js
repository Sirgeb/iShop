import React from 'react';

import formatMoney from '../../lib/formatMoney';
import { IconStyle } from './ManageStyles';

const StoreItem = ({ itemName, image1, newPrice }) => {
  return (
    <tr>
      <td>
        <img src={image1} alt={itemName}/>
      </td>
      <td>{itemName}</td>
      <td>{formatMoney(newPrice)}</td>
      <td><IconStyle><i className="fas fa-pen-square icon update"></i></IconStyle></td>
      <td><IconStyle><i className="fas fa-trash-alt icon remove"></i></IconStyle></td>
    </tr>
  ) 
}

export default StoreItem;
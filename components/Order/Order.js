import React from 'react';

import PageInfo from '../PageInfo/PageInfo';
import OrderStyles from './OrderStyles';

const Order = () => {

  return (
    <>
      <PageInfo message1="Orders" message2="You have 1 Order" />
      <OrderStyles>
        <div className="accordion-wrapper">
          <input id="abc" name="myaccordion" type="checkbox" />
          <label for="abc">
          <strong>•</strong> Date / Time
          </label>
          <div className="insidecontainer">
            <p>  
              <span>Order ID: </span>
              <span>No of Items:</span>
              <span>Grand Total:</span>
            </p>
            <div className="items-wrapper">
                    <div className="item">
                        <img src="./static/images/items/1.jpg" width="100" />
                        <div className="item-details">
                          <span>item name</span>
                          <span> Quantity:</span>
                        </div>
                        <div className="item-details">
                          <span>| Each: </span>
                          <span>| Sub Total: </span>
                        </div>
                    </div>
                    <div className="item">
                      <img src="./static/images/items/2.jpg" width="100" />
                      <div className="item-details">
                        <span>item name</span>
                        <span> Quantity:</span>
                      </div>
                      <div className="item-details">
                        <span>| Each: </span>
                        <span>| Sub Total: </span>
                      </div>
                  </div>
              </div>
            </div>
          </div>
      </OrderStyles>
    </>
  )
};

export default Order;

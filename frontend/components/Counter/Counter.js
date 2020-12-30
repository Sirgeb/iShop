import React from 'react';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import { Dot, CounterStyles } from './CounterStyles';

const CartCount = ({ count }) => (
  <CounterStyles>
    <TransitionGroup>
      <CSSTransition 
        unmountOnExit
        className="count" 
        classNames="count" 
        key={count}
        timeout={{ enter: 1000, exit: 1000 }}>
        <Dot>
          {count}
        </Dot>
      </CSSTransition>
    </TransitionGroup>
  </CounterStyles>
);

export default CartCount;
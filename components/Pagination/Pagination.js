import React from 'react';

import PaginationStyles from './PaginationStyles';

const Pagination = () => {
  
  return (
    <PaginationStyles>
      <div className="wrap">
          <a className="prev">← Prev</a>
          <p className="page-number">
              Page 1 of 5
          </p>
          <a className="next">Next →</a>
      </div>
    </PaginationStyles>
  );
}

export default Pagination;

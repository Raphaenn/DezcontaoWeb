import React from 'react';

import { Grid } from "./styles";

const Pagination = ({ listPerPage, totalPages, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPages / listPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Grid>
      <ul className='pagination'>
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </Grid>
  );
};

export default Pagination;

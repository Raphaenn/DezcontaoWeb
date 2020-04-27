import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import { Grid } from "./styles";

const Pagination = ({ listPerPage, totalPages, paginate }) => {
  const pageNumbers = [1, 2, 3];
  const [test, setTest] = useState([]);

  // for (let i = 1; i <= Math.ceil(totalPages / listPerPage); i++) {
  //   pageNumbers.push(i);
  // };

  function handleNext() {
    pageNumbers.splice(0, pageNumbers.length);
    for (let i = 4; i <= Math.ceil(totalPages / listPerPage); i++) {
    pageNumbers.push(i);
  };
    setTest(pageNumbers);
  }

  function handlePrev() {
    pageNumbers.splice(0, pageNumbers.length);
    for (let i = 1; i <= Math.ceil(totalPages / listPerPage); i++) {
    pageNumbers.push(i);
  };
    setTest(pageNumbers.slice(0, 3));
  }

  return (
    <Grid>
      <ul className='pagination'>
      <button onClick={handlePrev} className='page-link'><MdKeyboardArrowLeft size={20} color="#666666" /></button>
        {test.length == 0 ? 
        pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        )):
        test.map(number => (
          <li key={number} className='page-item'>
            <button onClick={() => paginate(number)} className='page-link'>
              {number}
            </button>
          </li>
        ))  
      }
        <button onClick={handleNext} className='page-link'><MdKeyboardArrowRight size={20} color="#666666" /></button>
      </ul>
    </Grid>
  );
};

export default Pagination;

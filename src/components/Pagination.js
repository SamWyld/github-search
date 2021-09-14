import React from 'react';

const Pagination = ({page, previous, next}) => {
  return (
    <div className="pagination">
      <button
        className="pagination-button"
        disabled={page === 1}
        onClick={previous}
      >
        Previous
      </button>
      <button className="pagination-button" onClick={next}>Next</button>
    </div>
  );
};

export default Pagination;

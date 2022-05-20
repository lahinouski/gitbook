import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import helperFunctions from '../../util/helperFunctions';
import { UserRepoList } from '../';
import './PaginatedList.css';

export default function PaginatedList({ repos }) {
  const { calculatePaginationComment } = helperFunctions;
  const [currentRepos, setCurrentRepos] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + 4;
    setCurrentRepos(repos.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(repos.length / 4));
    // return () => {
    //   setCurrentRepos(repos.slice(0, 4));
    //   // setPageCount(0);
    //   // setItemOffset(0);
    // }
  });

  function handlePageClick(event) {
    const newOffset = (event.selected * 4) % repos.length;
    setItemOffset(newOffset);
  }

  return (
    <div className="repos-and-pagination-container">
      <UserRepoList currentRepos={currentRepos} reposCount={repos.length} />
      <div className="pagination-container">
        <p>{calculatePaginationComment(itemOffset, repos.length)}</p>
        <ReactPaginate
          pageRangeDisplayed={2}
          previousLabel="<"
          nextLabel=">"
          onPageChange={handlePageClick}
          pageCount={pageCount}
          // Fallback UI ???
          renderOnZeroPageCount={null}

          containerClassName="pagination"
          activeClassName="item active"
          previousClassName={`item previous ${itemOffset && "active-angle-bracket"}`}
          nextClassName={`item next ${itemOffset + 4 !== pageCount * 4 && "active-angle-bracket"}`}
          pageClassName="item page" />
      </div>
    </div>
  );
}
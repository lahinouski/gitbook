import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import helperFunctions from '../../util/helperFunctions';
import { UserRepoList } from '../';
import './PaginatedList.css';

export default function PaginatedList({ getRepos, user, repos, forseIndexPage }) {
  const { calculatePaginationComment } = helperFunctions;
  const reposCount = user.public_repos;
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    setItemOffset(0);
  }, [user]);

  useEffect(() => {
    setPageCount(Math.ceil(reposCount / 4));
  }, [reposCount]);

  function handlePageClick(event) {
    getRepos(user, event.selected + 1);
    const newOffset = (event.selected * 4) % reposCount;
    setItemOffset(newOffset);
  }

  return (
    <div className="repos-and-pagination-container">
      <UserRepoList currentRepos={repos} reposCount={reposCount} />
      <div className="pagination-container">
        <p>{calculatePaginationComment(itemOffset, reposCount)}</p>
        <ReactPaginate
          forcePage={forseIndexPage && 0}
          marginPagesDisplayed={1}
          pageRangeDisplayed={2}
          previousLabel="<"
          nextLabel=">"
          onPageChange={handlePageClick}
          pageCount={pageCount}
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
import React from 'react';
import { SearchBar, UserInfo, PaginatedList, Index, Fallback, Loader } from '../';
import useApp from './useApp';
import './App.css';

export default function App() {
  const { searchUser, getRepos, user, repos, notFound, loading, forseIndexPage } = useApp();
  const foundUser = user.id;

  return (
    <div className="app">
      {loading && <Loader />}
      <SearchBar onSubmitForm={searchUser} />
      {
        notFound ? <Fallback /> :
          !foundUser ?
            <Index /> :
            <div className="content-container">
              <UserInfo user={user} />
              <PaginatedList
                user={user}
                repos={repos}
                forseIndexPage={forseIndexPage}
                getRepos={getRepos} />
            </div>
      }
    </div>
  );
}
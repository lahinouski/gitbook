import React from 'react';
import { SearchBar, UserInfo, PaginatedList, Index, Fallback } from '../';
import useApp from './useApp';
import './App.css';

export default function App() {
  const { searchUser, user, repos, notFound } = useApp();

  return (
    <div className="app">
      <SearchBar onSubmitForm={searchUser} />
      {
        notFound ? <Fallback /> :
          !user.id ?
            <Index /> :
            <div className="content-container">
              <UserInfo user={user} />
              <PaginatedList repos={repos} reposCount={user.public_repos} />
            </div>
      }
    </div>
  );
}
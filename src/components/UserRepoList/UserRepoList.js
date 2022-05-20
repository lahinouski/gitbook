import React from 'react';
import { UserRepo } from '../';
import './UserRepoList.css';

export default function UserRepoList({ currentRepos, reposCount }) {
  return (
    <aside>
      <h1>Repositories ({reposCount})</h1>
      <div className="repos-container">
        {currentRepos && currentRepos.map((repo) => <UserRepo
          key={repo.id}
          name={repo.name}
          description={repo.description}
          url={repo.html_url} />)}
      </div>
    </aside>
  );
}
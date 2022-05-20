import React from 'react';
import helperFunctions from '../../util/helperFunctions';
import './UserInfo.css';

export default function UserInfo({ user }) {
  const { name, login, html_url, avatar_url, followers, following } = user;
  const { beautifyBigCount } = helperFunctions;

  return (
    <main>
      <img className="avatar" src={avatar_url} alt={login} />
      <h2>{name}</h2>
      <a href={html_url} target="_blank" rel="noopener noreferrer">{login}</a>
      <div className="sociality">
        <div className="followers" />
        <p>{beautifyBigCount(followers)} followers</p>
        <div className="following" />
        <p>{beautifyBigCount(following)} following</p>
      </div>
    </main>
  );
}
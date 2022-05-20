import React from 'react';
import './UserRepo.css';

export default function UserRepo({ name, description, url }) {
  return (
    <div className="repo-container">
      <a href={url} target="_blank" rel="noopener noreferrer">{name}</a>
      <p>{description}</p>
    </div>
  );
}
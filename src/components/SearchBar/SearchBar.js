import React, { useState } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSubmitForm }) {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <header>
      <span className="logo" />
      <div className="search-bar">
        <form onSubmit={(event) => onSubmitForm(event, searchTerm)}>
          <button className="submit-button" type="submit" />
          <input
            placeholder="Enter a GitHub username"
            type="text"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            required />
        </form>
      </div>
    </header>
  );
}
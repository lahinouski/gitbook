import React, { useState, useRef } from 'react';
import './SearchBar.css';

export default function SearchBar({ onSubmitForm }) {
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);

  return (
    <header>
      <span className="logo" onClick={() => window.open("https://github.com/lahinouski", "_blank")} />
      <div className="search-bar" onClick={() => inputRef.current.focus()} >
        <form onSubmit={(event) => onSubmitForm(event, searchTerm)}>
          <button className="submit-button" type="submit" />
          <input
            type="text"
            ref={inputRef}
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            required />
        </form>
      </div>
    </header>
  );
}
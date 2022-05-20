import React from 'react';
import './Fallback.css';

export default function Fallback() {
  return (
    <div className="index-container">
      <div className="index">
        <span className="fallback-image" />
        <p>User not found</p>
      </div>
    </div>
  );
}
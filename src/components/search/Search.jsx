import React, { useState } from 'react';
import "./search.css";

function Search({ onSearch }) {
  const [username, setUsername] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(username);
  };

  return (
    <div className="search-nav">
      <h1>GitHub Finder</h1>
      <p>By <a href="#">Victor Kamau</a></p>
      <div className="search-form">
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
          />
          <button type="submit">Search</button>
        </form>
      </div>
    </div>
  );
}

export default Search;

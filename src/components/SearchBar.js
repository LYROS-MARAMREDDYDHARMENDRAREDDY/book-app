import React from 'react'
import { useState } from 'react';

export default function SearchBar({onSearch}) {
    const [query, setQuery] = useState('');

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(query);
  };

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Search for books..." value={query} onChange={handleChange} />
            <button type="submit">Search</button>
        </form>
    </div>
  )
}

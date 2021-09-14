import React from 'react';

function Search({onChange, value}) {
  return (
    <input
      onChange={e => onChange (e.target.value)}
      value={value}
      placeholder="Search for github user..."
    />
  );
}

export default Search;

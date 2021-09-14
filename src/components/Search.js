import React from 'react';

function Search({onChange, value, placeholder = 'Search for github user...'}) {
  return (
    <input
      onChange={e => onChange (e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default Search;

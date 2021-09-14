import React from 'react';

function Input({onChange, value, placeholder = 'Search for github user...'}) {
  return (
    <input
      onChange={e => onChange (e.target.value)}
      value={value}
      placeholder={placeholder}
    />
  );
}

export default Input;

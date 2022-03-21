import React from 'react';

const Search = ({ search, setSearch }) => {
  return (
    <div className='filters'>
      <input
        className='form-control'
        placeholder='Name'
        value={search}
        data-testid="search-input"
        onChange={(e) => {
          setSearch(e.target.value);
        }}
      />
    </div>
  );
};

export default Search;

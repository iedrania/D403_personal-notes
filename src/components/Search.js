import React from 'react';
import SearchBox from './SearchBox';

function Search({ onSearch }) {
  return (
    <div className='note-search'>
      <SearchBox search={onSearch} />
    </div>
  );
}

export default Search;

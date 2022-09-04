import React from 'react';
import Search from './Search';
 
function Header({ onSearch }) {
  return (
    <div className='note-app__header'>
      <h1>Notes</h1>
      <Search onSearch={onSearch} />
    </div>
  );
}
 
export default Header;

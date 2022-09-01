import React from 'react';
import Input from './Input';
import ActiveNotes from './ActiveNotes';
import ArchivedNotes from './ArchivedNotes';

function Body({ notes }) {
  return (
    <div className='note-app__body'>
      <Input />
      <h2>Catatan Aktif</h2>
      <ActiveNotes notes={notes}/>
      <h2>Arsip</h2>
      <ArchivedNotes />
    </div>
  );
}

export default Body;

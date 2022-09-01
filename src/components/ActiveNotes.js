import React from 'react';
import NoteItem from './NoteItem';

function ActiveNotes({ notes }) {
  return (
    <div className='notes-list'>
      {
        notes.map((note) => (
          <NoteItem {...note} key={note.createdAt} />
        ))
      }
    </div>
  );
}

export default ActiveNotes;

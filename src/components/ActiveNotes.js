import React from 'react';
import NoteItem from './NoteItem';

function ActiveNotes({ notes, onDelete }) {
  return (
    <div className='notes-list'>
      {
        notes.map((note) => (
          <NoteItem {...note} key={note.createdAt} id={note.id} onDelete={onDelete} />
        ))
      }
    </div>
  );
}

export default ActiveNotes;

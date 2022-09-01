import React from 'react';
import NoteItem from './NoteItem';

function ActiveNotes({ notes, onDelete }) {
  if (Object.keys(notes).length === 0) {
    return <p class="notes-list__empty-message">Tidak ada catatan</p>
  } else {
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
}

export default ActiveNotes;

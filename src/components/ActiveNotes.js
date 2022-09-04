import React from 'react';
import NoteItem from './NoteItem';

function ActiveNotes({ notes, onDelete, onArchive }) {
  if (Object.keys(notes).length === 0) {
    return <p className="notes-list__empty-message">Tidak ada catatan</p>
  } else {
    return (
      <div className='notes-list'>
        {
          notes.map((note) => (
            <NoteItem {...note} key={note.id} id={note.id} onDelete={onDelete} onArchive={onArchive} />
          ))
        }
      </div>
    );
  }
}

export default ActiveNotes;

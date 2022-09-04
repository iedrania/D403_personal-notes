import React from 'react';
import Input from './Input';
import ActiveNotes from './ActiveNotes';
import ArchivedNotes from './ArchivedNotes';

function Body({ notes, onDelete, addNote, onArchive }) {
  return (
    <div className='note-app__body'>
      <Input addNote={addNote} />
      <h2>Catatan Aktif</h2>
      <ActiveNotes notes={notes.filter(note => note.archived === false)} onDelete={onDelete} onArchive={onArchive} />
      <h2>Arsip</h2>
      <ArchivedNotes notes={notes.filter(note => note.archived === true)} onDelete={onDelete} onArchive={onArchive} />
    </div>
  );
}

export default Body;

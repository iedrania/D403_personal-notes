import React from 'react';
import NoteInput from './NoteInput';

function Input({ addNote }) {
  return (
    <div className='note-input'>
      <h2>Buat catatan</h2>
      <NoteInput addNote={addNote} />
    </div>
  );
}

export default Input;

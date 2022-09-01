import React from 'react';
import NoteInput from './NoteInput';

function Input({ onAddNote }) {
  return (
    <div className='note-input'>
      <h2>Buat catatan</h2>
      <NoteInput addNote={onAddNote} />
    </div>
  );
}

export default Input;

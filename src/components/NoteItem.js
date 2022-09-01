import React from 'react';
import NoteItemContent from './NoteItemContent';
import NoteItemAction from './NoteItemAction';
import { showFormattedDate } from '../utils/index';

function NoteItem({ title, createdAt, body, id, onDelete }) {
  return (
    <div className="note-item">
      <NoteItemContent title={title} date={showFormattedDate(createdAt)} body={body}/>
      <NoteItemAction id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItem;

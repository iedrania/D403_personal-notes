import React from 'react';
import Header from './Header';
import Body from './Body';
import { getInitialData } from '../utils/index';
 
class NotesApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
    }
  
    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            archived: false,
            createdAt: +new Date(),
          }
        ]
      }
    });
  }

  onArchiveHandler(id) {
    let notes = this.state.notes;
    const noteId = this.state.notes.findIndex(note => note.id === id);
    notes[noteId].archived = !notes[noteId].archived;
    this.setState({ notes });
  }
 
  render() {
    return (
      <>
        <Header />
        <Body notes={this.state.notes} onDelete={this.onDeleteHandler} addNote={this.onAddNoteHandler} onArchive={this.onArchiveHandler} />
      </>
    );
  }
}
 
export default NotesApp;

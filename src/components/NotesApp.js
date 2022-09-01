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
 
  render() {
    return (
      <>
        <Header />
        <Body notes={this.state.notes} onDelete={this.onDeleteHandler} onAddNote={this.onAddNoteHandler} />
      </>
    );
  }
}
 
export default NotesApp;

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
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter(note => note.id !== id);
    this.setState({ notes });
  }
 
  render() {
    return (
      <div>
        <Header />
        <Body notes={this.state.notes} onDelete={this.onDeleteHandler} />
      </div>
    );
  }
}
 
export default NotesApp;

import React from 'react';
import Header from './Header';
import Body from './Body';
import { getInitialData } from '../utils/index';
 
function NotesApp() {
  const notes = getInitialData();
 
  return (
    <div>
      <Header />
      <Body notes={notes}/>
    </div>
  );
}
 
export default NotesApp;

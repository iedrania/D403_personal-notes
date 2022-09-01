import React from 'react';

function Input() {
  return (
    <div className='note-input'>
      <h2>Buat catatan</h2>
      <form>
        <p className="note-input__title__char-limit">Sisa karakter: 50</p>
        <input className="note-input__title" placeholder="Ini adalah judul..." required=""></input>
        <textarea className="note-input__body" placeholder="Tuliskan catatanmu di sini..." required=""></textarea>
        <button type="submit">Buat</button>
      </form>
    </div>
  );
}

export default Input;

import React from 'react';
import style from './ContactForm.module.css';
import { useState } from 'react';

export default function ContactForm({ onAddContact }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleAddContact = () => {
    if (name.trim() === '' || number.trim() === '') {
      return;
    }
    onAddContact( name, number);
    setName('');
    setNumber('');
  };
  return (
    <div className={style.contact}>
      <h3>Name</h3>
      <input
        type="text"
        name="name"
        pattern="^[a-zA-Z]+(([' -][a-zA-Z ])?[a-zA-Z]*)*$"
        value={name}
        required
        onChange={event => setName(event.target.value)}
      />
      <h3>Number</h3>
      <input
        type="tel"
        name="number"
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        value={number}
        required
        onChange={event => setNumber(event.target.value)}
      />
      <button onClick={handleAddContact}>Add contact</button>
    </div>
  );
}

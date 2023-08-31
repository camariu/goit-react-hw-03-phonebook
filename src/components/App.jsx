import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState( );

  useEffect(() => {
    const storagedData = JSON.parse(localStorage.getItem('stoargedData'));
    setContacts(storagedData);
  }, []);

  useEffect(() => {
    if (contacts)
      localStorage.setItem('stoargedData', JSON.stringify(contacts));
    
  }, [contacts]);

 

  const [filter, setFilter] = useState('');

  const addContacts = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts((prev) => [...prev, newContact]);
  };

  const handeleFilterChange = value => {
    setFilter(value);
  };

  const filteredContacts = contacts?.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    const updatedContacts = contacts?.filter(contact => contact.id !== id);
    setContacts(updatedContacts);
  };

  return (
    <div>
      <h1
        style={{
          marginLeft: 10,
        }}
      >
        Phonebook
      </h1>
      <ContactForm onAddContact={addContacts} />
      <h2
        style={{
          marginLeft: 10,
          marginTop: 15,
        }}
      >
        Contacts
      </h2>
      <Filter onFilterChange={handeleFilterChange} />
      <ContactList
        contacts={filteredContacts}
        onDeleteContacts={handleDeleteContact}
      />
    </div>
  );
};

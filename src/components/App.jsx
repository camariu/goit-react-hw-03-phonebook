import { useState, useEffect } from 'react';
import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';
import { nanoid } from 'nanoid';

export const App = () => {
  const [contacts, setContacts] = useState([
    { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
    { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
    { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
    { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
  ]);
 
  useEffect(() => {
    const storedData = localStorage.getItem('storedData');
    if (storedData) {
       try{
        setContacts(JSON.parse(storedData));
       }  catch (error){
        console.log('Error:', error)
       }
    }
  }, []);

  useEffect(() => {

    if(contacts){
      localStorage.setItem('storedData', JSON.stringify(contacts))
    }
  }, [contacts]);

  
  const [filter, setFilter] = useState('');

  const addContacts = (name, number) => {
    const newContact = { id: nanoid(), name, number };
    setContacts([...contacts, newContact]);
  };

  const handeleFilterChange = value => {
    setFilter(value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  const handleDeleteContact = id => {
    const updatedContacts = contacts.filter(contact => contact.id !== id);
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

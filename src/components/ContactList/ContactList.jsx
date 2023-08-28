import style from './ContactList.module.css';

export default function ContactList({ contacts, onDeleteContacts }) {
  return (
    <div>
      <ul className={style.list}>
        {contacts.map((contact, index) => (
          <li key={index}>
            {contact.name}:{contact.number}
            <button onClick={() => onDeleteContacts(contact.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

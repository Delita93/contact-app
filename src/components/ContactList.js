import React from 'react';
import ContactCard from './ContactCard';

const ContactList = ({ getContactId }) => {
  const deleteCard = (id) => {
    getContactId(id);
  };
  const contacts = [
    {
      id: 1,
      name: 'del',
      email: 'deldza@gmail.com',
    },
  ];

  const renderContactLists = contacts.map((contact) => {
    return (
      <ContactCard key={contact.id} contact={contact} removeCard={deleteCard} />
    );
  });
  return (
    <div className="main">
      <h2>Contact List</h2>
      <div className="ui celled list">{renderContactLists}</div>
    </div>
  );
};

export default ContactList;

import React from 'react';
import ContactCard from './ContactCard';
import { Link } from 'react-router-dom';

const ContactList = ({ getContactId, contacts }) => {
  const deleteCard = (id) => {
    getContactId(id);
  };

  const renderContactLists = contacts.map((contact) => {
    return (
      <ContactCard key={contact.id} contact={contact} removeCard={deleteCard} />
    );
  });
  return (
    <div className="main">
      <h1>
        Contact List
        <Link to="/add">
          <button className="ui button blue right">Add Contact</button>
        </Link>
      </h1>

      <div className="ui celled list">{renderContactLists}</div>
    </div>
  );
};

export default ContactList;

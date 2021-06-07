import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import { v4 as uuidv4 } from 'uuid';
import ContactDetail from './ContactDetail';

function App() {
  const [contacts, setContacts] = useState([]);
  const LOCAL_STORAGE_KEY = 'contacts';

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const deleteCard = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };

  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (getContacts) {
      setContacts(getContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Switch>
          <Route
            path="/"
            exact
            render={(props) => {
              return (
                <ContactList
                  {...props}
                  contacts={contacts}
                  getContactId={deleteCard}
                />
              );
            }}
          />
          <Route
            path="/add"
            render={(props) => {
              return (
                <AddContact {...props} addContactHandler={addContactHandler} />
              );
            }}
          />
          <Route path={'/contact/:id'} component={ContactDetail} />
        </Switch>
      </Router>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={deleteCard}/> */}
    </div>
  );
}

export default App;

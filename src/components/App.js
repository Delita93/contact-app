import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './Header';
import ContactList from './ContactList';
import AddContact from './AddContact';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, { id: uuidv4(), ...contact }]);
  };

  const deleteCard = (id) => {
   const newContactList = contacts.filter((contact) => {
      return contact.id !== id
    })
    setContacts(newContactList)
  }
  
  useEffect(() => {
    const getContacts = JSON.parse(localStorage.getItem('key'));
    
    console.log(getContacts);
    if (getContacts) {
      setContacts(getContacts);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('key', JSON.stringify(contacts));
  }, [contacts]);

  

  return (
    <div className="ui container">
      <Router>
      <Switch>

      
      <Header />
      <Route path="/add" component={AddContact}/>
      <Route path="/"  component={ContactList}/>
      {/* <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} getContactId={deleteCard}/> */}


      </Switch>
      </Router>
    </div>
  );
}

export default App;

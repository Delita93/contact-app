import React from 'react';
import user from '../images/user.png';
import { Link } from 'react-router-dom';

const ContactCard = ({ contact, removeCard }) => {
  const { id, name, email } = contact;

  return (
    <div className="ui cards">
      <div className="card">
        <div className="content">
          <img className="right floated mini ui image" src={user} alt="user" />
          <Link
            to={{
              pathname: `/contact/${id}`,
              state: { contact: contact },
            }}
          >
            <div className="header">{name}</div>
            <div className="meta">{email}</div>
          </Link>
        </div>
        <div className="extra content">
          <i
            className="trash alternate outline icon"
            onClick={() => {
              removeCard(id);
            }}
            style={{ color: 'red', marginTop: '0.5rem' }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;

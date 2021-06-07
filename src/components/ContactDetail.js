import React from 'react';
import user from '../images/user1.png';
import { Link } from 'react-router-dom';

const ContactDetail = (props) => {
  const { name, email } = props.location.state.contact;
  return (
    <div className="main">
      <div className="ui card centered">
        <div className="image">
          <img className="right floated mini ui image" src={user} alt="user" />

          <div className="content">
            <div className="header">{name}</div>
            <div className="description">{email}</div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Link to="/">
            <button className="ui button blue center">
              Go back to HomePage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContactDetail;

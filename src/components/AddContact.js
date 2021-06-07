import React, {useState} from 'react';

const AddContact = ({addContactHandler}) => {
const [formData, setFormData] = useState({name: "", email: "",}) 

 const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
 }

 const add = (e) => {
     e.preventDefault();
     if(formData.name === '' || formData.email === "") 
     {
         alert("ALL FIELDS ARE MANDATORY");
         return;
     }
     addContactHandler(formData);
     setFormData({name: "", email: "",}) 
}


  return (
    <div className="ui main">
      <h2>Add Contact</h2>
      <form className="ui form" onSubmit={add}>
        <div className="field">
          <label>Name</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Name"></input>
        </div>
        <div className="field">
          <label>Email</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email"></input>
        </div>
        <button className="ui button blue" >Add</button>
      </form>
    </div>
  );
};

export default AddContact;

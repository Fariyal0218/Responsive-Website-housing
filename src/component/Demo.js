import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid"; //random id generator library
import ReadOnlyRow from "./ReadOnlyRow";
import EditableRow from "./EditableRow";


const App = () => {

  const [contacts, setContacts] = useState([]);

  const [addFormData, setAddFormData] = useState({

    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""

  });

  const [editFormData, setEditFormData] = useState({

    fullName: "",
    address: "",
    phoneNumber: "",
    email: ""

  });

  const [editContactId, setEditContactId] = useState(null);

 
  const handleAddFormChange = (event) => {
    event.preventDefault(); 

    const fieldName = event.target.getAttribute("name");

    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;
    
    setAddFormData(newFormData);

  };

  const handleEditFormChange = (event) => {
    event.preventDefault(); 

    const fieldName = event.target.getAttribute("name");
    
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);

  };


  const handleAddFormSubmit = (event) => {
    event.preventDefault(); 

    const newContact = {

      id: nanoid(),
      
      fullName: addFormData.fullName, 
      address: addFormData.address,
      phoneNumber: addFormData.phoneNumber,
      email: addFormData.email
    };

   
    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault(); 

    const editedContact = {
      id: editContactId, 
      fullName: editFormData.fullName,
      address: editFormData.address,
      phoneNumber: editFormData.phoneNumber,
      email: editFormData.email
    };

    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === editContactId);
    newContacts[index] = editedContact; 

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault(); 

    setEditContactId(contact.id);

    const formValues = {

      fullName: contact.fullName,
      address: contact.address,
      phoneNumber: contact.phoneNumber,
      email: contact.email

    };

    setEditFormData(formValues);

  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];
    const index = contacts.findIndex((contact) => contact.id === contactId);
    newContacts.splice(index, 1);
    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        
        <table className="border-collapse border border-slate-400  w-full m-8 p-4" align="center">
          <thead>
            <tr>
              <th className="border border-slate-300">ID</th>
              <th className="border border-slate-300">Name</th>
              <th className="border border-slate-300">Address</th>
              <th className="border border-slate-300">Phone Number</th>
              <th className="border border-slate-300">Email</th>
              <th className="border border-slate-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </>
            ))}
          </tbody>
        </table>
      </form>

      <h2 className="font-semibold mt-32">Add a Contact</h2>

      <br/>
        <div align="center">
      <form className="w-64" onSubmit={handleAddFormSubmit}>
        
        <div className="border ">
        <input
          type="text"
          name="fullName"
          required="required"
          placeholder="Enter a name..."
          onChange={handleAddFormChange}
        />
        </div>

        <br/>

        <div className="border ">
        <input
          type="text"
          name="address"
          required="required"
          placeholder="Enter an address..."
          onChange={handleAddFormChange}
        />
        </div>
        <br/>

        <div className="border ">
        <input
          type="text"
          name="phoneNumber"
          required="required"
          placeholder="Enter a phone number..."
          onChange={handleAddFormChange}
        />
        </div>
        <br/>

        <div className="border ">
        <input
          type="email"
          name="email"
          required="required"
          placeholder="Enter an email..."
          onChange={handleAddFormChange}
        />
        </div>
        <br/>

        <button className=" m-4 p-2 bg-green-600  text-white w-24 " type="submit">Add</button>
      </form>
      </div>
    </div>
  );
};

export default App;

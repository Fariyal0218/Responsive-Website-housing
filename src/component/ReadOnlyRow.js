import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {

  return (

    <tr>

      <td className="border border-slate-300">{contact.id}</td>
      <td className="border border-slate-300">{contact.fullName}</td>
      <td className="border border-slate-300">{contact.address}</td>
      <td className="border border-slate-300">{contact.phoneNumber}</td>
      <td className="border border-slate-300">{contact.email}</td>
      <td className="border border-slate-300">

        <button className= "m-4 p-2 bg-green-600  text-white w-24" type="button"
          onClick={(event) => handleEditClick(event, contact)}> Edit</button>

        <button className=" m-4 p-2 bg-red-600  text-white w-24 " type="button" onClick={() => handleDeleteClick(contact.id)}>Delete</button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow

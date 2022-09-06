import React from "react";



const EditableRow = ({editFormData,handleEditFormChange,handleCancelClick,}) => {

  return (

    
    <tr className="border border-slate-300">

      <td className="border border-slate-300">

        <input
        className="border "
          type="text"
          required="required"
          placeholder="Enter a name..."
          name="fullName"
          value={editFormData.fullName}
          onChange={handleEditFormChange}
        />
      </td>


      <td className="border border-slate-300">

        <input
        className="border "
          type="text"
          required="required"
          placeholder="Enter an address..."
          name="address"
          value={editFormData.address}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td className="border border-slate-300">

        <input
        className="border "
          type="text"
          required="required"
          placeholder="Enter a phone number..."
          name="phoneNumber"
          value={editFormData.phoneNumber}
          onChange={handleEditFormChange}
        ></input>
      </td>

      <td className="border border-slate-300">

        <input
        className="border "
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
        />
      </td>

      <td className="border border-slate-300">
        <button className=" m-4 p-2 bg-green-600  text-white w-24 " type="submit">Save</button>
        <button className=" m-4 p-2 bg-red-600  text-white w-24 " type="button" onClick={handleCancelClick}>Cancel</button>
      </td>
    </tr>
  );
};

export default EditableRow;
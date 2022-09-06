import React, { useState, useEffect } from "react";

const EditUserForm = props => {
    
  const [user, setUser] = useState(props.currentUser);

  useEffect(() => {

      setUser(props.currentUser);
    },

    [props]
  );

  const handleInputChange = event => {

    const { name, value } = event.target;
    setUser({ ...user, [name]: value });

  };

  return (
    <form

      onSubmit={event => {
        event.preventDefault();
        props.updateUser(user.id, user);
      }}>

      <input

      className="border "
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}
      />

      <input

      className="border "
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}

      />

      <button className=" m-4 p-2 bg-green-600  text-white w-42 ">Update </button>

      <button onClick={() => props.setEditing(false)} className=" m-4 p-2 bg-red-600  text-white w-42">Cancel </button>
      
    </form>
  );
};

export default EditUserForm;

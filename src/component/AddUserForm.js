import React, { useState } from "react";

const AddUserForm = props => {

  const initialFormState = { id: null, name: "", username: "" };

  const [user, setUser] = useState(initialFormState);

  const handleInputChange = event => {

    const { name, value } = event.target;
    setUser({ ...user, [name]: value });

  };

  return (

    <form

      onSubmit={event => {
        event.preventDefault();
        if (!user.name || !user.username) return;
        props.addUser(user);
        setUser(initialFormState);
      }} >

      <div>
      <input
      placeholder="Name"
       className="border "
        type="text"
        name="name"
        value={user.name}
        onChange={handleInputChange}/>
        </div>
        <br/>

      <div>
      <input
      placeholder="UserName"
      className="border "
        type="text"
        name="username"
        value={user.username}
        onChange={handleInputChange}/>
        </div>
        <br/>

      <button className=" m-4 p-2 bg-green-600  text-white w-42 ">Add new user</button>

    </form>
  );
};

export default AddUserForm;

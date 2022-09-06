import React, { useState } from "react";
import UserTable from "./UserTable";
import AddUserForm from "./AddUserForm";
import EditUserForm from "./EditUserForm";

const Demo2 = () => {

   const [users, setUsers] = useState([]);

    const addUser = user => {

            user.id = users.length + 1;
            setUsers([...users, user]);

  };


  const deleteUser = id => {

    setUsers(users.filter(user => user.id !== id));

  };

  const [editing, setEditing] = useState(false);

  const initialFormState = {

      id: null,
      name: "", 
      username: ""
      
     };

  const [currentUser, setCurrentUser] = useState(initialFormState);

  const editRow = user => {

    setEditing(true);

    setCurrentUser({ id: user.id, name: user.name, username: user.username });

  };

  const updateUser = (id, updateUser) => {

    setEditing(false);
    
    setUsers(users.map(user => (user.id === id ? updateUser : user)));

  };

  return (

    <div className="container">

      <h1 className="font-semibold mt-12">CRUD App with Hooks</h1>

      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit User</h2>
              <EditUserForm
                editing={editing}
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>

           ) : (

            <div>

              <h2 className="font-semibold mt-20">Add User</h2>

              <AddUserForm addUser={addUser}/>

            </div>
          )}
        </div>
        <div className="flex-large">


          <UserTable users={users} deleteUser={deleteUser} editRow={editRow} />
        </div>
      </div>
    </div>
  );
};

export default Demo2;

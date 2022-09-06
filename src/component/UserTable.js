import React from "react";

const UserTable = props => (

  <table className="border-collapse border border-slate-400  w-full m-8 p-4"  align="center">

    <thead>

      <tr>
        <th className="border border-slate-300">Name</th>
        <th className="border border-slate-300">Username</th>
        <th className="border border-slate-300">Actions</th>
      </tr>

    </thead>

    <tbody>

      {props.users.length > 0 ? (

        props.users.map(user => (

          <tr key={user.id}>
            
            <td className="border border-slate-300">{user.name}</td>
            <td className="border border-slate-300">{user.username}</td>

            <td className="border border-slate-300">

              <button className="m-4 p-2 bg-green-600  text-white " onClick={() => props.editRow(user)}>Edit</button>

              <button className="m-4 p-2 bg-red-600  text-white" onClick={() => props.deleteUser(user.id)}>Delete</button>
            
            </td>
          </tr>
        ))
      ) : (

        <tr>

          <td colSpan={3}></td>

        </tr>

      )}

    </tbody>
  </table>
);

export default UserTable;

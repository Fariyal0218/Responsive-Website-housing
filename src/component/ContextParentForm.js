

import React from 'react'
import { createContext } from 'react'
import ContextChildForm1 from './ContextChildForm1';
import ContextChildForm2 from './ContextChildForm2';

export const GlobalValue= createContext();

const ContextParetnForm = () =>{


    const obj = {
        FirstName:''
    }

    const [user,setUser]=React.useState(obj)


    const handleChange=(e)=>{
        setUser({...user,[e.target.name]:e.target.value})
    }

    const updateObj = (data)=>{
        setUser({...user,...data})
    }
   

    return(
        <GlobalValue.Provider value={{user,updateObj}}>
            <h1>This is Form One</h1>
            <input onChange={handleChange} name='FirstName'></input>
            <p>First Name : {user.FirstName}</p>
            <p>Last Name : {user.LastName}</p>
            <p>Email : {user.Email}</p>
            <ContextChildForm1/>
            <ContextChildForm2/>
        </GlobalValue.Provider>
    )
}
export default ContextParetnForm
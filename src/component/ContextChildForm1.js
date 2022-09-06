import React, {useContext} from "react"
import { GlobalValue } from "./ContextParentForm"


const ContextChildForm1 = () =>{

    const {user} = useContext(GlobalValue)
    const {updateObj} = useContext(GlobalValue)

    const obj1={
        LastName:''
    }

    const [data1,setData1]=React.useState(obj1)

    const handleChange=(e)=>{
        setData1({...data1,[e.target.name]:e.target.value})        
    }

    const sendData=(value)=>{
        updateObj(data1)
    }      

    return(
        <div>
            <h1>This is Child Form One</h1>
            <input name="LastName" onChange={handleChange}></input>
            <p>First Name : {user.FirstName}</p>
            <p>Last Name : {user.LastName}</p>
            <p>Email : {user.Email}</p>
            <button onClick={sendData}>Send</button>
        </div>
    )
}
export default ContextChildForm1
import React, {useContext} from "react"
import { GlobalValue } from "./ContextParentForm"


const ContextChildForm2 = () =>{

    const {user} = useContext(GlobalValue)

    const {updateObj} = useContext(GlobalValue)

    const obj2={
       Email :''
    }

    const [data2,setData2]=React.useState(obj2)

    const handleChange=(e)=>{
        setData2({...data2,[e.target.name]:e.target.value})
       
    }

    const sendData =()=>{
        updateObj(data2)
    }

    return(
        <div>
            <h1>This is Child Form Two</h1>
            <input name="Email" onChange={handleChange}></input>
            <p>First Name : {user.FirstName}</p>
            <p>Last Name : {user.LastName}</p>
            <p>Email : {user.Email}</p>
            <button onClick={sendData}>Send Data</button>
        </div>
    )
}
export default ContextChildForm2
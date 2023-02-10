import { useState } from "react";
import { updateEmail, login } from "../utils/utilities";
import './Login.css';
const UpdateEmail = ({setter}) => {
    const [username,setUsername] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();

const submitHandler = async (event) => {
        event.preventDefault();
        console.log("executing update email request")
        await updateEmail(username,email,password,setter);
    }
    
    return (
        <div className="Auth-form-container">
        <form onSubmit={submitHandler} className="Auth-form">
            <h3 className="Auth-form-title">Update Email</h3>
        <div className="Auth-form-content"> 
            <input onChange={(event) => setUsername(event.target.value)} />
            <input onChange={(event) => setEmail(event.target.value)}  />
            <input onChange={(event) => setPassword(event.target.value)} />
            <br/>
            <button onClick={submitHandler}>update Email</button>
            </div>
        </form>
        </div>
    )
}

export default UpdateEmail;
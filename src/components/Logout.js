import { useState } from "react";
import { login } from "../utils/utilities";
import './Login.css';
const Logout = ({setter}) => {
    const [username,setUsername] =useState();
    const [email,setEmail] =useState();
    const [password,setPassword] =useState();

    const submitHandler = async (event) => {
        event.preventDefault();
        console.log("executing logout request")
         document.cookie = "jwt_token =; path=/; expires = Thu, 01 Jan 1970 00:00:01 GMT;";
            //setUser("");
            setter ("");//user loged out or null
          }
    
    
    return (
        <div >
          
        <form onSubmit={submitHandler}>
            
                   <button onClick={submitHandler} className="button" >Logout</button>
            
        </form>
        </div>
    )
}

export default Logout;
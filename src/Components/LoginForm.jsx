import React from "react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import '/src/App.css'
import FetchLocation from "./FetchLocation";



const LoginForm =()=>{
    const navigate=useNavigate()
    const [username,setUsername]= useState('')
    const [password,setPassword]= useState('')
   

    const user='user1'
    const pass='pass1'

    
    const handleSubmit=()=>{
    if(username===user&&password===pass){

            navigate("/home")
    }
}



    return (<>


    <form id="login-form" onSubmit={handleSubmit}>
        <label htmlFor="user">UserName &nbsp;

        <input id='user' type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
        </label><br></br>
        <label htmlFor="pass"> Password &nbsp;

        <input  id='pass'type="text" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
        </label>
        <button type='submit'>Login</button>




    </form>
    
    <FetchLocation />
    </>)
    




}
export default LoginForm
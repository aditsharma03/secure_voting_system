/*
import { useState } from "react";

const Signup = () =>{

    const [username, setUserName] = useState(""); 
    const [password, setPassword] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();

        console.log( username, password );

    }

    return (
        <div className=" h-full w-full">
        <form className="flex flex-col w-64 bg-red-100" onSubmit={submitHandler}>
            <input value={username} onChange={(e)=>setUserName(e.target.value) } type="text" placeholder="username" name="username" />                
            <input value={password} onChange={(e)=>setPassword(e.target.value) } type="password" placeholder="password" name="password"/> 
            
            <button type="submit" >Login</button>

        </form> 
        </div>
    );
}


export default Signup;
*/

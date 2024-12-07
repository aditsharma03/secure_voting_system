import { useState } from "react";

const Login = () =>{

    const [username, setUserName] = useState(""); 
    const [password, setPassword] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();

        console.log( username, password );

    }

    return (

        <div className=" h-full w-full bg-blue-500 flex items-center justify-center ">

            <div className="w-1/2 px-10 py-16 flex flex-col items-center justify-center bg-zinc-100 rounded-lg">

                <h1 className="pb-12 text-5xl text-blue-800">Secure Voting System </h1>


                <form className="flex flex-col w-3/4 gap-3" onSubmit={submitHandler}>
                    <input value={username} onChange={(e)=>setUserName(e.target.value) } type="text" placeholder="username" name="username" className="p-4 rounded-lg" />                
                    <input value={password} onChange={(e)=>setPassword(e.target.value) } type="password" placeholder="password" name="password" className="p-4 rounded-lg"/> 



                    <button type="submit" className=" bg-zinc-700 text-white p-4 mt-8 rounded-lg" >Login</button>


                </form> 

            </div>
        </div>

    );
}


export default Login;

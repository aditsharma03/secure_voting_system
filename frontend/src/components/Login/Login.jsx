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

            <div className="w-1/2 px-10 py-16 flex flex-col items-center justify-center bg-white rounded-lg">

                <h1 className="pb-12 text-5xl text-zinc-800">Secure Voting System </h1>


                <form className="flex flex-col w-3/4 gap-3" onSubmit={submitHandler}>
                    <input value={username} onChange={(e)=>setUserName(e.target.value) } type="text" placeholder="username" name="username" className="focus:outline-none p-4 rounded-lg rounded-b-none border-b-blue-600 border-b-2" />                
                    <input value={password} onChange={(e)=>setPassword(e.target.value) } type="password" placeholder="password" name="password" className="focus:outline-none p-4 rounded-lg rounded-b-none border-b-blue-600 border-b-2"/> 



                    <button type="submit" className=" bg-zinc-700 text-white p-4 mt-8 rounded-md" >Login</button>


                </form> 

            </div>
        </div>

    );
}


export default Login;

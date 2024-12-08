import { useState } from "react";
import { cities } from "../indian_cities";
import { Link } from "react-router-dom";

const AdminVoters = ()=>{
    const [voters, setVoters] = useState([
        { id: 1, name: 'John Doe', dateOfBirth: '1985-05-15', address: '123 Main St, Anytown, USA', voterId: 'V001' },
        { id: 2, name: 'Jane Smith', dateOfBirth: '1990-08-22', address: '456 Oak Ave, Somewhere, USA', voterId: 'V002' },
    ]);

    const [newVoter, setNewVoter] = useState({
        name: '',
        dateOfBirth: '',
        address: '',
        voterId: '',
    });

    const [indianstate, setIndianstate] = useState("");


    return (
        <div className="bg-white rounded-lg p-12">
            <h2 className="text-2xl font-bold mb-4">Voter Management</h2>

            <form className=" mb-6">
                <div className=" w-1/2 grid grid-cols-1  gap-4">
                    <select
                        name="State"
                        className="border rounded p-2"
                        onChange={(e)=>setIndianstate(e.target.value)}
                        required
                    >
                        <option value={""}>Select State</option>
                        {
                            Object.keys( cities ).map((city)=>{
                                return <option key={city} value={city}>{city}</option>
                            })
                        }
                    </select>
                    <select
                        disabled={indianstate===""}
                        name="Cities"
                        className="border rounded p-2"
                        required
                    >
                        <option value={""}>Select City</option>
                        {
                            indianstate !== "" && cities[indianstate].map((city)=>{
                                return <option key={city} value={city}>{city}</option>
                            })
                        }
                    </select>

                   <br /> 

                    <input
                        type="text"
                        name="voterId"
                        value={newVoter.voterId}
                        placeholder="Voter ID"
                        className="outline-none border-b-2 border-b-blue-900 p-2"
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        value={newVoter.name}
                        placeholder="Election Name"
                        className="outline-none border-b-2 border-b-blue-900 p-2"
                        required
                    />
                </div>
                <button type="submit" className="mt-8 bg-zinc-700 text-white px-4 py-2 rounded hover:bg-zinc-500">
                    Add Voter
                </button>
            </form>



            <hr className=" my-8 border-zinc-400 border-1" />


            <div>
                <div className="my-16 w-full bg-green-200 p-6">
                    green box after successfull addition of a user goes here.
                </div>
                <hr className=" my-8 border-zinc-400 border-1" />
            </div>



            <Link to={"viewall"}>
                <button className="px-4 py-2 rounded text-white bg-zinc-700 hover:bg-zinc-500">
                    View All
                </button>
            </Link>

            {
                /*
            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2 text-left">Voter ID</th>
                        <th className="border p-2 text-left">Name</th>
                        <th className="border p-2 text-left">Date of Birth</th>
                        <th className="border p-2 text-left">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {voters.map(voter => (
                        <tr key={voter.id}>
                            <td className="border p-2">{voter.voterId}</td>
                            <td className="border p-2">{voter.name}</td>
                            <td className="border p-2">{voter.dateOfBirth}</td>
                            <td className="border p-2">{voter.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                 */
            }
        </div>
    );
}


export default AdminVoters;

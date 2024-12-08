import { useState } from "react";
import { cities } from "../indian_cities";

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
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Voter Management</h2>

            <form className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <select
                        name="State"
                        className="border rounded p-2"
                        onChange={(e)=>setIndianstate(e.target.value)}
                        required
                    >
                        <option value={""}>Select</option>
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
                        {
                            indianstate !== "" && cities[indianstate].map((city)=>{
                                return <option key={city} value={city}>{city}</option>
                            })
                        }
                    </select>
                    <input
                        type="text"
                        name="voterId"
                        value={newVoter.voterId}
                        placeholder="Voter ID"
                        className="border rounded p-2"
                        required
                    />
                    <input
                        type="text"
                        name="name"
                        value={newVoter.name}
                        placeholder="Election Name"
                        className="border rounded p-2"
                        required
                    />
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add Voter
                </button>
            </form>

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
        </div>
    );
}


export default AdminVoters;

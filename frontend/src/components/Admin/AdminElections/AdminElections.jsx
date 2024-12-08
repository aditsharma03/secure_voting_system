import { useState } from "react";

const AdminElections = ()=>{
    const [elections, setElections] = useState([
        { id: 1, name: 'Presidential Election 2024', date: '2024-11-03', status: 'Upcoming' },
        { id: 2, name: 'Midterm Elections 2022', date: '2022-11-08', status: 'Completed' },
    ]);

    const [newElection, setNewElection] = useState({
        name: '',
        date: '',
        status: 'Upcoming',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewElection(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const id = Math.max(0, ...elections.map(e => e.id)) + 1;
        setElections(prev => [...prev, { id, ...newElection }]);
        setNewElection({ name: '', date: '', status: 'Upcoming' });
    };

    return (
        <div className="bg-white rounded-lg p-6">
            <h2 className="text-2xl font-bold mb-4">Election Management</h2>

            <form onSubmit={handleSubmit} className="mb-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                        type="text"
                        name="name"
                        value={newElection.name}
                        onChange={handleInputChange}
                        placeholder="Election Name"
                        className="border rounded p-2"
                        required
                    />
                    <input
                        type="date"
                        name="date"
                        value={newElection.date}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                        required
                    />
                    <select
                        name="status"
                        value={newElection.status}
                        onChange={handleInputChange}
                        className="border rounded p-2"
                        required
                    >
                        <option value="Upcoming">Upcoming</option>
                        <option value="Ongoing">Ongoing</option>
                        <option value="Completed">Completed</option>
                    </select>
                </div>
                <button type="submit" className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Add Election
                </button>
            </form>

            <table className="w-full border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="border p-2 text-left">Name</th>
                        <th className="border p-2 text-left">Date</th>
                        <th className="border p-2 text-left">Status</th>
                    </tr>
                </thead>
                <tbody>
                    {elections.map(election => (
                        <tr key={election.id}>
                            <td className="border p-2">{election.name}</td>
                            <td className="border p-2">{election.date}</td>
                            <td className="border p-2">{election.status}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}


export default AdminElections;

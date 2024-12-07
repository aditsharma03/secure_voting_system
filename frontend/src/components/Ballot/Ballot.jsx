import { useState } from "react";

const Ballot = ()=>{

    const [ candidates, setCandidates ] = useState([{id: 1, name: "abhishek kothiyal"},{id: 2, name: "abhishek kothiyal"},{id: 2, name: "abhishek kothiyal"},{id: 2, name: "abhishek kothiyal"},{id: 2, name: "abhishek kothiyal"},{id: 2, name: "abhishek kothiyal"},{id: 2, name: "abhishek kothiyal"},{id: 2, name: "abhishek kothiyal"},{id: 2, name: "abhishek kothiyal"}]);

    return (
        <div className="h-full w-full bg-blue-500 flex  justify-center ">
            <div className="m-24 w-11/12 h-3/4 px-10 py-16 flex flex-col items-center justify-center bg-zinc-100 rounded-lg gap-4 ">
                <div className="w-full">
                <h1 className="text-4xl text-blue-800 ">Voting is important for democracy </h1>
                </div>
                <hr className="border-[1px] border-zinc-300 w-full" />
                <ul className="w-full h-full gap-1 overflow-auto">
                    {
                        candidates.map((candidate)=>{
                            return <li key={candidate.id} className="p-4 m-2 rounded-lg  bg-cyan-50 flex justify-between items-center ">{candidate.name} <button className="bg-green-200 px-4 py-2 ">Vote</button> </li>
                        })
                    }
                </ul>
            </div>
        </div>
    );
}


export default Ballot;

import { Link, Route, Routes } from "react-router-dom";
import AdminElections from "./AdminElections/AdminElections";
import AdminVoters from "./AdminVoters/AdminVoters";
import AdminHome from "./AdminHome/AdminHome";

const Admin = ()=>{

    const tabs = [
        {
            name: "Home",
            route: "/admin"
        },
        {
            name: "Elections",
            route: "/admin/elections",
        },
        {
            name: "Voters",
            route: "/admin/voters",
        },
    ];


    return (
        <div className=" h-full w-full bg-blue-500 flex items-center justify-center ">
            <div className=" h-5/6 w-11/12 p-2 flex flex-row items-center justify-center bg-white rounded-md">
                <div className="h-full w-1/6 border-r-zinc-200 border-r-2 flex flex-col ">
                    <div className="p-3 text-3xl text-black font-bold">
                        Dashboard
                    </div>
                    <div className="mt-32 w-full ">
                            {
                                tabs.map((tab)=>{
                                    return <Link to={tab.route} className="w-full">
                                        <button className="w-11/12 mx-2 my-1 p-4 bg-zinc-50 rounded-md hover:bg-zinc-200" key={tab.name}>
                                            {tab.name}
                                        </button>
                                    </Link>

                                })
                            }
                    </div>
                </div>
                <div className="h-full w-5/6 ">
                    <Routes>
                        <Route path="/" element={ <AdminHome /> } />
                        <Route path="/elections" element={<AdminElections />} />
                        <Route path="/voters" element={ <AdminVoters /> } />
                    </Routes>
                </div>
            </div>
        </div>
    );
}


export default Admin;

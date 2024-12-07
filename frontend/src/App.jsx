import { useState } from 'react'
import './App.css'
import Login from './components/Login/Login'
import Admin from './components/Admin/Admin'
import Voter from './components/Voter/Voter'
import Ballot from './components/Ballot/Ballot'
import { Route, Routes } from 'react-router-dom'

function App() {

    return (

        <>
            <div className='h-screen w-screen'>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/admin" element={<Admin />} />
                    <Route path="/voter" element={<Voter />} />
                    <Route path="/ballot" element={<Ballot />} />
                </Routes>
            </div>

            <div>
            </div>
        </>

    )
}

export default App

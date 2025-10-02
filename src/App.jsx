import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import SlotDetail from './pages/SlotDetail'
import OwnerDashboard from './pages/OwnerDashboard'
import Profile from './pages/Profile'

export default function App(){
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-white">
      <nav className="bg-white shadow-md p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="text-2xl font-bold text-sky-600">Park<span className="text-amber-500">Share</span></div>
          <Link to="/" className="text-sky-500 hover:underline">Home</Link>
          <Link to="/owner" className="text-sky-500 hover:underline">Owner</Link>
        </div>
        <div className="flex items-center gap-3">
          <Link to="/profile" className="px-3 py-1 bg-amber-500 text-white rounded">Profile</Link>
        </div>
      </nav>
      <main className="p-6">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/slot/:id" element={<SlotDetail/>} />
          <Route path="/owner" element={<OwnerDashboard/>} />
          <Route path="/profile" element={<Profile/>} />
        </Routes>
      </main>
    </div>
  )
}

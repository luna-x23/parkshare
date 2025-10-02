import React, {useState} from 'react'
import axios from 'axios'

export default function OwnerDashboard(){
  const [slots, setSlots] = useState([{id:'s1', title:'Sample Slot', price:50, covered:true, booked:false}])

  const handleAdd = () => {
    const id = 's' + (Math.random()*1000|0)
    setSlots(prev => [{id, title:'New Slot', price:40, covered:false, booked:false}, ...prev])
  }

  return (
    <div className="space-y-4 max-w-3xl">
      <div className="card flex justify-between items-center">
        <h2 className="text-xl font-semibold">Owner Dashboard</h2>
        <button onClick={handleAdd} className="px-3 py-1 bg-sky-600 text-white rounded">Add Slot</button>
      </div>

      <div className="card">
        <h3 className="font-semibold">Your Slots</h3>
        <div className="mt-3 space-y-2">
          {slots.map(s => (
            <div key={s.id} className="p-3 border rounded flex justify-between items-center">
              <div>
                <div className="font-semibold">{s.title}</div>
                <div className="text-sm text-gray-500">₹{s.price}/hr · {s.covered? 'Covered':'Open'}</div>
              </div>
              <div className="flex items-center gap-2">
                <button className="px-2 py-1 bg-amber-500 text-white rounded">Approve</button>
                <button className="px-2 py-1 bg-white border rounded">Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

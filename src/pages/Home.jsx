import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function Home(){
  const [slots, setSlots] = useState([])
  const [filter, setFilter] = useState('nearest')

  useEffect(()=> {
    // fetch slots from backend
    axios.get(import.meta.env.VITE_API_URL + '/api/slots')
      .then(res => setSlots(res.data))
      .catch(err => {
        console.error('Failed to fetch slots', err)
        setSlots([{id:'s1', title:'Sample Covered Slot', lat:17.3850, lng:78.4867, price:50, covered:true, rating:4.5}])
      })
  },[])

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="lg:col-span-2">
        <div className="card map-box">
          <iframe
            title="map"
            srcDoc={`<html><body style="margin:0"><div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center"><div style="text-align:center"><h2>Map placeholder</h2><p>Add Google Maps API key and replace iframe with actual map.</p></div></div></body></html>`}
            className="w-full h-full"
          />
        </div>
        <div className="mt-4 flex gap-2">
          <button className={`px-3 py-2 rounded ${filter==='nearest'?'bg-sky-600 text-white':'bg-white'}`} onClick={()=>setFilter('nearest')}>Nearest</button>
          <button className={`px-3 py-2 rounded ${filter==='cheapest'?'bg-sky-600 text-white':'bg-white'}`} onClick={()=>setFilter('cheapest')}>Cheapest</button>
          <button className={`px-3 py-2 rounded ${filter==='covered'?'bg-sky-600 text-white':'bg-white'}`} onClick={()=>setFilter('covered')}>Covered</button>
        </div>
      </div>

      <aside className="space-y-4">
        <div className="card">
          <h3 className="font-semibold text-lg">Available Slots</h3>
          <div className="mt-3 space-y-3">
            {slots.map(s => (
              <div key={s.id} className="p-3 border rounded flex justify-between items-center">
                <div>
                  <div className="font-semibold">{s.title || ('Slot ' + s.id)}</div>
                  <div className="text-sm text-gray-500">{s.covered? 'Covered' : 'Open'} · ₹{s.price}/hr</div>
                </div>
                <div className="flex flex-col items-end">
                  <div className="text-sm">⭐ {s.rating || 0}</div>
                  <Link to={'/slot/' + s.id} className="mt-2 px-3 py-1 bg-amber-500 text-white rounded">Book</Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h4 className="font-semibold">Quick Actions</h4>
          <div className="mt-3 flex flex-col gap-2">
            <button className="px-3 py-2 rounded bg-sky-500 text-white">Nearest Covered</button>
            <button className="px-3 py-2 rounded bg-amber-500 text-white">Cheapest Slot</button>
          </div>
        </div>
      </aside>
    </div>
  )
}

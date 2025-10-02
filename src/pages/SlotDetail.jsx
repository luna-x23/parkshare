import React from 'react'
import { useParams } from 'react-router-dom'

export default function SlotDetail(){
  const { id } = useParams()

  const handlePay = async () => {
    alert('This will open Razorpay checkout (use your key).')
  }

  const handleNavigate = () => {
    const lat = 17.3850, lng = 78.4867
    const url = `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`
    window.open(url, '_blank')
  }

  return (
    <div className="max-w-2xl mx-auto space-y-4">
      <div className="card">
        <h2 className="text-xl font-semibold">Parking Slot {id}</h2>
        <p className="text-gray-600">Covered · ₹50/hr · Available now</p>
        <div className="mt-4 flex gap-3">
          <button onClick={handlePay} className="px-4 py-2 bg-amber-500 text-white rounded">Book & Pay (UPI)</button>
          <button onClick={handleNavigate} className="px-4 py-2 bg-sky-500 text-white rounded">Navigate</button>
        </div>
      </div>

      <div className="card">
        <h3 className="font-semibold">Ratings</h3>
        <div className="mt-3 text-sm">Clean: ★★★★☆ · Safe: ★★★★☆ · Convenient: ★★★★☆</div>
      </div>
    </div>
  )
}

# Frontend (React + Vite + Tailwind)

1. Install dependencies:
   cd frontend
   npm install

2. Create .env from .env.example and set VITE_API_URL and API keys.

3. Run dev server:
   npm run dev

Notes:
- The map is currently a placeholder iframe in Home.jsx. Replace it with Google Maps JS API:
  - Add Google Maps script in index.html: 
    <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_KEY&libraries=places"></script>
  - Implement map with markers in src/components/Map.jsx or replace iframe with a proper map component.
- Razorpay web checkout should be integrated in SlotDetail.jsx where indicated.

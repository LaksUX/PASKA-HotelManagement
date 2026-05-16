import { useState } from 'react'
import CSVUploader from './components/CSVUploader'
import { parsePMSData } from './utils/pmsParser'

export default function App() {

  const [metrics, setMetrics] = useState(null)

  const handleData = (rows) => {

    const parsed = parsePMSData(rows)

    setMetrics(parsed)
  }

  return (
    <div className="min-h-screen bg-black text-white p-4">

      <div className="max-w-md mx-auto space-y-5">

        <CSVUploader onData={handleData} />

        {metrics && (

          <div className="grid grid-cols-2 gap-3">

            <div className="bg-slate-900 rounded-3xl p-4">
              <p className="text-slate-400 text-xs">
                Revenue
              </p>

              <h2 className="text-2xl font-bold mt-2">
                ₹{Math.round(metrics.totalRevenue)}
              </h2>
            </div>

            <div className="bg-slate-900 rounded-3xl p-4">
              <p className="text-slate-400 text-xs">
                Occupancy
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {metrics.occupancy}%
              </h2>
            </div>

            <div className="bg-slate-900 rounded-3xl p-4">
              <p className="text-slate-400 text-xs">
                VIP Guests
              </p>

              <h2 className="text-2xl font-bold mt-2">
                {metrics.vipGuests}
              </h2>
            </div>

          </div>
        )}
      </div>
    </div>
  )
}

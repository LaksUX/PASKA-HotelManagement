import { useState } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Tooltip,
  BarChart,
  Bar,
  XAxis
} from 'recharts'

import CSVUploader from './components/CSVUploader'
import { parsePMSData } from './utils/pmsParser'

const COLORS = [
  '#22C55E',
  '#3B82F6',
  '#F59E0B',
  '#EF4444',
  '#8B5CF6'
]

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

          <>
            <div className="grid grid-cols-2 gap-3">

              <Card
                title="Revenue"
                value={`₹${Math.round(metrics.totalRevenue)}`}
              />

              <Card
                title="Occupancy"
                value={`${metrics.occupancy}%`}
              />

              <Card
                title="VIP Guests"
                value={metrics.vipGuests}
              />

              <Card
                title="No Shows"
                value={metrics.noShows}
              />

            </div>

            <ChartCard title="Booking Channels">

              <div className="h-60">

                <ResponsiveContainer width="100%" height="100%">

                  <PieChart>

                    <Pie
                      data={metrics.channels}
                      dataKey="value"
                      innerRadius={50}
                      outerRadius={80}
                    >

                      {metrics.channels.map((entry, index) => (

                        <Cell
                          key={index}
                          fill={
                            COLORS[index % COLORS.length]
                          }
                        />
                      ))}
                    </Pie>

                    <Tooltip />

                  </PieChart>

                </ResponsiveContainer>

              </div>

            </ChartCard>

            <ChartCard title="Top Countries">

              <div className="h-60">

                <ResponsiveContainer width="100%" height="100%">

                  <BarChart data={metrics.countries}>

                    <XAxis dataKey="name" stroke="#64748B" />

                    <Tooltip />

                    <Bar
                      dataKey="value"
                      fill="#3B82F6"
                      radius={[8,8,0,0]}
                    />

                  </BarChart>

                </ResponsiveContainer>

              </div>

            </ChartCard>

            <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-5">

              <p className="text-red-400 text-xs uppercase tracking-[0.2em]">
                Operational Risks
              </p>

              <div className="grid grid-cols-2 gap-4 mt-4">

                <div>
                  <p className="text-slate-400 text-xs">
                    Cancellations
                  </p>

                  <h2 className="text-2xl font-bold mt-2">
                    {metrics.cancellations}
                  </h2>
                </div>

                <div>
                  <p className="text-slate-400 text-xs">
                    No Shows
                  </p>

                  <h2 className="text-2xl font-bold mt-2">
                    {metrics.noShows}
                  </h2>
                </div>

              </div>

            </div>

          </>
        )}
      </div>
    </div>
  )
}

function Card({ title, value }) {

  return (
    <div className="bg-slate-900 rounded-3xl p-4">

      <p className="text-slate-400 text-xs">
        {title}
      </p>

      <h2 className="text-2xl font-bold mt-2">
        {value}
      </h2>

    </div>
  )
}

function ChartCard({ title, children }) {

  return (
    <div className="bg-slate-900 rounded-3xl p-5">

      <h2 className="text-xl font-semibold">
        {title}
      </h2>

      <div className="mt-4">
        {children}
      </div>

    </div>
  )
}

import { LayoutDashboard, Bell, Building2, TrendingUp } from 'lucide-react'

export default function ExecutiveMobileDashboard() {
  return (
    <div className="min-h-screen bg-black text-white pb-24">
      <div className="max-w-md mx-auto px-4 pt-6 space-y-5">

        <div className="flex items-center justify-between">
          <div>
            <p className="text-green-400 text-xs tracking-[0.25em] uppercase">
              Hospitality Intelligence
            </p>
            <h1 className="text-3xl font-bold mt-1">
              Executive Dashboard
            </h1>
          </div>

          <div className="w-14 h-14 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center">
            <LayoutDashboard className="w-6 h-6 text-green-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {[
            ['Revenue', '₹1.92Cr'],
            ['Occupancy', '79%'],
            ['ADR', '₹9,850'],
            ['VIP Guests', '48']
          ].map(([title, value]) => (
            <div
              key={title}
              className="bg-slate-900 border border-slate-800 rounded-3xl p-4"
            >
              <p className="text-slate-400 text-xs">{title}</p>
              <h2 className="text-2xl font-bold mt-3">{value}</h2>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">
                Portfolio Snapshot
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Real-time PMS metrics
              </p>
            </div>

            <TrendingUp className="w-5 h-5 text-slate-500" />
          </div>

          <div className="h-44 rounded-2xl bg-gradient-to-br from-green-500/20 to-blue-500/10 border border-slate-800 flex items-end p-4 gap-2">
            {[20,24,16,28,36,32,40].map((h,i)=>(
              <div
                key={i}
                className="bg-green-400 w-6 rounded-t-xl"
                style={{height:`${h*4}px`}}
              />
            ))}
          </div>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold">
              Top Properties
            </h2>

            <Building2 className="w-5 h-5 text-slate-500" />
          </div>

          <div className="space-y-3">
            {[
              ['Hard Rock Goa','₹72L'],
              ['Hyatt Centric BLR','₹61L']
            ].map(([name,revenue])=>(
              <div
                key={name}
                className="bg-slate-950 border border-slate-800 rounded-2xl p-4"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">{name}</h3>
                    <p className="text-slate-400 text-sm mt-1">
                      Strong demand pickup
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="font-bold text-lg">{revenue}</p>
                    <p className="text-green-400 text-xs mt-1">
                      Revenue
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-red-500/10 border border-red-500/20 rounded-3xl p-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-red-400 text-xs uppercase tracking-[0.2em]">
                Critical Alerts
              </p>

              <h2 className="text-lg font-semibold mt-2">
                Breakfast complaints increasing
              </h2>
            </div>

            <Bell className="w-5 h-5 text-red-400" />
          </div>
        </div>
      </div>
    </div>
  )
}

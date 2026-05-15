import { AreaChart, Area, ResponsiveContainer, PieChart, Pie, Cell, Tooltip, XAxis } from 'recharts';
import { LayoutDashboard, Building2, Bell, User } from 'lucide-react';

export default function PaskaMobileDashboard() {
  const kpis = [
    { title: 'Revenue', value: '₹1.92Cr', change: '+12%' },
    { title: 'Occupancy', value: '79%', change: '+4%' },
    { title: 'ADR', value: '₹9,850', change: '+6%' },
    { title: 'RevPAR', value: '₹7,781', change: '+9%' },
  ];

  const trend = [
    { day: 'M', value: 40 },
    { day: 'T', value: 52 },
    { day: 'W', value: 48 },
    { day: 'T', value: 71 },
    { day: 'F', value: 82 },
    { day: 'S', value: 95 },
    { day: 'S', value: 88 },
  ];

  const channelMix = [
    { name: 'OTA', value: 45 },
    { name: 'Direct', value: 35 },
    { name: 'Corp', value: 20 },
  ];

  const colors = ['#22C55E', '#3B82F6', '#F59E0B'];

  return (
    <div className="min-h-screen bg-black text-white pb-24">
      <div className="max-w-md mx-auto p-4 space-y-5">
        <div className="flex items-center justify-between pt-4">
          <div>
            <p className="text-green-400 text-sm font-medium">LIVE PORTFOLIO</p>
            <h1 className="text-3xl font-bold mt-1">PASKA Control Tower</h1>
          </div>

          <div className="w-14 h-14 rounded-3xl bg-slate-900 border border-slate-800 flex items-center justify-center">
            <LayoutDashboard className="w-6 h-6 text-green-400" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          {kpis.map((kpi) => (
            <div key={kpi.title} className="bg-slate-900 rounded-3xl p-4 border border-slate-800">
              <p className="text-slate-400 text-xs">{kpi.title}</p>
              <h2 className="text-2xl font-bold mt-2">{kpi.value}</h2>
              <p className="text-green-400 text-sm mt-1">{kpi.change}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900 rounded-3xl p-5 border border-slate-800">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-xl font-semibold">Revenue Trend</h2>
              <p className="text-slate-400 text-sm">Last 7 days</p>
            </div>
          </div>

          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={trend}>
                <XAxis dataKey="day" stroke="#64748B" />
                <Tooltip />
                <Area type="monotone" dataKey="value" stroke="#22C55E" fill="#22C55E33" strokeWidth={3} />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="bg-slate-900 rounded-3xl p-5 border border-slate-800">
          <h2 className="text-xl font-semibold mb-4">Channel Mix</h2>

          <div className="h-52">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={channelMix} dataKey="value" innerRadius={50} outerRadius={80}>
                  {channelMix.map((entry, index) => (
                    <Cell key={index} fill={colors[index % colors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-slate-950 border-t border-slate-800 px-6 py-4 flex items-center justify-between">
        <button className="text-green-400 flex flex-col items-center gap-1 text-xs">
          <LayoutDashboard className="w-5 h-5" />
          Dashboard
        </button>

        <button className="text-slate-500 flex flex-col items-center gap-1 text-xs">
          <Building2 className="w-5 h-5" />
          Properties
        </button>

        <button className="text-slate-500 flex flex-col items-center gap-1 text-xs">
          <Bell className="w-5 h-5" />
          Alerts
        </button>

        <button className="text-slate-500 flex flex-col items-center gap-1 text-xs">
          <User className="w-5 h-5" />
          Profile
        </button>
      </div>
    </div>
  );
}

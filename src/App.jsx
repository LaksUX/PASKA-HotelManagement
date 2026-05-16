import { useState } from 'react'

export default function App() {

  const [count] = useState(0)

  return (
    <div className="min-h-screen bg-black text-white p-6">
      <h1 className="text-3xl font-bold">
        PASKA Dashboard
      </h1>

      <p className="mt-4">
        Count: {count}
      </p>
    </div>
  )
}

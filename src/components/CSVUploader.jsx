import Papa from 'papaparse'

export default function CSVUploader({ onData }) {

  const handleFile = (e) => {

    const file = e.target.files[0]

    if (!file) return

    Papa.parse(file, {
      header: true,
      delimiter: '^',
      skipEmptyLines: true,

      complete: (results) => {
        onData(results.data)
      }
    })
  }

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-3xl p-5">

      <h2 className="text-xl font-semibold">
        Upload PMS Export
      </h2>

      <p className="text-slate-400 text-sm mt-2">
        Upload Opera / PMS reservation export
      </p>

      <input
        type="file"
        accept=".csv"
        onChange={handleFile}
        className="mt-5 block w-full text-sm text-slate-300"
      />
    </div>
  )
}

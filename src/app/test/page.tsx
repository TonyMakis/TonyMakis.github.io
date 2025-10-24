export default function TestPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-400 via-purple-500 to-pink-500 flex items-center justify-center">
      <div className="bg-white border-4 border-black shadow-lg p-8 rounded-lg">
        <h1 className="text-4xl font-bold text-black mb-4">Tailwind Test</h1>
        <p className="text-lg text-gray-700 mb-4">If you can see this styled properly, Tailwind is working!</p>
        <button className="bg-yellow-400 border-2 border-black px-4 py-2 font-bold uppercase">
          Test Button
        </button>
      </div>
    </div>
  )
}

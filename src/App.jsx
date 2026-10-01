import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="bg-neutral-800 min-h-screen flex flex-col justify-center items-center text-center">

        {/* Container Logo */}
        <div className="flex items-center justify-center space-x-8 mb-12">
          <a href="https://vite.dev" target="_blank" rel="noreferrer">
            <img src={viteLogo} className="w-24 h-24" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noreferrer">
            <img
              src={reactLogo}
              className="w-24 h-24 animate-spin"
              style={{ animationDuration: '10s' }}
              alt="React logo"
            />
          </a>
        </div>

        {/* Judul Utama */}
        <h1 className="text-5xl font-bold text-white mb-16">
          Vite + React
        </h1>

        {/* Subtitle */}
        <h2 className="text-xl text-neutral-400 mb-6">
          Cek Vercel
        </h2>

        {/* Counter & Subtext */}
        <div className="space-y-6 mb-8">
          <button
            onClick={() => setCount((count) => count + 1)}
            className="bg-neutral-900 text-white py-2 px-6 rounded-lg text-lg"
          >
            count is {count}
          </button>

          <p className="text-neutral-400 text-sm">
            Edit <code className="text-white">src/App.jsx</code> and save to test HMR
          </p>
        </div>

        {/* Footer */}
        <p className="text-neutral-500 text-sm">
          Click on the Vite and React logos to learn more
        </p>

      </div>
    </>
  )
}

export default App
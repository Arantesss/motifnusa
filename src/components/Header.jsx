import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <header className="bg-white shadow sticky top-0 z-20">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img src="/images/logo.png" alt="MotifNusa" className="w-12 h-12 object-contain" />
          <div>
            <h1 className="text-lg font-semibold">MotifNusa</h1>
            <p className="text-xs text-gray-500 -mt-1">Ragam Motif Batik Nusantara</p>
          </div>
        </div>

        <nav className="text-sm text-gray-600">
          <Link to="/" className="mr-4 hover:text-gray-800">Beranda</Link>
          <Link to="/about" className="hover:text-gray-800">Tentang</Link>
        </nav>
      </div>
    </header>
  )
}

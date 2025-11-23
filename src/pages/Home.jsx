import React, { useState } from 'react'
import Hero from '../components/Hero'
import Gallery from '../components/Gallery'
import { batikList } from '../data/batik'

export default function Home() {
  const [query, setQuery] = useState('')
  const filtered = batikList.filter(b => 
    b.name.toLowerCase().includes(query.toLowerCase()) || b.region.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <Hero />

      <section className="mt-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Galeri Motif</h2>
          <input
            type="search"
            placeholder="Cari motif atau daerah..."
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="border rounded px-3 py-2 w-64"
          />
        </div>
        <Gallery items={filtered} />
      </section>
    </div>
  )
}

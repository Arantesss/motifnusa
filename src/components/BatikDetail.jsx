import React from 'react'
import { useParams, Link } from 'react-router-dom'
import { batikList } from '../data/batik'

export default function BatikDetail(){
  const { id } = useParams()
  const batik = batikList.find(b => b.id === id)
  if (!batik) return <div className="p-8">Batik tidak ditemukan</div>

  return (
    <div className="max-w-4xl mx-auto p-6">
      <Link to="/" className="text-sm text-amber-600">← Kembali</Link>
      <img src={batik.image} alt={batik.name} className="w-full h-96 object-cover rounded mt-4" />
      <h1 className="text-2xl font-bold mt-4">{batik.name}</h1>
      <p className="text-sm text-gray-500">{batik.region}</p>
      <p className="mt-4 text-gray-700">{batik.description}</p>
    </div>
  )
}

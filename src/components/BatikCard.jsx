import React from 'react'
import { Link } from 'react-router-dom'

export default function BatikCard({ batik }){
  return (
    <article className="bg-white rounded-xl shadow-sm overflow-hidden">
      <img src={batik.image} alt={batik.name} className="w-full h-44 object-cover" loading="lazy" />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{batik.name}</h3>
        <p className="text-sm text-gray-500">{batik.region}</p>
        <p className="mt-2 text-sm text-gray-700 line-clamp-3">{batik.description}</p>
        <div className="mt-3">
          <Link to={`/batik/${batik.id}`} className="text-amber-600 text-sm">Detail →</Link>
        </div>
      </div>
    </article>
  )
}

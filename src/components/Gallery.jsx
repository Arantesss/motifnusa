import React from 'react'
import BatikCard from './BatikCard'

export default function Gallery({ items }){
  return (
    <div id="gallery" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map(i => (
        <BatikCard key={i.id} batik={i} />
      ))}
    </div>
  )
}

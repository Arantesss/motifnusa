import React from 'react'

export default function Hero(){
  return (
    <section className="bg-amber-50 rounded-2xl p-8 flex items-center gap-6">
      <img src="/images/logo.png" alt="MotifNusa" className="w-36 h-36 object-contain" />
      <div>
        <h1 className="text-3xl font-extrabold">MotifNusa</h1>
        <p className="mt-2 text-gray-600">Jelajahi ragam motif batik Indonesia — sejarah, makna, dan asal daerahnya.</p>
        <div className="mt-4">
          <a href="#gallery" className="inline-block px-4 py-2 bg-amber-600 text-white rounded-lg">Mulai Jelajah</a>
        </div>
      </div>
    </section>
  )
}

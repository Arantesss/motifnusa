import React from "react";

export default function Footer() {
  return (
    <footer className="bg-amber-700 dark:bg-gray-900 text-white mt-16 py-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          <div>
            <h3 className="text-lg font-bold mb-3">MotifNusa</h3>
            <p className="text-sm leading-relaxed">
              Platform edukasi yang mengenalkan keindahan 
              batik Nusantara dari Sabang hingga Merauke.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Navigasi</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:underline">Beranda</a></li>
              <li><a href="/about" className="hover:underline">Tentang</a></li>
              <li><a href="/contact" className="hover:underline">Kontak</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Kontak</h3>
            <p className="text-sm">Email: motifnusa@gmail.com</p>
            <p className="text-sm">Instagram: @motifnusa.id</p>
            <p className="text-sm">© {new Date().getFullYear()} MotifNusa</p>
          </div>

        </div>
      </div>
    </footer>
  );
}

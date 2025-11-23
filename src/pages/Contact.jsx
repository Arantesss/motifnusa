import React, { useState } from "react";

export default function Contact() {
  const [successMessage, setSuccessMessage] = useState("");

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6 text-amber-700 dark:text-amber-400">
        Kontak Kami
      </h1>

      <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
        Jika Anda ingin memberikan masukan, bekerja sama, atau ingin menambahkan 
        motif batik dari daerah Anda, silakan hubungi kami melalui formulir di bawah.
      </p>

      {/* Notifikasi Pesan Berhasil */}
      {successMessage && (
        <div className="mb-4 p-3 rounded-lg bg-green-600 text-white text-sm shadow">
          {successMessage}
        </div>
      )}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setSuccessMessage("Pesan Anda berhasil terkirim! Terima kasih 😊");

          e.target.reset();

          setTimeout(() => setSuccessMessage(""), 4000);
        }}
        className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
      >
        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300">
            Nama Lengkap
          </label>
          <input
            type="text"
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 
                       border border-gray-300 dark:border-gray-600"
            placeholder="Nama Anda"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300">
            Email
          </label>
          <input
            type="email"
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 
                       border border-gray-300 dark:border-gray-600"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label className="block font-medium text-gray-700 dark:text-gray-300">
            Pesan
          </label>
          <textarea
            rows="4"
            className="w-full p-2 rounded bg-gray-100 dark:bg-gray-700 
                       border border-gray-300 dark:border-gray-600"
            placeholder="Tulis pesan Anda"
          ></textarea>
        </div>

        <button
          className="px-5 py-2 bg-amber-600 hover:bg-amber-700 
                     text-white rounded shadow transition"
        >
          Kirim Pesan
        </button>
      </form>
    </div>
  );
}

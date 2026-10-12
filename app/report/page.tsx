import React from "react";

export default function page() {
  return (
    <div id="tab-report" className="space-y-4">
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 text-rose-600 font-bold text-sm mb-2">
          <i className="fa-solid fa-triangle-exclamation"></i>
          <h3>Lapor Kualitas Makanan MBG</h3>
        </div>
        <p className="text-xs text-slate-600 mb-4">
          Laporkan jika menemukan makanan basi, porsi kurang, atau kendala
          kebersihan untuk evaluasi dapur MBG.
        </p>

        {/* <!-- Success Toast Notification --> */}
        <div
          id="reportSuccessAlert"
          className="hidden bg-emerald-50 border border-emerald-200 text-emerald-800 p-3 rounded-xl text-xs flex items-center gap-2 mb-3"
        >
          <i className="fa-solid fa-circle-check text-emerald-600 text-base"></i>
          <span>
            Laporan berhasil dikirim ke Sistem Pengawasan Badan Gizi Nasional!
          </span>
        </div>

        <form data-submit="submitReport(event)" className="space-y-3">
          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Kategori Keluhan
            </label>
            <select
              id="reportCategory"
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-emerald-500 outline-none"
            >
              <option>Makanan Kurang Matang / Basi</option>
              <option>Porsi Kurang Dari Standar AKG</option>
              <option>Aroma Bau Tidak Sedap</option>
              <option>Ditemukan Benda Asing</option>
              <option>Kemasan / Ompreng Kotor</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Deskripsi Laporan
            </label>
            {/* <textarea
              id="reportDesc"
              rows="3"
              placeholder="Tuliskan catatan kondisi makanan..."
              className="w-full text-xs p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-emerald-500 outline-none"
            ></textarea> */}
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 mb-1">
              Unggah Lampiran Bukti (Opsional)
            </label>
            <div className="border-2 border-dashed border-slate-300 rounded-xl p-3 text-center bg-slate-50 cursor-pointer hover:bg-slate-100 transition">
              <i className="fa-solid fa-cloud-arrow-up text-slate-400 text-xl mb-1"></i>
              <span className="block text-xs text-slate-500">
                Klik untuk melampirkan foto
              </span>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-rose-600 hover:bg-rose-700 text-white font-bold py-2.5 rounded-xl text-xs transition shadow-sm"
          >
            Kirim Laporan ke Badan Gizi Nasional (BGN)
          </button>
        </form>
      </div>
    </div>
  );
};
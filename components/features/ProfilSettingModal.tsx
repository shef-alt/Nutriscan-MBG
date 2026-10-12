import React from 'react'

export default function ProfilSettingModal() {
  return (
    <div id="profileModal" className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center hidden">
            <div className="bg-white rounded-3xl p-5 max-w-xs mx-4 space-y-3 shadow-2xl w-full">
                <div className="flex justify-between items-center border-b pb-2">
                    <div className="flex items-center gap-2">
                        <i className="fa-solid fa-user-gear text-emerald-600"></i>
                        <h4 className="font-bold text-slate-800 text-sm">Pengaturan Profil Siswa</h4>
                    </div>
                    <button data-role="closeProfileModal()" className="text-slate-400 hover:text-slate-600"><i className="fa-solid fa-xmark text-base"></i></button>
                </div>
                
                <form data-submit="saveProfile(event)" className="space-y-3 text-xs">
                    <div>
                        <label className="block font-bold text-slate-700 mb-1">Nama Lengkap Siswa</label>
                        <input type="text" id="inputProfileName" value="Bagas Prabowo" required className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-emerald-500 outline-none" />
                    </div>

                    <div>
                        <label className="block font-bold text-slate-700 mb-1">Asal Sekolah</label>
                        <input type="text" id="inputProfileSchool" value="SMA 67 Ohio" required className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-emerald-500 outline-none" />
                    </div>

                    <div>
                        <label className="block font-bold text-slate-700 mb-1">Lokasi Dapur SPPG MBG</label>
                        <select id="inputProfileSPPG" className="w-full p-2.5 rounded-xl border border-slate-300 bg-slate-50 focus:ring-2 focus:ring-emerald-500 outline-none">
                            <option value="SPPG Dapur Menteng 01">SPPG Dapur Menteng 01</option>
                            <option value="SPPG Dapur Kebayoran Baru">SPPG Dapur Kebayoran Baru</option>
                            <option value="SPPG Dapur Sleman Utama">SPPG Dapur Sleman Utama</option>
                            <option value="SPPG Dapur Surabaya Barat">SPPG Dapur Surabaya Barat</option>
                            <option value="SPPG Dapur Bandung Mentari">SPPG Dapur Bandung Mentari</option>
                        </select>
                    </div>

                    <div className="pt-1 flex gap-2">
                        <button type="button" data-role="closeProfileModal()" className="w-1/2 bg-slate-200 text-slate-700 font-bold py-2 rounded-xl">Batal</button>
                        <button type="submit" className="w-1/2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 rounded-xl shadow-sm">Simpan</button>
                    </div>
                </form>
            </div>
        </div>
  )
}

import React from "react";

export default function Header() {
  return (
    <header className="bg-gradient-to-r from-emerald-600 to-teal-700 text-white p-4 pt-5 rounded-b-3xl shadow-md sticky top-0 z-30">
      {/* <!-- Mobile App Header --> */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          {/* <!-- Vector Cartoon Student Avatar --> */}
          <div className="w-11 h-11 rounded-full bg-emerald-100/90 p-1 flex items-center justify-center border-2 border-white shadow-inner relative">
            <svg
              className="w-8 h-8 text-emerald-800"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 2a5 5 0 1 0 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1z" />
            </svg>
            <span className="absolute bottom-0 right-0 bg-amber-400 w-3.5 h-3.5 rounded-full border-2 border-white"></span>
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <h2 className="font-bold text-base leading-tight">
                Bagas Prabowo
              </h2>
              <span className="bg-emerald-800/60 text-[10px] px-2 py-0.5 rounded-full font-semibold border border-emerald-400/40">
                SMA 67 Ohio
              </span>
            </div>
            <p className="text-xs text-emerald-100 flex items-center gap-1 mt-0.5">
              <i className="fa-solid fa-fire text-amber-300 text-xs"></i> Streak
              Sehat: <span className="font-bold text-white">6 Hari</span>
            </p>
          </div>
        </div>
        <button
          data-role="openNotificationModal()"
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition relative"
        >
          <i className="fa-regular fa-bell text-lg"></i>
          <span className="absolute top-2 right-2 w-2 h-2 bg-rose-500 rounded-full"></span>
        </button>
      </div>

      {/* <!-- Header Badge Info --> */}
      <div className="mt-3 bg-white/15 backdrop-blur-md rounded-xl p-2.5 flex items-center justify-between text-xs border border-white/20">
        <div className="flex items-center gap-2">
          <span className="bg-amber-400 text-slate-900 font-extrabold px-2 py-0.5 rounded-md text-[10px] tracking-wide">
            MBG NUTRISCAN
          </span>
          <span className="text-emerald-50 text-[11px]">
            Menu: Ayam Kecap, Capcay & Susu
          </span>
        </div>
        <i className="fa-solid fa-circle-info text-emerald-200 text-xs"></i>
      </div>
    </header>
  );
};
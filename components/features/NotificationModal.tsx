import React from "react";

export default function NotificationModal() {
  return (
    <div
      id="notifModal"
      className="fixed inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center hidden"
    >
      <div className="bg-white rounded-3xl p-5 max-w-xs mx-4 space-y-3 shadow-2xl w-full">
        <div className="flex justify-between items-center border-b pb-2">
          <h4 className="font-bold text-slate-800 text-sm">
            Pemberitahuan MBG
          </h4>
          <button
            data-role="closeNotifModal()"
            className="text-slate-400 hover:text-slate-600"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="space-y-2 text-xs">
          <div className="bg-emerald-50 p-2.5 rounded-xl border border-emerald-100">
            <span className="font-bold text-emerald-800 block">
              Dapur MBG Ohio
            </span>
            <p className="text-emerald-700 mt-0.5">
              Menu esok hari: Nasi, Semur Daging Sapi, Sup Bayam & Buah Jeruk.
            </p>
          </div>
        </div>
        <button
          data-role="closeNotifModal()"
          className="w-full bg-slate-800 text-white font-bold py-2 rounded-xl text-xs"
        >
          Tutup
        </button>
      </div>
    </div>
  );
};

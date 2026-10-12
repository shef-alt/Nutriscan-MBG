import React from "react";

export default function AnalysisModal() {
  return (
    <div
      id="simulatedLoadingModal"
      className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center"
    >
      <div className="bg-white rounded-3xl p-6 text-center max-w-xs mx-4 space-y-3 shadow-2xl">
        <div className="w-14 h-14 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin mx-auto"></div>
        <h4 className="font-bold text-slate-800 text-sm">
          Menganalisis Foto Ompreng...
        </h4>
        <p className="text-xs text-slate-500 leading-relaxed">
          Sistem AI sedang memproses foto ompreng dan menghitung estimasi
          gizi...
        </p>
      </div>
    </div>
  );
};

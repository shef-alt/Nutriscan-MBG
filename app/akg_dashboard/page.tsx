import React from "react";
import WeeklyChart from "@/components/features/WeeklyChart";

export default function page() {
  return (
    <div id="tab-dashboard" className="space-y-4">
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
        <h3 className="font-bold text-slate-800 text-sm mb-1">
          Target Kecukupan Gizi Harian (AKG)
        </h3>
        <p className="text-xs text-slate-500 mb-3">
          Rekomendasi Kemenkes RI untuk Anak Usia Sekolah (7-12 Tahun).
        </p>

        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-slate-700">
                Kalori (1,450 / 1,800 kcal)
              </span>
              <span className="text-emerald-600 font-bold">80%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5">
              <div className="bg-emerald-500 h-2.5 rounded-full w-[80%]"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-slate-700">
                Protein (42g / 45g)
              </span>
              <span className="text-blue-600 font-bold">93%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5">
              <div className="bg-blue-500 h-2.5 rounded-full  w-[93%]"></div>
            </div>
          </div>

          <div>
            <div className="flex justify-between text-xs mb-1">
              <span className="font-semibold text-slate-700">
                Kalsium & Vitamin D
              </span>
              <span className="text-amber-600 font-bold">65%</span>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2.5">
              <div className="bg-amber-400 h-2.5 rounded-full  w-[65%]"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200">
        <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider mb-3">
          Grafik Skor Gizi MBG Minggu Ini
        </h4>
        <div className="h-44">
          <WeeklyChart />
        </div>
      </div>
    </div>
  );
};

import React from "react";

export default function page() {
  return (
    <div id="tab-edu" className="space-y-4">
      <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white p-4 rounded-2xl shadow-sm space-y-2">
        <span className="bg-white/20 text-white text-[10px] px-2 py-0.5 rounded-full font-bold">
          EDUKASI GIZI ANAK
        </span>
        <h4 className="font-bold text-sm">Mengapa Susu MBG Penting?</h4>
        <p className="text-xs text-teal-50 leading-relaxed">
          Susu kaya Kalsium dan Protein yang membantu pertumbuhan tulang serta
          daya ingat saat belajar di sekolah!
        </p>
      </div>

      <div className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-lg">
            <i className="fa-solid fa-trophy mr-1"></i> Kuis Gizi Sehat
          </span>
          <span className="text-[10px] text-slate-400">+50 Poin</span>
        </div>

        <h4 className="font-bold text-slate-800 text-xs">
          Makanan manakah yang paling kaya Protein untuk pembentukan otot anak?
        </h4>

        <div className="space-y-2 text-xs">
          <button
            data-role="answerQuiz(false, this)"
            className="w-full text-left p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition font-medium"
          >
            A. Keripik Singkong
          </button>
          <button
            data-role="answerQuiz(true, this)"
            className="w-full text-left p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition font-medium"
          >
            B. Telur Rebus & Daging Ayam
          </button>
          <button
            data-role="answerQuiz(false, this)"
            className="w-full text-left p-2.5 rounded-xl border border-slate-200 hover:bg-slate-50 transition font-medium"
          >
            C. Permen Manis
          </button>
        </div>

        <div
          id="quizFeedback"
          className="hidden text-xs p-2.5 rounded-xl font-medium"
        ></div>
      </div>
    </div>
  );
};

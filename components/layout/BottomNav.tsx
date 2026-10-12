"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const pathname = usePathname();

  const isActive = (path: string) => pathname === path;

  return (
    <nav className="fixed bottom-0 w-full max-w-md bg-white/95 backdrop-blur-lg border-t border-slate-200 px-4 py-2 flex justify-around items-center z-40">
      <Link
        href="/"
        className={`flex flex-col items-center gap-1 transition ${
          isActive("/")
            ? "text-emerald-600 font-bold"
            : "text-slate-400 hover:text-emerald-600"
        }`}
      >
        <i className="fa-solid fa-wand-magic-sparkles text-lg"></i>
        <span className="text-[10px]">Prediksi Gizi</span>
      </Link>
      <Link
        href="/akg_dashboard"
        className={`flex flex-col items-center gap-1 transition ${
          isActive("/akg_dashboard")
            ? "text-emerald-600 font-bold"
            : "text-slate-400 hover:text-emerald-600"
        }`}
      >
        <i className="fa-solid fa-chart-pie text-lg"></i>
        <span className="text-[10px]">Gizi AKG</span>
      </Link>
      <Link
        href="/report"
        className={`flex flex-col items-center gap-1 transition ${
          isActive("/report")
            ? "text-emerald-600 font-bold"
            : "text-slate-400 hover:text-emerald-600"
        }`}
      >
        <i className="fa-solid fa-bullhorn text-lg"></i>
        <span className="text-[10px]">Lapor BGN</span>
      </Link>
      <Link
        href="/quiz"
        className={`flex flex-col items-center gap-1 transition ${
          isActive("/quiz")
            ? "text-emerald-600 font-bold"
            : "text-slate-400 hover:text-emerald-600"
        }`}
      >
        <i className="fa-solid fa-lightbulb text-lg"></i>
        <span className="text-[10px]">Edu Gizi</span>
      </Link>
    </nav>
  );
}
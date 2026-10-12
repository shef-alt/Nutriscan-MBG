import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "@/components/layout/Header";
import BottomNav from "@/components/layout/BottomNav";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NutriscanMBG",
  description: "",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-screen bg-slate-100 flex justify-center">
        {/* Main Frame Mobile App */}
        <div className="w-full max-w-md min-h-screen bg-slate-50 flex flex-col shadow-xl relative border-x border-slate-200">
          <Header />
          {/* Main Scrollable Content */}
          <main className="flex-1 p-4 space-y-4 pb-24 overflow-y-auto hide-scrollbar">
            {children}
          </main>
          <BottomNav />
        </div>
      </body>
    </html>
  );
}

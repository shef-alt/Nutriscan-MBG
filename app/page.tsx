"use client";
import Image from "next/image";
import AnalisisModal from "@/components/features/AnalysisModal";
import NotificationModal from "@/components/features/NotificationModal";
import ProfilSettingModal from "@/components/features/ProfilSettingModal";
import { useState } from "react";
import AnimatedCounter from "@/components/features/AnimatedCounter";
interface PresetItem {
  img: string;
  score: number;
  kal: string;
  protein: string;
  karbo: string;
  lemak: string;
  badge: string;
  badgeClass: string;
  count: string;
  note: string;
  items: { icon: string; color: string; name: string; portion: string }[];
}

export default function Home() {
  const presetData: Record<string, PresetItem> = {
    seimbang: {
      img: "/menu_seimbang.webp",
      score: 95,
      kal: "540",
      protein: "26g",
      karbo: "65g",
      lemak: "14g",
      badge: "Grade A • Sangat Seimbang",
      badgeClass: "bg-emerald-600 text-white",
      count: "5 Komponen",
      note: "Menu MBG ini sangat ideal memenuhi 35% kebutuhan gizi harian siswa SD. Kombinasi protein hewani dan serat mendukung stamina belajar.",
      items: [
        {
          icon: "fa-bowl-rice",
          color: "text-amber-600",
          name: "Nasi Putih Porsi Standar",
          portion: "~150g",
        },
        {
          icon: "fa-drumstick-bite",
          color: "text-rose-600",
          name: "Ayam Teriyaki",
          portion: "~80g",
        },
        {
          icon: "fa-carrot",
          color: "text-orange-500",
          name: "Sayur Tumis Buncis Wortel",
          portion: "~60g",
        },
        {
          icon: "fa-apple-whole",
          color: "text-emerald-500",
          name: "Buah Jeruk",
          portion: "1 Buah",
        },
        {
          icon: "fa-glass-water",
          color: "text-blue-500",
          name: "Susu UHT Kemasan",
          portion: "125 ml",
        },
      ],
    },
    kurang_protein: {
      img: "/menu_sedang.webp",
      score: 78,
      kal: "410",
      protein: "12g",
      karbo: "72g",
      lemak: "8g",
      badge: "Grade B • Kurang Protein",
      badgeClass: "bg-amber-500 text-white",
      count: "3 Komponen",
      note: "Serat dan vitamin sudah sangat baik, namun kadar protein hewani masih di bawah target kecukupan harian anak.",
      items: [
        {
          icon: "fa-bowl-rice",
          color: "text-amber-600",
          name: "Nasi Putih Kurang",
          portion: "~90g",
        },
        {
          icon: "fa-drumstick-bite",
          color: "text-rose-600",
          name: "Ayam Goreng Potong",
          portion: "~50g",
        },
        {
          icon: "fa-seedling",
          color: "text-emerald-600",
          name: "Tumis Sawi Putih",
          portion: "~80g",
        },
        {
          icon: "fa-apple-whole",
          color: "text-emerald-500",
          name: "Buah Pepaya Potongan",
          portion: "6 Potong",
        },
      ],
    },
    kurang_layak: {
      img: "/menu_kurang.webp",
      score: 60,
      kal: "290",
      protein: "8g",
      karbo: "45g",
      lemak: "6g",
      badge: "Grade C • Porsi Sedikit",
      badgeClass: "bg-rose-600 text-white",
      count: "2 Komponen",
      note: "Porsi makan terlihat di bawah standar BGN. Disarankan melapor via fitur Lapor BGN untuk evaluasi penyedia.",
      items: [
        {
          icon: "fa-bowl-rice",
          color: "text-amber-600",
          name: "Nasi Putih Porsi Sedang",
          portion: "~120g",
        },
        {
          icon: "fa-drumstick-bite",
          color: "text-rose-600",
          name: "Tumis Tempe Sedikit",
          portion: "~20g",
        },
        {
          icon: "fa-egg",
          color: "text-yellow-500",
          name: "Telur",
          portion: "~50g",
        },
        {
          icon: "fa-apple-whole",
          color: "text-emerald-500",
          name: "Buah Pisang",
          portion: "1 Buah",
        },
      ],
    },
  };

  const [isLoadingModal, setIsLoadingModal] = useState(false);
  const [isProfilOpen, setIsProfilOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [nutritionData, setNutritionData] = useState<PresetItem | null>(null);

  const selectVectorPreset = (key: string) => {
    setIsLoadingModal(true);

    const data = presetData[key];
    // const imgEl = document.getElementById('mealUploadedImage');
    // imgEl.src = data.img;
    // imgEl.classList.remove('hidden');
    // document.getElementById('vectorIllustrationContainer').classList.add('hidden');
    setSelectedImage(data.img);
    setTimeout(() => {
      setNutritionData(data);
      setIsLoadingModal(false);
    }, 2000);
  };
  return (
    <>
      <div id="tab-scan" className="space-y-4">
        {/* <!-- Info Banner --> */}
        <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-3 flex items-start gap-2 text-xs text-emerald-800">
          <i className="fa-solid fa-wand-magic-sparkles text-emerald-600 text-base mt-0.5"></i>
          <div> 
            <span className="font-bold block text-emerald-950">
              Pindai & Prediksi Gizi MBG:
            </span>
            <p className="text-[11px] leading-relaxed text-emerald-700">
              Unggah foto makanan atau ompreng MBG. Algoritma AI vision akan
              memindai dan menghitung estimasi gizi secara otomatis!
            </p>
          </div>
        </div>

        {/* <!-- Action Card for Photo Upload --> */}
        <div className="bg-gradient-to-br from-amber-50 to-emerald-50 border border-emerald-200/70 rounded-2xl p-4 shadow-sm relative overflow-hidden">
          <div className="flex justify-between items-start z-10 relative">
            <div className="max-w-[70%]">
              <span className="text-[10px] font-bold text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md uppercase tracking-wider">
                Prediksi AI Visual
              </span>
              <h3 className="font-bold text-slate-800 text-base mt-1">
                Pindai Foto Ompreng MBG
              </h3>
              <p className="text-xs text-slate-600 mt-1">
                Ambil atau pilih foto dari perangkat untuk kalkulasi gizi
                otomatis.
              </p>
              <p className="text-xs text-red-500 mt-1">
                *Masih dalam tahap simulasi
              </p>
            </div>
            <div className="w-12 h-12 bg-emerald-500/10 rounded-2xl flex items-center justify-center text-emerald-600 text-2xl border border-emerald-300/40">
              <i className="fa-solid fa-camera-retro"></i>
            </div>
          </div>

          {/* <!-- Trigger Buttons for Upload --> */}
          <div className="mt-4 grid grid-cols-2 gap-2">
            {/* <label for="mockCameraInput" className="cursor-pointer bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 px-3 rounded-xl font-medium text-xs flex items-center justify-center gap-2 shadow-sm transition active:scale-95">
                            <i className="fa-solid fa-camera text-sm"></i>
                            <span>Ambil Foto</span>
                            <input type="file" id="mockCameraInput" accept="image/*" capture="environment" className="hidden" onchange="runSimulatedScan(event)">
                        </label>
                        <label for="mockGalleryInput" className="cursor-pointer bg-slate-800 hover:bg-slate-900 text-white py-2.5 px-3 rounded-xl font-medium text-xs flex items-center justify-center gap-2 shadow-sm transition active:scale-95">
                            <i className="fa-solid fa-file-image text-sm"></i>
                            <span>Pilih Dari Galeri</span>
                            <input type="file" id="mockGalleryInput" accept="image/*" className="hidden" onchange="runSimulatedScan(event)">
                        </label> */}
          </div>
        </div>

        {/* <!-- Sample Vector Preset Selection --> */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">
              Atau Pilih Sampel Ompreng:
            </h4>
            <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-full">
              3 Varian Menu
            </span>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {/* <!-- Sample 1: Menu Seimbang Card --> */}
            <button
              onClick={() => selectVectorPreset("seimbang")}
              className="bg-white p-2 rounded-2xl border border-slate-200 hover:border-emerald-500 transition text-left shadow-sm group relative overflow-hidden"
            >
              <Image
                src="/menu_seimbang.webp"
                width={1200}
                height={675}
                className="rounded-xl w-full h-16 object-cover mb-1.5"
                alt="Menu Seimbang"
              />
              <p className="text-[11px] font-bold text-slate-800 truncate">
                Menu Seimbang
              </p>
              <span className="text-[9px] text-emerald-700 font-extrabold bg-emerald-100 px-1.5 py-0.5 rounded">
                Skor: A (95)
              </span>
            </button>

            {/* <!-- Sample 2: Dominan Sayur Card --> */}
            <button
              onClick={() => selectVectorPreset("kurang_protein")}
              className="bg-white p-2 rounded-2xl border border-slate-200 hover:border-amber-500 transition text-left shadow-sm group relative overflow-hidden"
            >
              <Image
                src="/menu_sedang.webp"
                width={12000}
                height={675}
                className="rounded-xl w-full h-16 object-cover mb-1.5"
                alt="Dominan Sayur"
              />
              <p className="text-[11px] font-bold text-slate-800 truncate">
                Dominan Sayur
              </p>
              <span className="text-[9px] text-amber-700 font-extrabold bg-amber-100 px-1.5 py-0.5 rounded">
                Skor: B (78)
              </span>
            </button>

            {/* <!-- Sample 3: Porsi Kurang Card --> */}
            <button
              onClick={() => selectVectorPreset("kurang_layak")}
              className="bg-white p-2 rounded-2xl border border-slate-200 hover:border-rose-500 transition text-left shadow-sm group relative overflow-hidden"
            >
              <Image
                src="/menu_kurang.webp"
                width={645}
                height={475}
                className="rounded-xl w-full h-16 object-cover mb-1.5"
                alt="Porsi Kurang"
              />
              <p className="text-[11px] font-bold text-slate-800 truncate">
                Porsi Kurang
              </p>
              <span className="text-[9px] text-rose-700 font-extrabold bg-rose-100 px-1.5 py-0.5 rounded">
                Skor: C (60)
              </span>
            </button>
          </div>
        </div>

        {/* <!-- Analysis Results Card --> */}
        <div
          id="analysisResultCard"
          className="bg-white rounded-2xl p-4 shadow-sm border border-slate-200 space-y-3 relative overflow-hidden"
        >
          <div className="flex items-center justify-between border-b border-slate-100 pb-2.5">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
              <span className="text-xs font-bold text-slate-700">
                Hasil Prediksi Gizi AI
              </span>
            </div>
            <span id="scanTimestamp" className="text-[10px] text-slate-400">
              Baru saja dihitung
            </span>
          </div>

          {/* <!-- Display Meal Image / Vector Illustration Area --> */}
          <div className="relative rounded-2xl overflow-hidden h-44 bg-slate-900/5 border border-slate-200 flex items-center justify-center p-2">
            {/* <!-- Uploaded Image Preview --> */}
            {selectedImage ? (
              <Image
                src={selectedImage}
                fill
                className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                alt="Image Preview"
              />
            ) : (
              <div
                id="vectorIllustrationContainer"
                className="w-full h-full bg-gradient-to-tr from-emerald-100/60 via-teal-50/50 to-amber-100/40 rounded-xl flex items-center justify-center p-3 relative"
              >
                {/* <!-- Soft Cartoon MBG Meal Vector Drawing --> */}
                <div className="w-full max-w-[260px] h-32 bg-white/70 backdrop-blur-sm border-2 border-dashed border-emerald-300 rounded-2xl flex items-center justify-around p-3 shadow-inner">
                  {/* <!-- Nasi Vector --> */}
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center mx-auto text-amber-600">
                      <i className="fa-solid fa-bowl-rice text-lg"></i>
                    </div>
                    <span className="text-[9px] font-bold text-slate-600 block mt-1">
                      Karbo
                    </span>
                  </div>
                  {/* <!-- Ayam Vector --> */}
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center mx-auto text-rose-600">
                      <i className="fa-solid fa-drumstick-bite text-lg"></i>
                    </div>
                    <span className="text-[9px] font-bold text-slate-600 block mt-1">
                      Protein
                    </span>
                  </div>
                  {/* <!-- Sayur Vector --> */}
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600">
                      <i className="fa-solid fa-carrot text-lg"></i>
                    </div>
                    <span className="text-[9px] font-bold text-slate-600 block mt-1">
                      Serat
                    </span>
                  </div>
                  {/* <!-- Susu Vector --> */}
                  <div className="text-center">
                    <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center mx-auto text-blue-600">
                      <i className="fa-solid fa-glass-water text-lg"></i>
                    </div>
                    <span className="text-[9px] font-bold text-slate-600 block mt-1">
                      Kalsium
                    </span>
                  </div>
                </div>
              </div>
            )}

            {/* <!-- Fallback Vector Graphics Container --> */}
            <div
              id="vectorIllustrationContainer"
              className="hidden w-full h-full bg-gradient-to-tr from-emerald-100/60 via-teal-50/50 to-amber-100/40 rounded-xl flex items-center justify-center p-3 relative"
            >
              <div className="w-full max-w-[260px] h-32 bg-white/70 backdrop-blur-sm border-2 border-dashed border-emerald-300 rounded-2xl flex items-center justify-around p-3 shadow-inner">
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-amber-100 border border-amber-300 flex items-center justify-center mx-auto text-amber-600">
                    <i className="fa-solid fa-bowl-rice text-lg"></i>
                  </div>
                  <span className="text-[9px] font-bold text-slate-600 block mt-1">
                    Karbo
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-rose-100 border border-rose-300 flex items-center justify-center mx-auto text-rose-600">
                    <i className="fa-solid fa-drumstick-bite text-lg"></i>
                  </div>
                  <span className="text-[9px] font-bold text-slate-600 block mt-1">
                    Protein
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-emerald-100 border border-emerald-300 flex items-center justify-center mx-auto text-emerald-600">
                    <i className="fa-solid fa-carrot text-lg"></i>
                  </div>
                  <span className="text-[9px] font-bold text-slate-600 block mt-1">
                    Serat
                  </span>
                </div>
                <div className="text-center">
                  <div className="w-10 h-10 rounded-full bg-blue-100 border border-blue-300 flex items-center justify-center mx-auto text-blue-600">
                    <i className="fa-solid fa-glass-water text-lg"></i>
                  </div>
                  <span className="text-[9px] font-bold text-slate-600 block mt-1">
                    Kalsium
                  </span>
                </div>
              </div>
            </div>

            {/* <!-- Scanning Laser Line Effect Overlay --> */}
            <div id="scanningLaser" className="hidden scan-laser"></div>

            {/* <!-- Badge Quality Grade --> */}
            <div
              id="qualityBadge"
              className={`absolute top-3 right-3 ${nutritionData ? nutritionData.badgeClass : "bg-emerald-600 text-white"} font-extrabold text-[11px] px-3 py-1 rounded-full shadow-md backdrop-blur-sm`}
            >
              {nutritionData ? nutritionData.badge : "Grade A • Sangat Seimbang"}
            </div>

            {/* <!-- AI Verified Marker --> */}
            <div className="absolute bottom-3 left-3 bg-slate-900/70 backdrop-blur-md text-white text-[10px] px-2.5 py-1 rounded-lg flex items-center gap-1.5">
              <i className="fa-solid fa-circle-check text-emerald-400"></i>{" "}
              Terverifikasi Algoritma AI
            </div>
          </div>

          {/* <!-- Nutrition Score Card (Skor / 100) --> */}
          <div className="bg-gradient-to-r from-emerald-50 via-teal-50 to-emerald-100/60 p-3 rounded-xl border border-emerald-200/80 space-y-1.5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-emerald-950 flex items-center gap-1.5">
                <i className="fa-solid fa-award text-amber-500 text-sm"></i>{" "}
                Skor Keseimbangan Gizi
              </span>
              <div className="text-right flex items-baseline gap-0.5">
                <AnimatedCounter value={nutritionData ? nutritionData.score : 95} className="text-xl font-black text-emerald-700"/>
                <span className="text-xs font-extrabold text-slate-400">
                  /100
                </span>
              </div>
            </div>
            {/* <!-- Score Animated Progress Line --> */}
            <div className="w-full bg-slate-200/80 rounded-full h-2.5 overflow-hidden p-0.5 border border-emerald-100">
              <div
                id="skorProgressBar"
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-600 h-full rounded-full transition-all duration-1000 ease-out w-[95%]"
                style={{ width: `${nutritionData ? nutritionData.score : 95}%` }}
              ></div>
            </div>
          </div>

          {/* <!-- Macro Nutritional Grid --> */}
          <div className="grid grid-cols-4 gap-2 text-center pt-1">
            <div className="bg-slate-50 p-2 rounded-xl border border-slate-200/80">
              <span className="text-[10px] text-slate-500 block">Kalori</span>
              <AnimatedCounter value={nutritionData ? nutritionData.kal : "540"} className="font-extrabold text-sm text-slate-800" />
              <span className="text-[9px] text-slate-400 block">kcal</span>
            </div>
            <div className="bg-emerald-50 p-2 rounded-xl border border-emerald-100">
              <span className="text-[10px] text-emerald-700 block">
                Protein
              </span>
              <AnimatedCounter value={nutritionData ? nutritionData.protein : "26g"} suffix="g" className="font-extrabold text-sm text-emerald-800" />
              <span className="text-[9px] text-emerald-600 block">
                Ayam/Susu
              </span>
            </div>
            <div className="bg-amber-50 p-2 rounded-xl border border-amber-100">
              <span className="text-[10px] text-amber-700 block">Karbo</span>
              <AnimatedCounter value={nutritionData ? nutritionData.karbo : "65g"} suffix="g" className="font-extrabold text-sm text-amber-800" />
              <span className="text-[9px] text-amber-600 block">
                Nasi Putih
              </span>
            </div>
            <div className="bg-blue-50 p-2 rounded-xl border border-blue-100">
              <span className="text-[10px] text-blue-700 block">Lemak</span>
              <AnimatedCounter value={nutritionData ? nutritionData.lemak : "14g"} suffix="g" className="font-extrabold text-sm text-blue-800" />
              <span className="text-[9px] text-blue-600 block">Sehat</span>
            </div>
          </div>

          {/* <!-- Detected Food Components List --> */}
          <div className="space-y-2 pt-1">
            <div className="flex items-center justify-between">
              <h5 className="text-xs font-bold text-slate-700">
                Komposisi Ompreng Terdeteksi:
              </h5>
              <span
                id="itemCountTag"
                className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded-full font-bold"
              >
                5 Komponen
              </span>
            </div>
            {nutritionData ? (nutritionData.items.map((item, i) => {
              const isBuah = item.portion.toLowerCase().includes('buah') || item.portion.toLowerCase().includes('potong');
              const isMl = item.portion.toLowerCase().includes('ml');
              const suffix = isBuah ? ' ' + item.portion.split(' ')[1] : isMl ? ' ml' : 'g';
              const prefix = item.portion.startsWith('~') ? '~' : '';

              return (
              <ul key={i} id="detectedItemsList" className="space-y-1.5 text-xs">
                <li className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span className="flex items-center gap-2">
                    <i className={`fa-solid ${item.icon} ${item.color}`}></i>{" "}
                    {item.name}
                  </span>
                  <span id="animate0" className="font-semibold text-slate-700">
                    <AnimatedCounter value={item.portion} prefix={prefix} suffix={suffix} />
                  </span>
                </li>
              </ul>
            )})
            ) : (
              <ul id="detectedItemsList" className="space-y-1.5 text-xs">
                <li className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-bowl-rice text-amber-600"></i>{" "}
                    Nasi Putih Porsi Standar
                  </span>
                  <span id="animate0" className="font-semibold text-slate-700">
                    ~150g
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-drumstick-bite text-rose-600"></i>{" "}
                    Ayam Teriyaki
                  </span>
                  <span id="animate1" className="font-semibold text-slate-700">
                    ~80g
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-carrot text-orange-500"></i> Sayur
                    Tumis Buncis Wortel
                  </span>
                  <span id="animate2" className="font-semibold text-slate-700">
                    ~60g
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-apple-whole text-emerald-500"></i>{" "}
                    Buah Jeruk
                  </span>
                  <span id="animate3" className="font-semibold text-slate-700">
                    1 Buah
                  </span>
                </li>
                <li className="flex items-center justify-between bg-slate-50 p-2 rounded-lg border border-slate-100">
                  <span className="flex items-center gap-2">
                    <i className="fa-solid fa-glass-water text-blue-500"></i>{" "}
                    Susu UHT Kemasan
                  </span>
                  <span id="animate4" className="font-semibold text-slate-700">
                    125 ml
                  </span>
                </li>
              </ul>
            )}
          </div>

          {/* <!-- AI Nutrition Recommendation Note --> */}
          <div
            id="aiRecommendationBox"
            className="bg-emerald-50/90 border border-emerald-200 rounded-xl p-3 text-xs text-emerald-900 flex items-start gap-2.5"
          >
            <i className="fa-solid fa-lightbulb text-emerald-600 mt-0.5 text-sm"></i>
            <div>
              <span className="font-bold block text-emerald-950">
                Rekomendasi Ahli Gizi:
              </span>
              <p
                id="aiNoteText"
                className="mt-0.5 text-emerald-800 leading-relaxed"
              >
                Menu MBG ini sangat ideal memenuhi 35% kebutuhan gizi harian
                siswa SD. Kombinasi protein hewani dan serat mendukung stamina
                belajar.
              </p>
            </div>
          </div>
        </div>
      </div>
      {isLoadingModal && <AnalisisModal />}
      <NotificationModal />
      {isProfilOpen && <ProfilSettingModal />}
    </>
  );
}

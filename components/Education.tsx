import React from 'react';
import { motion } from 'framer-motion';

const Education = () => {
  // Data pelatihan pendukung
  const trainings = [
    {
      year: "2025",
      title: "UI/UX Design Course",
      institution: "Learning X"
    },
    {
      year: "2025",
      title: "Data Analyst Program",
      institution: "Kementerian Komdigi (ex-Kominfo)"
    }
  ];

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white rounded-[2rem] p-6 border border-gray-100 flex flex-col sm:col-span-2 lg:col-span-1"
    >
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-gray-800">Education</h3>
        <div className="bg-blue-50 text-blue-600 px-2 py-1 rounded-md text-[10px] font-bold tracking-wider">
          GRADUATED
        </div>
      </div>

      <div className="space-y-4">
        {/* Pendidikan Terakhir Utama (Dark Card) */}
        <div className="bg-zinc-900 text-white p-5 rounded-3xl group relative overflow-hidden">
          <p className="text-[10px] opacity-60 font-mono">2023 - 2026</p>
          <p className="text-sm font-bold mt-1 tracking-wide">SMKN 2 Kota Bekasi</p>
          <p className="text-[11px] mt-0.5 italic text-blue-300 font-medium">
            Rekayasa Perangkat Lunak (Software Engineering)
          </p>
          
          <div className="mt-4 pt-3 border-t border-white/10 flex justify-between items-center">
            <span className="text-[10px] opacity-70 uppercase tracking-wider">Nilai Rata-Rata Ijazah</span>
            <span className="font-bold text-sm text-blue-400">90.00 / 100</span>
          </div>
        </div>

        {/* Bagian Pelatihan / Kursus (Light Cards) */}
        <div className="space-y-3">
          <p className="text-[11px] font-bold text-gray-400 uppercase tracking-wider px-1">Certifications & Training</p>
          
          {trainings.map((item, index) => (
            <div key={index} className="bg-gray-50 border border-gray-200 p-4 rounded-2xl flex flex-col gap-0.5">
              <span className="text-[9px] bg-gray-200/70 text-gray-600 font-mono px-2 py-0.5 rounded-full w-fit mb-1 font-bold">
                {item.year}
              </span>
              <p className="text-xs font-bold text-zinc-800">{item.title}</p>
              <p className="text-[10px] text-gray-500 font-medium">{item.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
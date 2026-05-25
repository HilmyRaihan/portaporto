import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWandMagicSparkles, faCubes, faPenNib, faCompassDrafting, faCameraRetro, faSliders } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";

export default function Expertise() {
  // Software skills pendukung (Photoshop, Illustrator, Canva, Lightroom)
  const hardSkills = [
    { icon: faCubes, color: "bg-[#31A8FF]", title: "Photoshop" }, 
    { icon: faWandMagicSparkles, color: "bg-[#FF9A00]", title: "Illustrator" }, 
    { icon: faPenNib, color: "bg-[#00C4CC]", title: "Canva" },
    { icon: faSliders, color: "bg-[#31A8FF]", title: "Lightroom" } 
  ];

  return (
    <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm h-full flex flex-col gap-5">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-bold text-gray-800">Expertise</h3>
        <FontAwesomeIcon icon={faCompassDrafting} className="text-gray-300 text-sm" />
      </div>

      {/* Figma Highlight Section (Warna diganti ke Official Dark #1E1E1E) */}
      <div className="bg-[#1E1E1E] rounded-2xl p-4 text-white relative overflow-hidden group">
        <div className="relative z-10">
          <p className="text-[10px] uppercase opacity-60 font-bold tracking-wider">Main Tool</p>
          <p className="font-black text-2xl tracking-wide">FIGMA</p>
          <div className="flex items-center gap-2 mt-2">
            {/* Menggunakan teks warna-warni logo asli Figma lewat kombinasi gradasi text jika mendukung, atau putih solid agar clean */}
            <FontAwesomeIcon icon={faFigma} className="text-white animate-pulse" />
            <span className="text-[10px] bg-white/10 px-2 py-0.5 rounded-full font-medium text-gray-300">
              UI/UX & Prototyping
            </span>
          </div>
        </div>
        {/* Ikon background besar juga dibuat sedikit samar agar kontrasnya pas */}
        <FontAwesomeIcon icon={faFigma} className="absolute right-[-10px] bottom-[-10px] text-7xl opacity-10 transform -rotate-12 group-hover:scale-110 transition-transform duration-300" />
      </div>

      {/* Software Skills Grid */}
      <div className="grid grid-cols-4 gap-2">
        {hardSkills.map((skill, i) => (
          <div 
            key={i} 
            className={`${skill.color} aspect-square rounded-xl flex flex-col items-center justify-center text-white text-lg shadow-inner group relative cursor-pointer`}
            title={skill.title}
          >
            <FontAwesomeIcon icon={skill.icon} className="group-hover:scale-110 transition-transform text-base" />
            <span className="text-[8px] font-bold mt-1 opacity-90 hidden sm:block">
              {skill.title === "Photoshop" ? "Ps" : skill.title === "Illustrator" ? "Ai" : skill.title === "Canva" ? "Cv" : "Lr"}
            </span>
          </div>
        ))}
      </div>

      {/* Interest/Hobby Section: Photography */}
      <div className="border-t border-gray-100 pt-4 flex items-center gap-3">
        <div className="bg-amber-50 text-amber-600 p-2.5 rounded-xl text-lg flex items-center justify-center">
          <FontAwesomeIcon icon={faCameraRetro} />
        </div>
        <div>
          <h4 className="text-xs font-bold text-gray-700">Photography Hobbyist</h4>
          <p className="text-[10px] text-gray-400 leading-tight">Capturing visuals, street photography, & color grading.</p>
        </div>
      </div>
    </div>
  );
}
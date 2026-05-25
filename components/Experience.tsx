import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faChevronDown, faCircleCheck } from "@fortawesome/free-solid-svg-icons";

export default function Experience() {
  // Data diurutkan dari yang terbaru (Juni - Agustus) ke yang terlama (Januari - Juni)
  const experiences = [
    { 
      period: "Juni - Agustus 2025", 
      company: "PT. Duta Kemas Indonesia", 
      role: "Warehouse Staff (Internship)", 
      description: "Mengelola administrasi pergudangan dan memastikan efisiensi alur distribusi barang." 
    },
    { 
      period: "Januari - Juni 2025", 
      company: "CV. Waras Abadi", 
      role: "IT Support (Internship)", 
      description: "Memelihara infrastruktur IT, troubleshooting perangkat keras/lunak, dan mendukung kebutuhan teknis operasional." 
    }
  ];

  return (
    <div className="bg-white rounded-[2rem] p-6 border border-gray-100 shadow-sm h-full">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-2">
          <FontAwesomeIcon icon={faBriefcase} className="text-blue-600" />
          <h3 className="text-xl font-bold text-gray-800">Experience</h3>
        </div>
        <FontAwesomeIcon icon={faChevronDown} className="text-gray-300 text-xs" />
      </div>

      <div className="space-y-4">
        {experiences.map((exp, index) => (
          <div key={index} className="bg-[#f9f9f9] rounded-2xl p-4 border border-gray-50 relative overflow-hidden">
            <div className="flex justify-between items-center mb-2">
              {/* Periode bulan ditaruh di badge biru agar lebih jelas */}
              <span className="bg-blue-600 text-white text-[10px] px-3 py-1 rounded-full font-semibold">
                {exp.period}
              </span>
              <FontAwesomeIcon icon={faCircleCheck} className="text-blue-600 text-sm" />
            </div>
            <h4 className="font-bold text-gray-700 text-sm">{exp.company}</h4>
            <p className="text-blue-600 font-semibold text-[11px] mt-0.5">{exp.role}</p>
            <p className="text-gray-500 text-[11px] leading-relaxed mt-1">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
import logo from "../images/logo.png";

export default function Footer() {

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-[#0f4c5c] via-[#2c7a7b] to-[#0b3c49] text-white py-12 px-6">

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* 🔷 LEFT SIDE - BRAND */}
        <div className="flex items-center gap-4">

          {/* LOGO */}
          <img
            src={logo}
            alt="QCardio Logo"
            className="w-14 h-14 object-contain rounded-lg shadow-md"
          />

          {/* TEXT */}
          <div>
            <h2 className="text-2xl font-bold tracking-wide">
              QCardio
            </h2>
            <p className="text-sm text-gray-200">
              AI-Powered Cardiac Diagnosis
            </p>
          </div>
        </div>

        {/* 🔷 RIGHT SIDE - CONTENT */}
        <div className="text-center md:text-right">

          {/* TITLE */}
          <h2 className="text-lg md:text-xl font-semibold mb-2">
            25-26J-522 - Research Project
          </h2>

          {/* SUBTEXT */}
          <p className="text-gray-200 text-sm mb-4">
            Deep Learning ECG Analysis for Cardiac Health Assessment in primary care approach
          </p>

          {/* QUICK LINKS */}
          <div className="flex md:justify-end justify-center gap-6 text-sm text-gray-200 flex-wrap font-bold">
            <button onClick={() => scrollToSection("hero")} className="hover:text-white transition">
              Home
            </button>
            <button onClick={() => scrollToSection("domain")} className="hover:text-white transition">
              Domain
            </button>
            <button onClick={() => scrollToSection("milestones")} className="hover:text-white transition">
              Milestones
            </button>
            <button onClick={() => scrollToSection("documents")} className="hover:text-white transition">
              Documents
            </button>
            <button onClick={() => scrollToSection("documents")} className="hover:text-white transition">
              Documents
            </button>
            <button onClick={() => scrollToSection("presentations")} className="hover:text-white transition">
              Presentations
            </button>
          </div>

        </div>

      </div>

      {/* 🔻 BOTTOM LINE */}
      <div className="border-t border-white/20 mt-10 pt-4 text-center text-xs text-gray-300">
        © {new Date().getFullYear()} QCardio Research Project. All rights reserved.
      </div>

    </footer>
  );
}
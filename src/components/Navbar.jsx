import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../images/logo.png"; // replace if needed

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("hero");

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
        const yOffset = -80;
        const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;

        window.scrollTo({ top: y, behavior: "smooth" });

        setActive(id);   // ✅ set active on click
        setOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
        setScrolled(window.scrollY > 50);

        const sections = navItems.map(item => document.getElementById(item.id));

        sections.forEach((section) => {
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
            setActive(section.id);
            }
        }
        });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const navItems = [
    { label: "Home", id: "hero" },
    { label: "Domain", id: "domain" },
    { label: "Milestones", id: "milestones" },
    { label: "Documents", id: "documents" },
    { label: "Presentations", id: "presentations" },
    { label: "About Us", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b transition duration-300
        ${
            scrolled
            ? "bg-white/70 border-gray-200 shadow-lg"
            : "bg-white/10 border-white/20"
        }`}
    >

      <div className="w-full px-6 py-3 flex justify-between items-center">

        {/* 🔷 LEFT SIDE (LOGO + TEXT) */}
        <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollToSection("hero")}>

          <img
            src={logo}
            alt="Logo"
            className="w-12 h-12 object-contain rounded-lg"
          />

          <div className="leading-tight">
            <h1 className={`text-sm md:text-lg font-semibold ${scrolled ? "text-[#0f4c5c]" : "text-white"}`}>
              25-26J-522 Research Project
            </h1>
            <p className={`text-xs ${scrolled ? "text-gray-600" : "text-gray-300"}`}>QCardio - AI-Powered Cardiac Diagnosis</p>
          </div>
        </div>

        {/* 🔷 DESKTOP MENU */}
        <div className="hidden md:flex gap-8 items-center">
        {navItems.map((item) => (
            <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`transition duration-300 font-semibold relative
                ${
                    active === item.id
                    ? "text-[#2c7a7b]"
                    : scrolled
                    ? "text-[#0f4c5c] hover:text-[#2c7a7b]"
                    : "text-white hover:text-[#9ad9db]"
                }
            `}
            >
            <span className="relative">
                {item.label}

                {active === item.id && (
                    <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#2c7a7b] rounded-full"></span>
                )}
            </span>
            </button>
        ))}
        </div>

        {/* 🔷 MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <X className={scrolled ? "text-[#0f4c5c]" : "text-white"} /> : <Menu className={scrolled ? "text-[#0f4c5c]" : "text-white"} />}
          </button>
        </div>
      </div>

      {/* 🔷 MOBILE DROPDOWN */}
      {open && (
        <div
            className={`md:hidden backdrop-blur-xl px-6 pb-6 pt-6 shadow-xl border-t transition duration-300 text-sm ${
                scrolled
                ? "bg-white/80 border-gray-200"
                : "bg-white/10 border-white/10"
            }`}
        >

          <div className="flex flex-col gap-4 text-gray-200 font-semibold">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left rounded-md transition font-semibold ${
                    active === item.id
                        ? "text-[#2c7a7b]"
                        : scrolled
                        ? "text-[#0f4c5c] hover:text-[#2c7a7b]"
                        : "text-white hover:text-[#9ad9db]"
                }`}
              >
                <span className="relative">
                    {item.label}

                    {active === item.id && (
                        <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-[#2c7a7b] rounded-full"></span>
                    )}
                </span>
              </button>
            ))}
          </div>

        </div>
      )}
    </nav>
  );
}
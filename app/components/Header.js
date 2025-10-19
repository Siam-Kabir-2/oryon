"use client";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 50);
    }
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("mobile-menu-open", menuOpen);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white border-b-[2px] border-[#22223B] py-3 shadow-[0_4px_12px_rgba(34,34,59,0.15)]"
          : "bg-transparent py-4"
      }`}
    >
      {/* Modern gradient stripe - only when scrolled */}
      {scrolled && (
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF6B6B] via-[#FFD93D] to-[#6BCB77]" />
      )}

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Clean Logo */}
          <div
            className="flex items-center gap-1 cursor-pointer transition-transform duration-300 hover:scale-105"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* Logo with clean shadow */}
            <div className="relative flex items-center gap-1 sm:gap-2">
              {/* Logo Image */}
              <div className="relative">
                <img
                  src="/logo.png"
                  alt="Oryon Logo"
                  className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,.8)] transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Logo Text - Enhanced Cartoon Style */}
              <div className="relative">
                <span
                  className="text-xl sm:text-2xl lg:text-3xl font-black text-[#22223B] font-['Fredoka_One'] relative z-10 transform hover:scale-105 transition-all duration-300"
                  style={{
                    textShadow: `
                      -2px -2px 0 #FFD93D,
                      2px -2px 0 #FFD93D,
                      -2px 2px 0 #FFD93D,
                      2px 2px 0 #FFD93D,
                      0px 0px 0 #FFD93D,
                      -1px -1px 0 #FFD93D,
                      1px -1px 0 #FFD93D,
                      -1px 1px 0 #FFD93D,
                      1px 1px 0 #FFD93D,
                      4px 4px 0px #22223B
                    `,
                  }}
                >
                  ORYON
                </span>
                {/* Decorative elements */}
                <div className="absolute -top-1 -right-1 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-[#FF6B6B] border-[1px] border-[#22223B] rounded-full animate-pulse"></div>
                <div className="absolute -bottom-1 -left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#6BCB77] border-[1px] border-[#22223B] animate-bounce"></div>
              </div>
            </div>
          </div>

          {/* Clean Navigation */}
          <nav className={`hidden md:flex ${menuOpen ? "flex" : ""}`}>
            <ul className="flex gap-4">
              {["About", "Tokenomics", "Roadmap", "Utility", "Community"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block px-4 py-2 font-bold text-[#22223B] bg-white border-[2px] border-[#22223B] rounded-[24px] transition-all duration-300 hover:bg-[#FFD93D] hover:scale-105 shadow-[2px_2px_0px_0px_#22223B] hover:shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Clean CTA Button */}
          <div className="hidden md:flex">
            <a
              href="#presale"
              className="px-6 py-3 bg-[#FF6B6B] text-white font-black border-[2px] border-[#22223B] rounded-[24px] transition-all duration-300 hover:scale-105 shadow-[3px_3px_0px_0px_#22223B] hover:shadow-[4px_4px_0px_0px_#22223B] font-['Fredoka_One']"
            >
              🚀 JOIN PRESALE!
            </a>
          </div>

          {/* Clean Mobile Menu Button */}
          <div className="md:hidden">
            <button
              className={`w-12 h-12 bg-[#FFD93D] border-[2px] border-[#22223B] rounded-[24px] text-[#22223B] text-xl transition-all duration-300 hover:scale-105 shadow-[2px_2px_0px_0px_#22223B] hover:shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One'] ${
                menuOpen ? "rotate-90" : ""
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
            </button>
          </div>
        </div>

        {/* Clean Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden mt-4 p-6 bg-white border-[2px] border-[#22223B] rounded-[24px] shadow-[4px_4px_12px_rgba(34,34,59,0.15)] animate-in slide-in-from-top duration-300">
            <ul className="flex flex-col gap-3">
              {["About", "Tokenomics", "Roadmap", "Utility", "Community"].map(
                (item, index) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="block px-4 py-3 font-bold text-[#22223B] bg-[#F8F9FA] border-[2px] border-[#22223B] rounded-[24px] transition-all duration-300 hover:bg-[#FFD93D] hover:scale-102 shadow-[2px_2px_0px_0px_#22223B] font-['Fredoka_One']"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li className="pt-3">
                <a
                  href="#presale"
                  className="block text-center px-4 py-3 bg-[#FF6B6B] border-[2px] border-[#22223B] text-white font-black rounded-[24px] shadow-[3px_3px_0px_0px_#22223B] transition-all duration-300 hover:scale-105 font-['Fredoka_One']"
                  onClick={() => setMenuOpen(false)}
                >
                  🚀 JOIN PRESALE!
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

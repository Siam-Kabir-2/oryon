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
          ? "bg-white border-b-4 border-black py-3 shadow-[0_8px_0px_0px_#000]"
          : "bg-white/95 border-b-4 border-black/50 py-4"
      }`}
    >
      {/* Comic book style top stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-red-400 via-yellow-400 to-green-400" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center">
          {/* Comic Logo */}
          <div
            className="flex items-center gap-3 cursor-pointer transition-transform duration-300 hover:scale-110 hover:-rotate-3"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            {/* Logo with comic shadow */}
            <div className="relative">
              <div className="absolute top-1 left-1 w-12 h-12 bg-black rounded-xl"></div>
              <div className="relative w-12 h-12 bg-gradient-to-br from-green-400 to-blue-400 rounded-xl border-4 border-black flex items-center justify-center text-2xl shadow-lg animate-bounce">
                🟩
              </div>
            </div>
            <span className="text-3xl font-black text-black font-['Righteous'] drop-shadow-lg transform hover:scale-105 transition-all duration-300">
              ORYON
            </span>
          </div>

          {/* Comic Navigation */}
          <nav className={`hidden md:flex ${menuOpen ? "flex" : ""}`}>
            <ul className="flex gap-6">
              {["About", "Tokenomics", "Roadmap", "Utility", "Community"].map(
                (item) => (
                  <li key={item} className="relative">
                    {/* Shadow element */}
                    <div className="absolute top-1 left-1 px-4 py-2 bg-black rounded-lg"></div>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="relative block px-4 py-2 font-bold text-black bg-yellow-300 border-3 border-black rounded-lg transition-all duration-300 hover:bg-yellow-200 hover:-translate-y-1 hover:-translate-x-1 shadow-[3px_3px_0px_0px_#000] transform hover:rotate-1"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>

          {/* Comic CTA Button */}
          <div className="hidden md:flex">
            <div className="relative">
              {/* Button shadow */}
              <div className="absolute top-2 left-2 px-6 py-3 bg-black rounded-lg"></div>
              <a
                href="#presale"
                className="relative block px-6 py-3 bg-gradient-to-r from-red-400 to-pink-400 text-black font-black border-4 border-black rounded-lg transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 shadow-[4px_4px_0px_0px_#000] transform hover:rotate-2 animate-pulse"
              >
                🚀 JOIN PRESALE!
              </a>
            </div>
          </div>

          {/* Comic Mobile Menu Button */}
          <div className="md:hidden relative">
            <div className="absolute top-1 left-1 w-12 h-12 bg-black rounded-lg"></div>
            <button
              className={`relative w-12 h-12 bg-yellow-300 border-4 border-black rounded-lg text-black text-xl transition-all duration-300 hover:bg-yellow-200 hover:-translate-y-1 hover:-translate-x-1 shadow-[3px_3px_0px_0px_#000] transform hover:rotate-12 ${
                menuOpen ? "rotate-45" : ""
              }`}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              <i className={`fas ${menuOpen ? "fa-times" : "fa-bars"}`} />
            </button>
          </div>
        </div>

        {/* Comic Mobile Navigation */}
        {menuOpen && (
          <nav className="md:hidden mt-4 p-6 bg-white border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_#000] animate-in slide-in-from-top duration-300 transform -rotate-1">
            <ul className="flex flex-col gap-4">
              {["About", "Tokenomics", "Roadmap", "Utility", "Community"].map(
                (item, index) => (
                  <li key={item} className="relative">
                    <div className="absolute top-1 left-1 w-full h-full bg-black rounded-lg"></div>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="relative block px-4 py-3 font-bold text-black bg-gradient-to-r from-blue-300 to-purple-300 border-3 border-black rounded-lg transition-all duration-300 hover:bg-yellow-300 hover:-translate-y-1 hover:-translate-x-1 shadow-[3px_3px_0px_0px_#000] transform hover:rotate-1"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li className="pt-3 relative">
                <div className="absolute top-4 left-1 w-full h-12 bg-black rounded-lg"></div>
                <a
                  href="#presale"
                  className="relative block text-center px-4 py-3 bg-gradient-to-r from-red-400 to-pink-400 border-4 border-black text-black font-black rounded-lg shadow-[4px_4px_0px_0px_#000] transition-all duration-300 hover:-translate-y-2 hover:-translate-x-2 transform hover:rotate-2 animate-pulse"
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

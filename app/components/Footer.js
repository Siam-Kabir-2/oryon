"use client";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#1a1a2e] via-[#2a2d42] to-[#1a1a2e] text-white py-16 relative overflow-hidden">
      {/* Animated top border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#00d4aa] via-[#4ecdc4] to-[#ff8c42] animate-pulse"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-4 h-4 bg-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-white rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-white rounded-full"></div>
        <div className="absolute bottom-32 right-1/3 w-5 h-5 bg-white rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Logo & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#00d4aa] to-[#4ecdc4] rounded-2xl flex items-center justify-content text-2xl animate-pulse">
                🟩
              </div>
              <span className="text-3xl font-bold bg-gradient-to-r from-[#00d4aa] to-[#4ecdc4] bg-clip-text text-transparent font-['Righteous']">
                ORYON
              </span>
            </div>
            <p className="text-white/70 leading-relaxed mb-6">
              Pioneering the intersection of blockchain technology, IoT, and
              renewable energy for a sustainable future.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#00d4aa] to-[#4ecdc4] bg-clip-text text-transparent">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {["About", "Tokenomics", "Roadmap", "Utility", "Community"].map(
                (link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase()}`}
                      className="text-white/70 hover:text-[#00d4aa] transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-[#00d4aa] to-[#4ecdc4] bg-clip-text text-transparent">
              Connect
            </h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-white/70">
                <i className="fas fa-envelope text-[#00d4aa]"></i>
                <span>info@oryon.io</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <i className="fab fa-telegram text-[#00d4aa]"></i>
                <span>@OryonOfficial</span>
              </div>
              <div className="flex items-center gap-3 text-white/70">
                <i className="fab fa-twitter text-[#00d4aa]"></i>
                <span>@OryonToken</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-8 flex flex-col lg:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} Oryon. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href="#"
              className="text-white/60 hover:text-[#00d4aa] transition-colors duration-300 text-sm"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#00d4aa] transition-colors duration-300 text-sm"
            >
              Terms of Service
            </a>
            <a
              href="#"
              className="text-white/60 hover:text-[#00d4aa] transition-colors duration-300 text-sm"
            >
              Disclaimer
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

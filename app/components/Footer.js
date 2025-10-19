"use client";

export default function Footer() {
  return (
    <footer className="bg-[#22223B] text-white py-16 relative overflow-hidden border-t-[2px] border-[#22223B]">
      {/* Comic background elements */}
      <div className="absolute inset-0">
        {/* Floating comic shapes */}
        <div className="absolute top-10 left-10 w-16 h-16 bg-[#FFD93D] border-[2px] border-[#F8F9FA] rounded-full animate-bounce shadow-lg"></div>
        <div className="absolute top-32 right-20 w-12 h-12 bg-[#FF6B6B] border-[2px] border-[#F8F9FA] rounded-[24px] transform rotate-45 animate-pulse shadow-lg"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-[#6BCB77] border-[2px] border-[#F8F9FA] rounded-[24px] animate-spin shadow-lg"></div>
        <div className="absolute bottom-32 right-1/3 w-14 h-14 bg-[#FFD93D] border-[2px] border-[#F8F9FA] rounded-full animate-bounce delay-500 shadow-lg"></div>

        {/* Comic "THE END" bubble */}
        <div className="absolute top-1/2 right-10 bg-[#FF6B6B] border-[2px] border-[#F8F9FA] rounded-[24px] p-4 shadow-[4px_4px_8px_rgba(248,249,250,0.3)] transform rotate-12">
          <p className="font-black text-sm text-white font-['Fredoka_One']">
            THE END?
          </p>
          <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#F8F9FA]"></div>
          <div className="absolute -bottom-1 left-7 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-[#FF6B6B]"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Comic Logo & Description */}
          <div className="lg:col-span-1">
            <div className="relative">
              {/* Comic logo container */}
              <div className="bg-white border-[2px] border-[#22223B] rounded-[24px] p-6 shadow-[4px_4px_12px_rgba(34,34,59,0.3)] mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-16 h-16 bg-[#6BCB77] border-[2px] border-[#22223B] rounded-[24px] flex items-center justify-center text-3xl animate-pulse shadow-[3px_3px_0px_0px_#22223B]">
                    🟩
                  </div>
                  <span className="text-4xl font-black text-[#22223B] font-['Fredoka_One']">
                    ORYON
                  </span>
                </div>
                <p className="text-[#22223B] font-medium leading-relaxed font-['Nunito_Sans']">
                  🚀 Pioneering the intersection of blockchain technology, IoT,
                  and renewable energy for a sustainable future! 🌱
                </p>
              </div>
            </div>
          </div>

          {/* Comic Quick Links */}
          <div>
            <div className="bg-[#FFD93D] border-[2px] border-[#22223B] rounded-[24px] p-6 shadow-[4px_4px_12px_rgba(34,34,59,0.3)]">
              <h3 className="text-2xl font-black mb-6 text-[#22223B] bg-[#FF6B6B] px-4 py-2 rounded-[24px] border-[2px] border-[#22223B] shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']">
                QUICK LINKS
              </h3>
              <ul className="space-y-3">
                {["About", "Tokenomics", "Roadmap", "Utility", "Community"].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="inline-block bg-white border-[2px] border-[#22223B] rounded-[24px] px-4 py-2 text-[#22223B] font-black hover:bg-[#6BCB77] hover:scale-105 transition-all duration-300 hover:shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']"
                      >
                        {link.toUpperCase()}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>
          </div>

          {/* Comic Contact Info */}
          <div>
            <div className="bg-[#6BCB77] border-[2px] border-[#22223B] rounded-[24px] p-6 shadow-[4px_4px_12px_rgba(34,34,59,0.3)]">
              <h3 className="text-2xl font-black mb-6 text-[#22223B] bg-[#FFD93D] px-4 py-2 rounded-[24px] border-[2px] border-[#22223B] shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']">
                CONNECT
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3 bg-white border-[2px] border-[#22223B] rounded-[24px] p-3 shadow-[3px_3px_0px_0px_#22223B]">
                  <i className="fas fa-envelope text-[#FF6B6B] text-xl"></i>
                  <span className="font-black text-[#22223B] font-['Nunito_Sans']">
                    info@oryon.io
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white border-[2px] border-[#22223B] rounded-[24px] p-3 shadow-[3px_3px_0px_0px_#22223B]">
                  <i className="fab fa-telegram text-[#6BCB77] text-xl"></i>
                  <span className="font-black text-[#22223B] font-['Nunito_Sans']">
                    @OryonOfficial
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white border-[2px] border-[#22223B] rounded-[24px] p-3 shadow-[3px_3px_0px_0px_#22223B]">
                  <i className="fab fa-twitter text-[#FF6B6B] text-xl"></i>
                  <span className="font-black text-[#22223B] font-['Nunito_Sans']">
                    @OryonToken
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comic Bottom Section */}
        <div className="border-t-[2px] border-white/20 pt-8">
          <div className="bg-white border-[2px] border-[#22223B] rounded-[24px] p-6 shadow-[4px_4px_12px_rgba(34,34,59,0.3)]">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
              <div className="bg-[#FFD93D] border-[2px] border-[#22223B] rounded-[24px] px-6 py-3 shadow-[3px_3px_0px_0px_#22223B]">
                <p className="text-[#22223B] font-black text-lg font-['Fredoka_One']">
                  © {new Date().getFullYear()} ORYON. ALL RIGHTS RESERVED! 🔥
                </p>
              </div>

              <div className="flex gap-4 flex-wrap">
                <a
                  href="#"
                  className="bg-[#FF6B6B] border-[2px] border-[#22223B] rounded-[24px] px-4 py-2 text-white font-black hover:scale-105 transition-all duration-300 hover:shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']"
                >
                  PRIVACY POLICY
                </a>
                <a
                  href="#"
                  className="bg-[#6BCB77] border-[2px] border-[#22223B] rounded-[24px] px-4 py-2 text-white font-black hover:scale-105 transition-all duration-300 hover:shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']"
                >
                  TERMS OF SERVICE
                </a>
                <a
                  href="#"
                  className="bg-[#FFD93D] border-[2px] border-[#22223B] rounded-[24px] px-4 py-2 text-[#22223B] font-black hover:scale-105 transition-all duration-300 hover:shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']"
                >
                  DISCLAIMER
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

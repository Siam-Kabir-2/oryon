"use client";

export default function About() {
  return (
    <section
      id="about"
      className="py-16 bg-[#F8F9FA] relative overflow-hidden border-t-4 border-black "
      style={{
        backgroundImage: "url(/about.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Comic-style Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFD93D] rounded-full border-[3px] border-[#22223B] flex items-center justify-center text-2xl animate-bounce">
        💡
      </div>
      <div className="absolute top-1/3 right-16 w-16 h-16 bg-[#FF6B6B] transform rotate-45 border-[3px] border-[#22223B] animate-pulse"></div>
      <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-[#6BCB77] rounded-full border-[3px] border-[#22223B] animate-ping"></div>

      {/* Comic Speech Bubbles */}
      <div className="absolute top-20 right-1/4 text-[#22223B]/20 font-['Fredoka_One'] text-6xl transform rotate-12 select-none">
        POW!
      </div>
      <div className="absolute bottom-32 right-16 text-[#22223B]/20 font-['Fredoka_One'] text-4xl transform -rotate-12 select-none">
        ZAP!
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Hero Speech Bubble */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Main Speech Bubble */}
            <div className="bg-white border-[4px] border-[#22223B] rounded-[40px] p-8 shadow-[8px_8px_0px_0px_#22223B] relative">
              <h2 className="text-3xl md:text-5xl font-['Fredoka_One'] text-[#22223B] mb-4">
                🌍 Meet Oryon! 🚀
              </h2>
              <p className="text-lg md:text-xl font-['Nunito_Sans'] text-[#22223B] font-semibold leading-relaxed">
                The superhero of{" "}
                <span className="bg-[#FFD93D] px-3 py-1 rounded-[20px] border-[2px] border-[#22223B] transform rotate-1 inline-block">
                  🔗 blockchain
                </span>{" "}
                meets{" "}
                <span className="bg-[#6BCB77] text-white px-3 py-1 rounded-[20px] border-[2px] border-[#22223B] transform -rotate-1 inline-block">
                  💡 IoT
                </span>{" "}
                for a{" "}
                <span className="bg-[#FF6B6B] text-white px-3 py-1 rounded-[20px] border-[2px] border-[#22223B] transform rotate-2 inline-block">
                  🌱 greener world
                </span>
                !
              </p>

              {/* Speech Bubble Tail */}
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-8 bg-white border-b-[4px] border-r-[4px] border-[#22223B] transform rotate-45"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Comic Strip Layout */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {/* Panel 1 - What We Do */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#6BCB77] to-[#4AE54A] border-[4px] border-[#22223B] rounded-[32px] p-8 shadow-[6px_6px_0px_0px_#22223B] hover:shadow-[8px_8px_0px_0px_#22223B] transition-all duration-300 transform hover:-rotate-1">
              {/* Comic Header */}
              <div className="bg-[#FFD93D] border-[3px] border-[#22223B] rounded-[24px] p-4 mb-6 transform -rotate-2">
                <h3 className="text-2xl font-['Fredoka_One'] text-[#22223B] text-center">
                  🦸‍♂️ WHAT WE DO 🦸‍♂️
                </h3>
              </div>

              <div className="text-center text-white">
                <div className="text-6xl mb-4">🌐</div>
                <p className="text-lg font-['Nunito_Sans'] font-bold leading-relaxed">
                  We create a{" "}
                  <span className="bg-white text-[#22223B] px-2 py-1 rounded-[12px] font-black">
                    SUPER-NETWORK
                  </span>{" "}
                  where renewable energy devices talk to each other like best
                  friends! 🤝⚡
                </p>
              </div>

              {/* Action Icons */}
              <div className="flex justify-center gap-4 mt-6">
                <div className="bg-white border-[3px] border-[#22223B] rounded-full w-16 h-16 flex items-center justify-center text-2xl animate-bounce">
                  🔌
                </div>
                <div className="text-white text-2xl flex items-center">→</div>
                <div className="bg-white border-[3px] border-[#22223B] rounded-full w-16 h-16 flex items-center justify-center text-2xl animate-bounce delay-150">
                  🏠
                </div>
                <div className="text-white text-2xl flex items-center">→</div>
                <div className="bg-white border-[3px] border-[#22223B] rounded-full w-16 h-16 flex items-center justify-center text-2xl animate-bounce delay-300">
                  🌍
                </div>
              </div>
            </div>
          </div>

          {/* Panel 2 - Why Choose Us */}
          <div className="relative">
            <div className="bg-gradient-to-br from-[#FF6B6B] to-[#FF4444] border-[4px] border-[#22223B] rounded-[32px] p-8 shadow-[6px_6px_0px_0px_#22223B] hover:shadow-[8px_8px_0px_0px_#22223B] transition-all duration-300 transform hover:rotate-1">
              {/* Comic Header */}
              <div className="bg-[#FFD93D] border-[3px] border-[#22223B] rounded-[24px] p-4 mb-6 transform rotate-2">
                <h3 className="text-2xl font-['Fredoka_One'] text-[#22223B] text-center">
                  ⚡ WHY ORYON? ⚡
                </h3>
              </div>

              <div className="text-center text-white">
                <div className="text-6xl mb-4">🚀</div>
                <div className="space-y-3">
                  <div className="bg-white text-[#22223B] p-3 rounded-[20px] border-[3px] border-[#22223B] transform hover:rotate-1 transition-all duration-300">
                    <span className="text-xl">🌱</span>
                    <span className="font-['Nunito_Sans'] font-bold ml-2">
                      Planet-friendly tech!
                    </span>
                  </div>
                  <div className="bg-white text-[#22223B] p-3 rounded-[20px] border-[3px] border-[#22223B] transform hover:-rotate-1 transition-all duration-300">
                    <span className="text-xl">💎</span>
                    <span className="font-['Nunito_Sans'] font-bold ml-2">
                      Community-powered!
                    </span>
                  </div>
                  <div className="bg-white text-[#22223B] p-3 rounded-[20px] border-[3px] border-[#22223B] transform hover:rotate-1 transition-all duration-300">
                    <span className="text-xl">🎁</span>
                    <span className="font-['Nunito_Sans'] font-bold ml-2">
                      Earn while saving Earth!
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

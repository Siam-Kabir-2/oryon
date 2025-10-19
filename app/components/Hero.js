"use client";

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center pt-24 pb-16 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url(/hero.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Comic book style background elements */}
      {/* <div className="absolute inset-0 pointer-events-none"> */}
      {/* Large comic burst shapes */}
      {/* <div className="absolute top-10 left-10 w-32 h-32 bg-yellow-300 rounded-full border-4 border-black opacity-20 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-24 h-24 bg-pink-300 transform rotate-45 border-4 border-black opacity-20 animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-300 clip-path-star border-4 border-black opacity-20"></div> */}

      {/* Comic book dots pattern */}
      {/* <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-transparent via-black/5 to-transparent"
          style={{
            backgroundImage:
              "radial-gradient(circle, black 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div> */}

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Hero Content */}
          <div className="text-center lg:text-left space-y-8">
            {/* Comic book style speech bubble */}
            <div className="relative">
              <div className="bg-white p-6 rounded-3xl border-6 border-black shadow-[8px_8px_0px_0px_#000] transform -rotate-2 hover:rotate-0 transition-all duration-300">
                <h1 className="text-4xl lg:text-5xl font-black font-['Righteous'] leading-tight text-black">
                  <span className="block text-red-600 drop-shadow-lg">
                    🟩 ORYON
                  </span>
                  <span className="block text-blue-600 text-3xl lg:text-3xl">
                    The Future of
                  </span>
                  <span className="block text-green-600 animate-pulse">
                    IoT & Energy!
                  </span>
                </h1>

                {/* Speech bubble tail */}
                <div className="absolute -bottom-4 left-8 w-0 h-0 border-l-[20px] border-r-[20px] border-t-[20px] border-l-transparent border-r-transparent border-t-black"></div>
                <div className="absolute -bottom-2 left-9 w-0 h-0 border-l-[18px] border-r-[18px] border-t-[18px] border-l-transparent border-r-transparent border-t-white"></div>
              </div>
            </div>

            {/* Comic style description box */}
            <div className="bg-yellow-200 p-6 rounded-2xl border-4 border-black shadow-[6px_6px_0px_0px_#000] transform rotate-1">
              <p className="text-lg lg:text-xl text-black font-bold leading-relaxed">
                💫 Pioneering{" "}
                <span className="bg-green-400 px-2 py-1 rounded border-2 border-black">
                  blockchain technology
                </span>
                ,
                <span className="bg-blue-400 px-2 py-1 rounded border-2 border-black ml-1">
                  Internet of Things
                </span>
                , and
                <span className="bg-pink-400 px-2 py-1 rounded border-2 border-black ml-1">
                  renewable energy
                </span>
                !
              </p>
            </div>

            {/* Cartoon Stats Cards */}
            <div className="grid grid-cols-3 gap-4 py-8">
              <div className="relative">
                <div className="absolute top-2 left-2 w-full h-full bg-red-400 rounded-2xl"></div>
                <div className="relative bg-white p-4 rounded-2xl border-4 border-black shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
                  <div className="text-2xl font-black text-red-600">100M</div>
                  <div className="text-sm font-bold text-black">
                    Total Supply
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute top-2 left-2 w-full h-full bg-blue-400 rounded-2xl"></div>
                <div className="relative bg-white p-4 rounded-2xl border-4 border-black shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
                  <div className="text-2xl font-black text-blue-600">BSC</div>
                  <div className="text-sm font-bold text-black">Network</div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute top-2 left-2 w-full h-full bg-green-400 rounded-2xl"></div>
                <div className="relative bg-white p-4 rounded-2xl border-4 border-black shadow-lg hover:-translate-y-2 transition-all duration-300 text-center">
                  <div className="text-2xl font-black text-green-600 animate-pulse">
                    LIVE
                  </div>
                  <div className="text-sm font-bold text-black">Presale</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Comic Book Presale Card */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-md">
              <div className="relative transform hover:rotate-3 transition-all duration-500">
                {/* Comic book shadow */}
                <div className="absolute top-4 left-4 w-full h-full bg-black rounded-3xl"></div>

                {/* Main comic card */}
                <div className="relative bg-gradient-to-br from-green-400 via-blue-400 to-purple-400 p-8 rounded-3xl border-8 border-black shadow-xl">
                  {/* Comic burst decoration */}
                  <div className="absolute -top-6 -right-6 bg-yellow-400 text-black text-2xl font-black px-4 py-2 rounded-full border-4 border-black transform rotate-12 animate-pulse">
                    NEW!
                  </div>

                  {/* Decorative comic corners */}
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-red-400 border-4 border-black transform rotate-45"></div>
                  <div className="absolute -bottom-3 -right-3 w-8 h-8 bg-yellow-400 rounded-full border-4 border-black"></div>

                  <div className="text-center text-white space-y-6 relative z-10">
                    <h2 className="text-2xl lg:text-3xl font-black font-['Righteous'] leading-tight text-black bg-white px-4 py-2 rounded-2xl border-4 border-black shadow-lg transform -rotate-1">
                      Join the Green Future!
                    </h2>

                    <div className="bg-yellow-300 text-black p-4 rounded-2xl border-4 border-black font-bold text-lg transform rotate-1">
                      🚀 Buy $ORYON Today! 🚀
                    </div>

                    <p className="text-black font-bold text-lg bg-white/90 px-4 py-2 rounded-xl border-3 border-black">
                      Powering a decentralized energy revolution! ⚡
                    </p>

                    <div className="space-y-4 pt-4">
                      {/* Comic book style buttons */}
                      <button className="relative w-full group">
                        <div className="absolute top-2 left-2 w-full h-full bg-orange-600 rounded-2xl"></div>
                        <div className="relative bg-orange-400 text-black px-6 py-4 border-4 border-black font-black text-lg rounded-2xl hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 flex items-center justify-center gap-3">
                          <i className="fas fa-coins text-yellow-600 text-xl" />
                          <span>BUY WITH BNB</span>
                        </div>
                      </button>

                      <button className="relative w-full group">
                        <div className="absolute top-2 left-2 w-full h-full bg-purple-600 rounded-2xl"></div>
                        <div className="relative bg-purple-400 text-white px-6 py-4 border-4 border-black font-black text-lg rounded-2xl hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200 flex items-center justify-center gap-3">
                          <i className="fas fa-wallet text-xl" />
                          <span>CONNECT WALLET</span>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Comic book style floating elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-1/4 left-1/4 text-6xl animate-bounce opacity-70 transform -rotate-12">
            ⚡
          </div>
          <div className="absolute top-1/2 right-1/4 text-5xl animate-pulse opacity-60 transform rotate-12">
            🌱
          </div>
          <div className="absolute bottom-1/4 left-1/3 text-4xl animate-spin opacity-50">
            🔋
          </div>

          {/* Comic book "POW" and "BOOM" text */}
          <div className="absolute top-20 right-10 text-yellow-400 font-black text-4xl transform rotate-12 opacity-30 animate-pulse">
            POW!
          </div>
          <div className="absolute bottom-20 left-10 text-red-400 font-black text-3xl transform -rotate-12 opacity-30 animate-bounce">
            BOOM!
          </div>
        </div>
      </div>
    </section>
  );
}

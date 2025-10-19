'use client'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-yellow-100 via-blue-100 to-green-100 relative overflow-hidden border-t-8 border-black">
      {/* Comic Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-400 rounded-full border-4 border-black animate-bounce"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400 rotate-45 border-4 border-black"></div>
      <div className="absolute bottom-20 left-32 w-24 h-12 bg-purple-400 rounded-full border-4 border-black"></div>
      <div className="absolute top-1/2 right-10 text-6xl font-black text-red-500 transform rotate-12 opacity-20">POW!</div>
      <div className="absolute bottom-32 right-1/4 text-4xl font-black text-blue-500 transform -rotate-12 opacity-20">ZAP!</div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Comic Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Comic title background */}
            <div className="absolute inset-0 bg-yellow-300 transform rotate-2 rounded-3xl border-6 border-black shadow-[8px_8px_0px_0px_#000]"></div>
            <h2 className="relative text-4xl lg:text-6xl font-black font-['Righteous'] mb-6 text-black px-8 py-4 transform -rotate-2">
              💥 ABOUT ORYON! 💥
            </h2>
          </div>
          
          {/* Comic speech bubble */}
          <div className="relative max-w-4xl mx-auto mt-12">
            <div className="bg-white border-6 border-black rounded-3xl p-8 shadow-[8px_8px_0px_0px_#000] transform rotate-1">
              <p className="text-xl lg:text-2xl text-black font-bold leading-relaxed">
                🚀 Pioneering the intersection of blockchain technology, Internet of Things (IoT), and renewable energy! 🌟
              </p>
              {/* Speech bubble tail */}
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
              <div className="absolute bottom-[-26px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[26px] border-l-transparent border-r-[26px] border-r-transparent border-t-[26px] border-t-black"></div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Comic Content Panel */}
          <div className="space-y-8">
            <div className="relative">
              {/* Comic panel shadow */}
              <div className="absolute top-2 left-2 w-full h-full bg-black rounded-3xl"></div>
              <div className="relative bg-white border-6 border-black p-8 rounded-3xl shadow-[8px_8px_0px_0px_#000] transform -rotate-1 hover:rotate-0 transition-all duration-300">
                <h3 className="text-3xl font-black text-black mb-6 font-['Righteous'] bg-yellow-300 px-4 py-2 rounded-xl border-4 border-black inline-block transform rotate-2">
                  ⚡ WHAT IS ORYON? ⚡
                </h3>
                <p className="text-lg text-black font-bold leading-relaxed mb-8 bg-blue-100 p-4 rounded-2xl border-4 border-black">
                  🚀 Oryon pioneers the intersection of blockchain technology, Internet of Things (IoT), and renewable energy! 
                  Our goal is to build a decentralized ecosystem where devices, grids, and communities interact seamlessly — 
                  optimizing energy efficiency and empowering global sustainability efforts! 🌍
                </p>

                {/* Comic Benefits Grid */}
                <div className="grid gap-6">
                  <div className="relative">
                    <div className="absolute top-1 left-1 w-full h-full bg-black rounded-2xl"></div>
                    <div className="relative bg-gradient-to-r from-green-300 to-blue-300 p-6 rounded-2xl border-4 border-black hover:scale-105 hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 shadow-[4px_4px_0px_0px_#000]">
                      <div className="flex items-center gap-4">
                        <div className="text-6xl">🔌</div>
                        <div>
                          <h4 className="text-2xl font-black text-black mb-2 bg-yellow-300 px-3 py-1 rounded-lg border-3 border-black">CONNECT!</h4>
                          <p className="text-black font-bold">Renewable energy systems with smart IoT devices!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute top-1 left-1 w-full h-full bg-black rounded-2xl"></div>
                    <div className="relative bg-gradient-to-r from-purple-300 to-pink-300 p-6 rounded-2xl border-4 border-black hover:scale-105 hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 shadow-[4px_4px_0px_0px_#000]">
                      <div className="flex items-center gap-4">
                        <div className="text-6xl">🗳️</div>
                        <div>
                          <h4 className="text-2xl font-black text-black mb-2 bg-red-300 px-3 py-1 rounded-lg border-3 border-black">PARTICIPATE!</h4>
                          <p className="text-black font-bold">In decentralized governance decisions!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative">
                    <div className="absolute top-1 left-1 w-full h-full bg-black rounded-2xl"></div>
                    <div className="relative bg-gradient-to-r from-orange-300 to-red-300 p-6 rounded-2xl border-4 border-black hover:scale-105 hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 shadow-[4px_4px_0px_0px_#000]">
                      <div className="flex items-center gap-4">
                        <div className="text-6xl">🎁</div>
                        <div>
                          <h4 className="text-2xl font-black text-black mb-2 bg-green-300 px-3 py-1 rounded-lg border-3 border-black">EARN!</h4>
                          <p className="text-black font-bold">Rewards for contributing to a greener digital future!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Comic Info Panel */}
            <div className="relative">
              <div className="absolute top-2 left-2 w-full h-full bg-black rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-cyan-200 to-blue-200 border-6 border-black p-8 rounded-3xl shadow-[8px_8px_0px_0px_#000] transform rotate-1 hover:-rotate-1 transition-all duration-300">
                <h4 className="text-2xl font-black text-black mb-4 bg-yellow-300 px-4 py-2 rounded-xl border-4 border-black inline-block">
                  💡 WHY CHOOSE ORYON?
                </h4>
                <ul className="space-y-3">
                  <li className="flex items-center gap-3 bg-white p-3 rounded-lg border-3 border-black">
                    <span className="text-2xl">🌱</span>
                    <span className="text-black font-bold">Eco-friendly blockchain solutions</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white p-3 rounded-lg border-3 border-black">
                    <span className="text-2xl">🔗</span>
                    <span className="text-black font-bold">Seamless IoT integration</span>
                  </li>
                  <li className="flex items-center gap-3 bg-white p-3 rounded-lg border-3 border-black">
                    <span className="text-2xl">💎</span>
                    <span className="text-black font-bold">Community-driven governance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Right Side - Comic Illustration */}
          <div className="relative">
            {/* Comic "BOOM" text */}
            <div className="absolute -top-8 -right-8 text-6xl font-black text-red-500 transform rotate-12 opacity-30">BOOM!</div>
            
            <div className="relative">
              <div className="absolute top-4 left-4 w-full h-full bg-black rounded-3xl"></div>
              <div className="relative bg-gradient-to-br from-green-200 via-blue-200 to-purple-200 border-8 border-black rounded-3xl p-8 shadow-[12px_12px_0px_0px_#000] transform -rotate-2 hover:rotate-0 transition-all duration-500">
                
                {/* Comic energy illustration */}
                <div className="text-center space-y-6">
                  <div className="text-8xl mb-4">🌍</div>
                  <h3 className="text-3xl font-black text-black bg-yellow-300 px-4 py-2 rounded-xl border-4 border-black inline-block transform rotate-3">
                    POWERING THE FUTURE!
                  </h3>
                  
                  {/* Energy connections illustration */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div className="relative">
                      <div className="absolute top-1 left-1 w-full h-full bg-black rounded-xl"></div>
                      <div className="relative bg-yellow-400 border-4 border-black rounded-xl p-4 text-center shadow-[4px_4px_0px_0px_#000] hover:scale-110 transition-all duration-300">
                        <div className="text-3xl mb-2">☀️</div>
                        <div className="text-sm font-bold text-black">SOLAR</div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute top-1 left-1 w-full h-full bg-black rounded-xl"></div>
                      <div className="relative bg-green-400 border-4 border-black rounded-xl p-4 text-center shadow-[4px_4px_0px_0px_#000] hover:scale-110 transition-all duration-300">
                        <div className="text-3xl mb-2">💨</div>
                        <div className="text-sm font-bold text-black">WIND</div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute top-1 left-1 w-full h-full bg-black rounded-xl"></div>
                      <div className="relative bg-blue-400 border-4 border-black rounded-xl p-4 text-center shadow-[4px_4px_0px_0px_#000] hover:scale-110 transition-all duration-300">
                        <div className="text-3xl mb-2">🌊</div>
                        <div className="text-sm font-bold text-black">HYDRO</div>
                      </div>
                    </div>
                  </div>

                  {/* Central connector */}
                  <div className="relative mt-8">
                    <div className="absolute top-1 left-1/2 transform -translate-x-1/2 w-24 h-24 bg-black rounded-full"></div>
                    <div className="relative w-24 h-24 mx-auto bg-gradient-to-br from-purple-400 to-pink-400 border-6 border-black rounded-full flex items-center justify-center shadow-[6px_6px_0px_0px_#000] animate-pulse">
                      <span className="text-3xl">⚡</span>
                    </div>
                    <div className="mt-4 bg-white border-4 border-black rounded-lg px-4 py-2 text-center">
                      <span className="font-black text-black">ORYON HUB</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Comic "ZAP" text */}
            <div className="absolute -bottom-8 -left-8 text-4xl font-black text-blue-500 transform -rotate-12 opacity-30">ZAP!</div>
          </div>
        </div>
      </div>
    </section>
  )
}
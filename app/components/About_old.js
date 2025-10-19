'use client'

export default function About() {
  return (
    <section id="about" className="py-24 bg-gradient-to-br from-yellow-100 via-blue-100 to-green-100 relative overflow-hidden border-t-8 border-black">
      {/* Comic Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-red-400 rounded-full border-4 border-black animate-bounce"></div>
      <div className="absolute top-32 right-20 w-16 h-16 bg-yellow-400 rotate-45 border-4 border-black"></div>
      <div className="absolute bottom-20 left-32 w-24 h-12 bg-purple-400 rounded-full border-4 border-black"></div>
      
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
          {/* Left Side - Content */}
          <div className="space-y-8">
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-[#00d4aa]/10">
              <h3 className="text-3xl font-bold text-[#00d4aa] mb-6 font-['Righteous']">
                What is Oryon?
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Oryon pioneers the intersection of blockchain technology, Internet of Things (IoT), and renewable energy. 
                Our goal is to build a decentralized ecosystem where devices, grids, and communities interact seamlessly — 
                optimizing energy efficiency and empowering global sustainability efforts.
              </p>

              {/* Benefits Grid */}
              <div className="grid gap-4">
                <div className="bg-gradient-to-r from-[#00d4aa]/10 to-[#4ecdc4]/10 p-6 rounded-2xl border-l-4 border-[#00d4aa] hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">🔌</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#00d4aa] mb-2">Connect</h4>
                      <p className="text-gray-700">Renewable energy systems with smart IoT devices</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#4ecdc4]/10 to-[#6bcf7f]/10 p-6 rounded-2xl border-l-4 border-[#4ecdc4] hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">�️</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#4ecdc4] mb-2">Participate</h4>
                      <p className="text-gray-700">In decentralized governance decisions</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-r from-[#6bcf7f]/10 to-[#ff8c42]/10 p-6 rounded-2xl border-l-4 border-[#6bcf7f] hover:scale-105 transition-all duration-300">
                  <div className="flex items-center gap-4">
                    <div className="text-4xl">🎁</div>
                    <div>
                      <h4 className="text-xl font-bold text-[#6bcf7f] mb-2">Earn</h4>
                      <p className="text-gray-700">Rewards for contributing to a greener digital future</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mission & Vision */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-[#00d4aa] to-[#4ecdc4] p-6 rounded-2xl text-white shadow-lg">
                <h4 className="text-2xl font-bold mb-4">🎯 Mission</h4>
                <p className="leading-relaxed">
                  To accelerate the world's transition toward sustainable and intelligent energy systems powered by blockchain innovation.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-[#6bcf7f] to-[#45b7d1] p-6 rounded-2xl text-white shadow-lg">
                <h4 className="text-2xl font-bold mb-4">🌟 Vision</h4>
                <p className="leading-relaxed">
                  A connected planet where technology and sustainability coexist in perfect harmony.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side - Floating Elements */}
          <div className="relative h-96 flex items-center justify-center">
            <div className="relative w-80 h-80">
              {/* Central hub */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-gradient-to-br from-[#00d4aa] to-[#4ecdc4] rounded-full flex items-center justify-center text-3xl animate-pulse shadow-lg">
                ⚡
              </div>
              
              {/* Floating elements */}
              <div className="absolute top-[10%] left-[20%] text-6xl animate-bounce" style={{animationDelay: '0s'}}>⛓️</div>
              <div className="absolute top-[20%] right-[15%] text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>📡</div>
              <div className="absolute bottom-[30%] left-[10%] text-6xl animate-bounce" style={{animationDelay: '1s'}}>🌱</div>
              <div className="absolute top-[60%] right-[20%] text-5xl animate-bounce" style={{animationDelay: '1.5s'}}>☀️</div>
              <div className="absolute bottom-[10%] left-[40%] text-5xl animate-bounce" style={{animationDelay: '2s'}}>💨</div>
              <div className="absolute top-[40%] left-[50%] text-4xl animate-bounce" style={{animationDelay: '2.5s'}}>�</div>
              
              {/* Connection lines */}
              <div className="absolute inset-0">
                <svg className="w-full h-full">
                  <line x1="50%" y1="50%" x2="20%" y2="20%" stroke="#00d4aa" strokeWidth="2" opacity="0.3" className="animate-pulse" />
                  <line x1="50%" y1="50%" x2="80%" y2="30%" stroke="#4ecdc4" strokeWidth="2" opacity="0.3" className="animate-pulse" />
                  <line x1="50%" y1="50%" x2="30%" y2="80%" stroke="#6bcf7f" strokeWidth="2" opacity="0.3" className="animate-pulse" />
                  <line x1="50%" y1="50%" x2="70%" y2="70%" stroke="#ff8c42" strokeWidth="2" opacity="0.3" className="animate-pulse" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

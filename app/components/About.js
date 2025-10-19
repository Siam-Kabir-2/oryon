"use client";

export default function About() {
  return (
    <section id="about" className="py-16 bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="relative bg-[#6BCB77] px-8 py-4 rounded-[24px] border-[2px] border-[#22223B] shadow-[4px_4px_12px_rgba(34,34,59,0.15)]">
              <h2 className="text-5xl md:text-6xl font-['Fredoka_One'] text-white">
                💥 About Oryon
              </h2>
            </div>
          </div>

          {/* Speech bubble */}
          <div className="relative inline-block mt-4 max-w-2xl mx-auto">
            <div className="bg-white p-6 rounded-[24px] border-[2px] border-[#22223B] shadow-[4px_4px_12px_rgba(34,34,59,0.15)]">
              <p className="text-xl md:text-2xl font-['Nunito_Sans'] text-[#22223B] font-semibold">
                Pioneering blockchain, IoT, and renewable energy integration!
                �⚡
              </p>
              {/* Triangle pointer */}
              <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-[#22223B]" />
              <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white" />
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-4xl mx-auto">
          {/* What is Oryon */}
          <div className="relative bg-white border-[2px] border-[#22223B] p-8 rounded-[24px] shadow-[4px_4px_12px_rgba(34,34,59,0.15)] mb-8">
            <h3 className="text-3xl font-['Fredoka_One'] text-[#22223B] mb-4">
              ⚡ What is Oryon?
            </h3>
            <p className="text-lg font-['Nunito_Sans'] text-[#22223B] leading-relaxed mb-6">
              Oryon builds a decentralized ecosystem where devices, grids, and
              communities interact seamlessly — optimizing energy efficiency and
              empowering global sustainability efforts.
            </p>

            {/* Key Features Grid */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-[#6BCB77] p-4 rounded-[24px] border-[2px] border-[#22223B] text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-2">🔌</div>
                <h4 className="text-lg font-['Fredoka_One'] text-white mb-1">
                  Connect
                </h4>
                <p className="text-sm font-['Nunito_Sans'] text-white">
                  Renewable energy & IoT devices
                </p>
              </div>

              <div className="bg-[#FF6B6B] p-4 rounded-[24px] border-[2px] border-[#22223B] text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-2">🗳️</div>
                <h4 className="text-lg font-['Fredoka_One'] text-white mb-1">
                  Participate
                </h4>
                <p className="text-sm font-['Nunito_Sans'] text-white">
                  Decentralized governance
                </p>
              </div>

              <div className="bg-[#FFD93D] p-4 rounded-[24px] border-[2px] border-[#22223B] text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-2">🎁</div>
                <h4 className="text-lg font-['Fredoka_One'] text-[#22223B] mb-1">
                  Earn
                </h4>
                <p className="text-sm font-['Nunito_Sans'] text-[#22223B]">
                  Rewards for sustainability
                </p>
              </div>
            </div>
          </div>

          {/* Why Choose Oryon */}
          <div className="relative bg-[#6BCB77] border-[2px] border-[#22223B] p-8 rounded-[24px] shadow-[4px_4px_12px_rgba(34,34,59,0.15)]">
            <h4 className="text-2xl font-['Fredoka_One'] text-white mb-4">
              💡 Why Choose Oryon?
            </h4>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white p-4 rounded-[24px] border-[2px] border-[#22223B] flex items-center gap-3">
                <span className="text-3xl">🌱</span>
                <span className="text-[#22223B] font-['Nunito_Sans'] font-semibold">
                  Eco-friendly blockchain
                </span>
              </div>
              <div className="bg-white p-4 rounded-[24px] border-[2px] border-[#22223B] flex items-center gap-3">
                <span className="text-3xl">�</span>
                <span className="text-[#22223B] font-['Nunito_Sans'] font-semibold">
                  Seamless IoT integration
                </span>
              </div>
              <div className="bg-white p-4 rounded-[24px] border-[2px] border-[#22223B] flex items-center gap-3">
                <span className="text-3xl">�</span>
                <span className="text-[#22223B] font-['Nunito_Sans'] font-semibold">
                  Community-driven
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

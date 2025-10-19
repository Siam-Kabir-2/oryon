"use client";

export default function WhyChoose() {
  const cards = [
    {
      icon: "🔋",
      title: "Green by Design",
      desc: "Promoting renewable energy adoption through decentralized technology.",
      bgColor: "bg-[#6BCB77]",
    },
    {
      icon: "🌐",
      title: "IoT Integrated",
      desc: "Smart device connectivity for efficient energy management.",
      bgColor: "bg-[#FFD93D]",
    },
    {
      icon: "🔒",
      title: "Secure & Transparent",
      desc: "Built on blockchain for traceability and trust.",
      bgColor: "bg-[#FF6B6B]",
    },
    {
      icon: "💰",
      title: "Community-Driven",
      desc: "Governance and decision-making powered by ORY holders.",
      bgColor: "bg-[#6BCB77]",
    },
  ];

  return (
    <section className="py-8 lg:py-16 bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16">
          <div className="relative inline-block">
            <div className="relative bg-gradient-to-r from-[#FF6B6B] to-[#FF4444] px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-[20px] lg:rounded-[24px] border-[4px] border-[#22223B] shadow-[6px_6px_0px_0px_#22223B] lg:shadow-[8px_8px_0px_0px_#22223B] transform hover:scale-105 transition-all duration-300">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-['Fredoka_One'] text-white">
                🌍 Why Choose Oryon? 🚀
              </h2>
            </div>
          </div>
        </div>

        {/* Pure Content Layout - NO CARDS AT ALL */}
        <div className="text-center space-y-8 lg:space-y-16">
          {/* Features List - Enhanced Colors */}
          <div className="max-w-4xl mx-auto space-y-8 lg:space-y-12">
            {/* Feature 1 - Enhanced Green */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-['Fredoka_One'] bg-gradient-to-r from-[#6BCB77] to-[#4AE54A] bg-clip-text text-transparent mb-3 lg:mb-4 drop-shadow-lg">
                🔋 GREEN BY DESIGN
              </h3>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-['Nunito_Sans'] text-[#22223B] font-semibold leading-relaxed">
                Promoting renewable energy adoption through decentralized
                technology.
              </p>
            </div>

            {/* Enhanced Separator */}
            <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4">
              <div className="w-12 sm:w-16 lg:w-20 h-1.5 lg:h-2 bg-gradient-to-r from-[#FFD93D] to-[#FFA500] rounded-full"></div>
              <span className="text-2xl sm:text-3xl lg:text-4xl drop-shadow-lg">
                ⚡
              </span>
              <div className="w-12 sm:w-16 lg:w-20 h-1.5 lg:h-2 bg-gradient-to-r from-[#FFA500] to-[#FFD93D] rounded-full"></div>
            </div>

            {/* Feature 2 - Enhanced Yellow */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-['Fredoka_One'] bg-gradient-to-r from-[#FFD93D] to-[#FFA500] bg-clip-text text-transparent mb-3 lg:mb-4 drop-shadow-lg">
                🌐 IOT INTEGRATED
              </h3>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-['Nunito_Sans'] text-[#22223B] font-semibold leading-relaxed">
                Smart device connectivity for efficient energy management.
              </p>
            </div>

            {/* Enhanced Separator */}
            <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4">
              <div className="w-12 sm:w-16 lg:w-20 h-1.5 lg:h-2 bg-gradient-to-r from-[#6BCB77] to-[#4AE54A] rounded-full"></div>
              <span className="text-2xl sm:text-3xl lg:text-4xl drop-shadow-lg">
                🌱
              </span>
              <div className="w-12 sm:w-16 lg:w-20 h-1.5 lg:h-2 bg-gradient-to-r from-[#4AE54A] to-[#6BCB77] rounded-full"></div>
            </div>

            {/* Feature 3 - Enhanced Red */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-['Fredoka_One'] bg-gradient-to-r from-[#FF6B6B] to-[#FF4444] bg-clip-text text-transparent mb-3 lg:mb-4 drop-shadow-lg">
                🔒 SECURE & TRANSPARENT
              </h3>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-['Nunito_Sans'] text-[#22223B] font-semibold leading-relaxed">
                Built on blockchain for traceability and trust.
              </p>
            </div>

            {/* Enhanced Separator */}
            <div className="flex justify-center items-center gap-2 sm:gap-3 lg:gap-4">
              <div className="w-12 sm:w-16 lg:w-20 h-1.5 lg:h-2 bg-gradient-to-r from-[#FF6B6B] to-[#FF4444] rounded-full"></div>
              <span className="text-2xl sm:text-3xl lg:text-4xl drop-shadow-lg">
                🛡️
              </span>
              <div className="w-12 sm:w-16 lg:w-20 h-1.5 lg:h-2 bg-gradient-to-r from-[#FF4444] to-[#FF6B6B] rounded-full"></div>
            </div>

            {/* Feature 4 - Enhanced Purple/Blue */}
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-['Fredoka_One'] bg-gradient-to-r from-[#8B5CF6] to-[#6366F1] bg-clip-text text-transparent mb-3 lg:mb-4 drop-shadow-lg">
                💰 COMMUNITY-DRIVEN
              </h3>
              <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-['Nunito_Sans'] text-[#22223B] font-semibold leading-relaxed">
                Governance and decision-making powered by ORY holders.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

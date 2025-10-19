"use client";

export default function Roadmap() {
  const milestones = [
    {
      phase: "Q4 2025 – Foundation",
      title: "Foundation",
      desc: "Concept development, token launch, website release, and whitepaper publication.",
      icon: "🏗️",
      bgColor: "bg-[#FFD93D]",
    },
    {
      phase: "Q1 2026 – Expansion",
      title: "Expansion",
      desc: "Presale event, community building, DEX listing, and liquidity setup.",
      icon: "📈",
      bgColor: "bg-[#6BCB77]",
    },
    {
      phase: "Q2 2026 – Integration",
      title: "Integration",
      desc: "IoT platform prototype, renewable energy partnerships, and staking feature launch.",
      icon: "🔗",
      bgColor: "bg-[#FF6B6B]",
    },
    {
      phase: "Q3 2026 – Growth",
      title: "Growth",
      desc: "Global marketing campaigns, cross-chain bridge integration, and mobile dashboard release.",
      icon: "🌍",
      bgColor: "bg-[#6BCB77]",
    },
    {
      phase: "Q4 2026 – Future",
      title: "Future",
      desc: "Governance portal, NFT-based energy certificates, and large-scale ecosystem expansion.",
      icon: "🏆",
      bgColor: "bg-[#FFD93D]",
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-8 lg:py-16 bg-[#F8F9FA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16">
          <div className="relative inline-block">
            <div className="relative bg-[#FF6B6B] px-6 sm:px-8 lg:px-12 py-4 sm:py-5 lg:py-6 rounded-[20px] lg:rounded-[24px] border-[2px] border-[#22223B] shadow-[4px_4px_0px_0px_#22223B] lg:shadow-[6px_6px_0px_0px_#22223B]">
              <h2 className="text-2xl sm:text-3xl lg:text-5xl xl:text-6xl font-['Fredoka_One'] text-white">
                🚀 Roadmap
              </h2>
            </div>
          </div>

          <p className="text-base sm:text-lg lg:text-xl xl:text-2xl font-['Nunito_Sans'] text-[#22223B] font-semibold max-w-3xl mx-auto leading-relaxed mt-4 lg:mt-6">
            🌟 Follow our journey to a sustainable energy future! ⚡
          </p>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative mb-8 lg:mb-16">
          {/* Connection line */}
          <div className="absolute top-16 lg:top-20 left-0 w-full h-1 bg-[#22223B] rounded-full"></div>

          <div className="grid grid-cols-5 gap-4 lg:gap-6 relative h-full">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center h-full">
                {/* Milestone Marker */}
                <div className="relative mb-6 lg:mb-8 flex-shrink-0">
                  <div
                    className={`relative w-16 lg:w-20 h-16 lg:h-20 ${milestone.bgColor} rounded-full flex items-center justify-center border-[2px] border-[#22223B] shadow-[4px_4px_0px_0px_#22223B] hover:scale-105 hover:-translate-y-1 transition-all duration-300 z-10`}
                  >
                    <span className="text-2xl lg:text-3xl">
                      {milestone.icon}
                    </span>
                  </div>
                </div>

                {/* Milestone Content */}
                <div className="relative flex-1 w-full">
                  <div className="relative bg-white border-[2px] border-[#22223B] p-4 lg:p-6 rounded-[20px] lg:rounded-[24px] shadow-[4px_4px_0px_0px_#22223B] hover:shadow-[6px_6px_0px_0px_#22223B] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 text-center h-full flex flex-col">
                    {/* Phase badge */}
                    <div className="mb-3 lg:mb-4 flex-shrink-0">
                      <span
                        className={`${milestone.bgColor} text-[#22223B] px-2 lg:px-3 py-1.5 lg:py-2 rounded-[20px] lg:rounded-[24px] font-['Fredoka_One'] text-[10px] lg:text-xs border-[2px] border-[#22223B] shadow-[2px_2px_0px_0px_#22223B] inline-block`}
                      >
                        {milestone.phase}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base lg:text-lg font-['Fredoka_One'] text-[#22223B] mb-3 lg:mb-4 flex-shrink-0">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#22223B] font-['Nunito_Sans'] text-xs lg:text-sm leading-relaxed flex-1 flex items-center">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Roadmap */}
        <div className="lg:hidden relative">
          {/* Vertical line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-1 bg-[#22223B] rounded-full"></div>

          <div className="space-y-4 sm:space-y-6">
            {milestones.map((milestone, index) => (
              <div
                key={index}
                className="flex items-start gap-4 sm:gap-6 relative min-h-[120px] sm:min-h-[140px]"
              >
                {/* Milestone Marker */}
                <div
                  className={`relative w-12 sm:w-16 h-12 sm:h-16 ${milestone.bgColor} rounded-full flex items-center justify-center border-[2px] border-[#22223B] shadow-[4px_4px_0px_0px_#22223B] flex-shrink-0 z-10`}
                >
                  <span className="text-lg sm:text-2xl">{milestone.icon}</span>
                </div>

                {/* Milestone Content */}
                <div className="flex-1 bg-white p-4 sm:p-6 rounded-[20px] sm:rounded-[24px] border-[2px] border-[#22223B] shadow-[4px_4px_0px_0px_#22223B] hover:shadow-[6px_6px_0px_0px_#22223B] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-300 h-full flex flex-col">
                  <div
                    className={`${milestone.bgColor} text-[#22223B] inline-block px-2 sm:px-3 py-1.5 sm:py-2 rounded-[20px] sm:rounded-[24px] border-[2px] border-[#22223B] shadow-[2px_2px_0px_0px_#22223B] font-['Fredoka_One'] text-[10px] sm:text-xs mb-2 sm:mb-3 flex-shrink-0`}
                  >
                    {milestone.phase}
                  </div>
                  <h3 className="text-base sm:text-lg font-['Fredoka_One'] text-[#22223B] mb-2 sm:mb-3 flex-shrink-0">
                    {milestone.title}
                  </h3>
                  <p className="text-[#22223B] font-['Nunito_Sans'] leading-relaxed text-xs sm:text-sm flex-1">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

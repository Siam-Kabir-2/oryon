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
      className="py-16 bg-[#F8F9FA] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="relative bg-[#FF6B6B] px-8 py-4 rounded-[24px] border-[2px] border-[#22223B] shadow-[4px_4px_12px_rgba(34,34,59,0.15)]">
              <h2 className="text-5xl md:text-6xl font-['Fredoka_One'] text-white">
                🚀 Roadmap
              </h2>
            </div>
          </div>

          {/* Speech bubble */}
          <div className="relative inline-block mt-4 max-w-xl mx-auto">
            <div className="bg-white p-6 rounded-[24px] border-[2px] border-[#22223B] shadow-[4px_4px_12px_rgba(34,34,59,0.15)]">
              <p className="text-xl md:text-2xl font-['Nunito_Sans'] text-[#22223B] font-semibold">
                🌟 Follow our journey to a sustainable energy future! ⚡
              </p>
              {/* Triangle pointer */}
              <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-[#22223B]" />
              <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white" />
            </div>
          </div>
        </div>

        {/* Timeline - Desktop */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 w-full h-2 bg-[#22223B] rounded-full transform -translate-y-1/2"></div>

          <div className="grid grid-cols-5 gap-6 relative">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Milestone Marker */}
                <div className="relative">
                  <div
                    className={`relative w-20 h-20 ${milestone.bgColor} rounded-full flex items-center justify-center border-[2px] border-[#22223B] shadow-[4px_4px_12px_rgba(34,34,59,0.15)] hover:scale-105 transition-all duration-300`}
                  >
                    <span className="text-3xl">{milestone.icon}</span>
                  </div>
                </div>

                {/* Milestone Content */}
                <div className="relative mt-8">
                  <div className="relative bg-white border-[2px] border-[#22223B] p-6 rounded-[24px] shadow-[4px_4px_12px_rgba(34,34,59,0.15)] max-w-xs text-center hover:-translate-y-1 transition-all duration-300">
                    {/* Phase badge */}
                    <div className="mb-3">
                      <span
                        className={`${milestone.bgColor} text-[#22223B] px-3 py-1 rounded-full font-['Nunito_Sans'] font-bold text-xs border-[2px] border-[#22223B] uppercase tracking-wide`}
                      >
                        {milestone.phase}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-['Fredoka_One'] text-[#22223B] mb-3">
                      {milestone.title}
                    </h3>

                    {/* Description */}
                    <p className="text-[#22223B] font-['Nunito_Sans'] text-sm leading-relaxed">
                      {milestone.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Roadmap */}
        <div className="lg:hidden space-y-6">
          {/* Vertical line */}
          <div className="absolute left-8 top-40 bottom-20 w-1 bg-[#22223B] rounded-full"></div>

          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-6 relative">
              {/* Milestone Marker */}
              <div
                className={`relative w-16 h-16 ${milestone.bgColor} rounded-full flex items-center justify-center border-[2px] border-[#22223B] shadow-[4px_4px_12px_rgba(34,34,59,0.15)] flex-shrink-0`}
              >
                <span className="text-2xl">{milestone.icon}</span>
              </div>

              {/* Milestone Content */}
              <div className="flex-1 bg-white p-6 rounded-[24px] border-[2px] border-[#22223B] shadow-[4px_4px_12px_rgba(34,34,59,0.15)]">
                <div
                  className={`text-sm font-['Nunito_Sans'] font-bold ${milestone.bgColor} inline-block px-3 py-1 rounded-full border-[2px] border-[#22223B] uppercase tracking-wide mb-2`}
                >
                  {milestone.phase}
                </div>
                <h3 className="text-xl font-['Fredoka_One'] text-[#22223B] mb-3">
                  {milestone.title}
                </h3>
                <p className="text-[#22223B] font-['Nunito_Sans'] leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

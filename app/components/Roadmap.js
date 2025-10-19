"use client";

export default function Roadmap() {
  const milestones = [
    {
      phase: "Q4 2025 – Foundation",
      title: "Foundation",
      desc: "Concept development, token launch, website release, and whitepaper publication.",
      icon: "🏗️",
      color: "from-[#00d4aa] to-[#4ecdc4]",
      borderColor: "border-[#00d4aa]",
    },
    {
      phase: "Q1 2026 – Expansion",
      title: "Expansion",
      desc: "Presale event, community building, DEX listing, and liquidity setup.",
      icon: "📈",
      color: "from-[#4ecdc4] to-[#6bcf7f]",
      borderColor: "border-[#4ecdc4]",
    },
    {
      phase: "Q2 2026 – Integration",
      title: "Integration",
      desc: "IoT platform prototype, renewable energy partnerships, and staking feature launch.",
      icon: "🔗",
      color: "from-[#6bcf7f] to-[#45b7d1]",
      borderColor: "border-[#6bcf7f]",
    },
    {
      phase: "Q3 2026 – Growth",
      title: "Growth",
      desc: "Global marketing campaigns, cross-chain bridge integration, and mobile dashboard release.",
      icon: "🌍",
      color: "from-[#45b7d1] to-[#ff8c42]",
      borderColor: "border-[#45b7d1]",
    },
    {
      phase: "Q4 2026 – Future",
      title: "Future",
      desc: "Governance portal, NFT-based energy certificates, and large-scale ecosystem expansion.",
      icon: "🏆",
      color: "from-[#ff8c42] to-[#00d4aa]",
      borderColor: "border-[#ff8c42]",
    },
  ];

  return (
    <section
      id="roadmap"
      className="py-24 bg-gradient-to-br from-[#fafbfc] to-[#f0f8ff] relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-4 h-4 bg-[#00d4aa] rounded-full animate-ping"></div>
        <div className="absolute top-32 right-20 w-3 h-3 bg-[#4ecdc4] rounded-full animate-bounce"></div>
        <div className="absolute bottom-20 left-1/4 w-5 h-5 bg-[#6bcf7f] rounded-full animate-pulse"></div>
        <div className="absolute bottom-32 right-1/3 w-2 h-2 bg-[#ff8c42] rounded-full animate-ping"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold font-['Righteous'] mb-6 bg-gradient-to-r from-[#00d4aa] via-[#4ecdc4] to-[#6bcf7f] bg-clip-text text-transparent">
            🚀 Roadmap
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Follow our journey to a sustainable energy future! ✨
          </p>
        </div>

        {/* Desktop Roadmap */}
        <div className="hidden lg:block relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-[#00d4aa] via-[#4ecdc4] to-[#ff8c42] rounded-full transform -translate-y-1/2"></div>

          <div className="grid grid-cols-5 gap-8 relative">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col items-center">
                {/* Milestone Marker */}
                <div
                  className={`relative w-20 h-20 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-xl ${milestone.borderColor} border-4 border-white hover:scale-110 transition-all duration-300 animate-bounce`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <span className="text-3xl">{milestone.icon}</span>

                  {/* Pulse effect */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${milestone.color} rounded-full animate-ping opacity-20`}
                  ></div>
                </div>

                {/* Milestone Content */}
                <div
                  className={`mt-8 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-2 ${milestone.borderColor} max-w-xs text-center hover:scale-105 transition-all duration-300`}
                >
                  <div
                    className={`text-sm font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent uppercase tracking-wide mb-2`}
                  >
                    {milestone.phase}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 font-['Righteous']">
                    {milestone.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {milestone.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Roadmap */}
        <div className="lg:hidden space-y-8">
          {/* Vertical line */}
          <div className="absolute left-8 top-40 bottom-20 w-1 bg-gradient-to-b from-[#00d4aa] via-[#4ecdc4] to-[#ff8c42] rounded-full"></div>

          {milestones.map((milestone, index) => (
            <div key={index} className="flex items-start gap-6 relative">
              {/* Milestone Marker */}
              <div
                className={`relative w-16 h-16 bg-gradient-to-br ${milestone.color} rounded-full flex items-center justify-center shadow-xl ${milestone.borderColor} border-4 border-white flex-shrink-0 hover:scale-110 transition-all duration-300 animate-bounce`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <span className="text-2xl">{milestone.icon}</span>

                {/* Pulse effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${milestone.color} rounded-full animate-ping opacity-20`}
                ></div>
              </div>

              {/* Milestone Content */}
              <div
                className={`flex-1 bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border-2 ${milestone.borderColor} hover:scale-105 transition-all duration-300`}
              >
                <div
                  className={`text-sm font-bold bg-gradient-to-r ${milestone.color} bg-clip-text text-transparent uppercase tracking-wide mb-2`}
                >
                  {milestone.phase}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 font-['Righteous']">
                  {milestone.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Floating decorations */}
        <div className="absolute top-1/4 right-10 text-4xl animate-bounce opacity-60">
          ⚡
        </div>
        <div className="absolute bottom-1/4 left-10 text-3xl animate-pulse opacity-60">
          🌱
        </div>
        <div className="absolute top-1/3 left-1/4 text-2xl animate-ping opacity-40">
          🔋
        </div>
        <div className="absolute bottom-1/3 right-1/4 text-3xl animate-bounce opacity-50">
          💡
        </div>
      </div>
    </section>
  );
}

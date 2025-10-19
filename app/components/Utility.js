"use client";

export default function Utility() {
  const items = [
    {
      icon: "�️",
      title: "Governance",
      desc: "Vote on ecosystem upgrades and sustainability initiatives.",
      gradient: "from-[#00d4aa] to-[#4ecdc4]",
    },
    {
      icon: "🎁",
      title: "Rewards",
      desc: "Earn ORY by participating in staking and energy-data sharing.",
      gradient: "from-[#4ecdc4] to-[#6bcf7f]",
    },
    {
      icon: "💳",
      title: "Payments",
      desc: "Seamless transactions for IoT devices and renewable energy credits.",
      gradient: "from-[#6bcf7f] to-[#45b7d1]",
    },
    {
      icon: "🔑",
      title: "Access",
      desc: "Exclusive tools, analytics, and early access to platform features.",
      gradient: "from-[#45b7d1] to-[#ff8c42]",
    },
  ];

  return (
    <section
      id="utility"
      className="py-24 bg-gradient-to-br from-[#e8f8f5] to-[#f0f8ff] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold font-['Righteous'] mb-6 bg-gradient-to-r from-[#00d4aa] via-[#4ecdc4] to-[#6bcf7f] bg-clip-text text-transparent">
            � Utility & Ecosystem
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed mb-8">
            Oryon is more than a token — it's the engine of a decentralized IoT
            energy ecosystem.
          </p>
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-[#00d4aa] font-['Righteous']">
              Core Utilities:
            </h3>
          </div>
        </div>

        {/* Utilities Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-[#00d4aa]/10 text-center hover:scale-105 hover:-translate-y-2 transition-all duration-500 relative overflow-hidden group"
            >
              {/* Animated background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500 rounded-3xl`}
              ></div>

              <div className="relative z-10">
                <div
                  className="text-5xl mb-6 animate-bounce"
                  style={{ animationDelay: `${index * 0.3}s` }}
                >
                  {item.icon}
                </div>

                <h4
                  className={`text-2xl font-bold mb-4 font-['Righteous'] bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                >
                  {item.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>

              {/* Border animation */}
              <div
                className={`absolute inset-0 border-2 border-transparent bg-gradient-to-r ${item.gradient} rounded-3xl opacity-0 group-hover:opacity-20 transition-all duration-500`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

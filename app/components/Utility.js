"use client";

export default function Utility() {
  const items = [
    {
      icon: "🗳️",
      title: "Governance",
      desc: "Vote on ecosystem upgrades and sustainability initiatives.",
      bgColor: "bg-[#FFD93D]",
    },
    {
      icon: "🎁",
      title: "Rewards",
      desc: "Earn ORY by participating in staking and energy-data sharing.",
      bgColor: "bg-[#6BCB77]",
    },
    {
      icon: "💳",
      title: "Payments",
      desc: "Seamless transactions for IoT devices and renewable energy credits.",
      bgColor: "bg-[#FF6B6B]",
    },
    {
      icon: "🔑",
      title: "Access",
      desc: "Exclusive tools, analytics, and early access to platform features.",
      bgColor: "bg-[#FFD93D]",
    },
  ];

  return (
    <section
      id="utility"
      className="py-24 bg-[#F8F9FA] relative overflow-hidden border-t-[2px] border-[#22223B]"
    >
      {/* Comic Background Elements */}
      <div className="absolute top-20 left-16 w-32 h-20 bg-[#6BCB77] transform rotate-12 border-[2px] border-[#22223B] rounded-[24px] animate-pulse shadow-lg"></div>
      <div className="absolute top-40 right-20 w-24 h-24 bg-[#FFD93D] rounded-full border-[2px] border-[#22223B] animate-bounce shadow-lg"></div>
      <div className="absolute bottom-32 left-1/4 w-20 h-28 bg-[#FF6B6B] border-[2px] border-[#22223B] rounded-[24px] transform -rotate-12 shadow-lg"></div>
      <div className="absolute top-1/2 right-16 text-5xl font-black text-[#22223B]/10 transform rotate-12 font-['Fredoka_One']">
        UTILITY!
      </div>
      <div className="absolute bottom-24 left-16 text-4xl font-black text-[#22223B]/10 transform -rotate-12 font-['Fredoka_One']">
        POWER!
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Comic Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Comic title background */}
            <div className="absolute inset-0 bg-[#FF6B6B] transform rotate-1 rounded-[24px] border-[2px] border-[#22223B] shadow-[6px_6px_0px_0px_#22223B]"></div>
            <h2 className="relative text-4xl lg:text-6xl font-black text-[#22223B] px-8 py-4 transform -rotate-1 font-['Fredoka_One']">
              ⚡ UTILITY & ECOSYSTEM! ⚡
            </h2>
          </div>

          {/* Comic speech bubble */}
          <div className="relative max-w-4xl mx-auto mt-12">
            <div className="bg-white border-[2px] border-[#22223B] rounded-[24px] p-6 shadow-[4px_4px_8px_rgba(34,34,59,0.15)] transform rotate-1">
              <p className="text-xl text-[#22223B] font-semibold leading-relaxed mb-4 font-['Nunito_Sans']">
                🚀 Oryon is more than a token — it's the engine of a
                decentralized IoT energy ecosystem! 💎
              </p>

              {/* Core utilities badge */}
              <div className="inline-block bg-[#FFD93D] border-[2px] border-[#22223B] rounded-[24px] px-6 py-3 font-black text-[#22223B] shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']">
                🔧 CORE UTILITIES BELOW! 🔧
              </div>

              {/* Speech bubble tail */}
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white"></div>
              <div className="absolute bottom-[-22px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[22px] border-l-transparent border-r-[22px] border-r-transparent border-t-[22px] border-t-[#22223B]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Utilities Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-[24px] shadow-[4px_4px_12px_rgba(34,34,59,0.15)] border-[2px] border-[#22223B] text-center hover:scale-105 hover:-translate-y-2 hover:shadow-[6px_6px_16px_rgba(34,34,59,0.25)] transition-all duration-300 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div
                className="text-5xl mb-6 animate-bounce"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-xl font-black text-[#22223B] mb-4 ${item.bgColor} px-3 py-2 rounded-[24px] border-[2px] border-[#22223B] shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']`}
              >
                {item.title.toUpperCase()}
              </h3>

              {/* Description */}
              <p className="text-[#22223B] font-medium leading-relaxed bg-[#F8F9FA] p-3 rounded-[24px] border-[2px] border-[#22223B] font-['Nunito_Sans']">
                {item.desc}
              </p>
            </div>

            {/* Comic burst decoration */}
            <div className="absolute -top-3 -right-3 w-12 h-12 bg-[#FF6B6B] border-[2px] border-[#22223B] rounded-full flex items-center justify-center font-black text-xs shadow-[2px_2px_0px_0px_#22223B]">
              💥
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

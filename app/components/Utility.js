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
      className="py-12 sm:py-16 lg:py-24 px-4 sm:px-6 bg-[#F8F9FA] relative overflow-hidden border-t-[2px] border-[#22223B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Comic Section Header */}
        <div className="text-center mb-8 lg:mb-16">
          <div className="relative inline-block">
            {/* Comic title background */}
            <div className="absolute inset-0 bg-[#FF6B6B] transform rotate-1 rounded-[20px] lg:rounded-[24px] border-[2px] border-[#22223B] shadow-[4px_4px_0px_0px_#22223B] lg:shadow-[6px_6px_0px_0px_#22223B]"></div>
            <h2 className="relative text-lg sm:text-2xl lg:text-4xl xl:text-6xl font-black text-[#22223B] px-4 sm:px-6 lg:px-8 py-3 lg:py-4 transform -rotate-1 font-['Fredoka_One']">
              ⚡ UTILITY & ECOSYSTEM! ⚡
            </h2>
          </div>

          {/* Comic speech bubble */}
          <div className="relative max-w-4xl mx-auto mt-6 lg:mt-12">
            <div className="bg-white border-[2px] border-[#22223B] rounded-[20px] lg:rounded-[24px] p-4 lg:p-6 shadow-[4px_4px_8px_rgba(34,34,59,0.15)] transform rotate-1">
              <p className="text-base sm:text-lg lg:text-xl text-[#22223B] font-semibold leading-relaxed mb-3 lg:mb-4 font-['Nunito_Sans']">
                Oryon is more than a token — it's the engine of a decentralized
                IoT energy ecosystem!
              </p>

              {/* Core utilities badge */}
              <div className="inline-block bg-[#FFD93D] border-[2px] border-[#22223B] rounded-[16px] lg:rounded-[24px] px-3 sm:px-4 lg:px-6 py-2 lg:py-3 font-black text-[#22223B] shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One'] text-xs sm:text-sm lg:text-base">
                🔧 CORE UTILITIES BELOW! 🔧
              </div>

              {/* Speech bubble tail */}
              <div className="absolute bottom-[-15px] lg:bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[15px] lg:border-l-[20px] border-l-transparent border-r-[15px] lg:border-r-[20px] border-r-transparent border-t-[15px] lg:border-t-[20px] border-t-white"></div>
              <div className="absolute bottom-[-17px] lg:bottom-[-22px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[17px] lg:border-l-[22px] border-l-transparent border-r-[17px] lg:border-r-[22px] border-r-transparent border-t-[17px] lg:border-t-[22px] border-t-[#22223B]"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Utilities Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
        {items.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 sm:p-6 lg:p-8 rounded-[20px] lg:rounded-[24px] shadow-[4px_4px_12px_rgba(34,34,59,0.15)] border-[2px] border-[#22223B] text-center hover:scale-105 hover:-translate-y-2 hover:shadow-[6px_6px_16px_rgba(34,34,59,0.25)] transition-all duration-300 relative overflow-hidden group"
          >
            <div className="relative z-10">
              <div
                className="text-3xl sm:text-4xl lg:text-5xl mb-4 lg:mb-6 animate-bounce"
                style={{ animationDelay: `${index * 0.3}s` }}
              >
                {item.icon}
              </div>

              {/* Title */}
              <h3
                className={`text-sm sm:text-base lg:text-xl font-black text-[#22223B] mb-3 lg:mb-4 ${item.bgColor} px-2 lg:px-3 py-1.5 lg:py-2 rounded-[16px] lg:rounded-[24px] border-[2px] border-[#22223B] shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']`}
              >
                {item.title.toUpperCase()}
              </h3>

              {/* Description */}
              <p className="text-[#22223B] font-medium leading-relaxed bg-[#F8F9FA] p-2 lg:p-3 rounded-[16px] lg:rounded-[24px] border-[2px] border-[#22223B] font-['Nunito_Sans'] text-xs sm:text-sm lg:text-base">
                {item.desc}
              </p>
            </div>

            {/* Comic burst decoration */}
            <div className="absolute -top-2 lg:-top-3 -right-2 lg:-right-3 w-8 sm:w-10 lg:w-12 h-8 sm:h-10 lg:h-12 bg-[#FF6B6B] border-[2px] border-[#22223B] rounded-full flex items-center justify-center font-black text-[10px] sm:text-xs shadow-[2px_2px_0px_0px_#22223B]">
              💥
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

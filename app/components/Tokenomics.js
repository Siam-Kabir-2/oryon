"use client";

export default function Tokenomics() {
  const distributions = [
    {
      category: "Founder & Team",
      icon: "👥",
      percentage: "10%",
      tokens: "10,000,000",
      bgColor: "bg-[#FFD93D]",
    },
    {
      category: "Marketing & Partnerships",
      icon: "📢",
      percentage: "10%",
      tokens: "10,000,000",
      bgColor: "bg-[#6BCB77]",
    },
    {
      category: "Presale",
      icon: "🚀",
      percentage: "30%",
      tokens: "30,000,000",
      bgColor: "bg-[#FF6B6B]",
    },
    {
      category: "DEX Liquidity",
      icon: "💧",
      percentage: "50%",
      tokens: "50,000,000",
      bgColor: "bg-[#6BCB77]",
    },
  ];

  const copyContract = () => {
    const address = "0xB846d28185F1D36D9aAB4f1E33BC0FD060bc1Daf";
    navigator.clipboard.writeText(address).then(() => {
      // Could add toast notification here
    });
  };

  return (
    <section
      id="tokenomics"
      className="py-24 bg-[#F8F9FA] relative overflow-hidden border-t-[2px] border-[#22223B]"
    >
      {/* Clean Background Elements */}
      <div className="absolute top-20 left-20 w-24 h-24 bg-[#6BCB77] transform rotate-12 border-[2px] border-[#22223B] rounded-[24px] animate-pulse shadow-lg"></div>
      <div className="absolute top-40 right-16 w-20 h-20 bg-[#FF6B6B] rounded-full border-[2px] border-[#22223B] animate-bounce shadow-lg"></div>
      <div className="absolute bottom-32 left-1/4 w-16 h-32 bg-[#FFD93D] border-[2px] border-[#22223B] rounded-[24px] transform -rotate-12 shadow-lg"></div>
      <div className="absolute top-1/3 right-20 text-5xl font-black text-[#22223B]/10 transform rotate-45 font-['Fredoka_One']">
        BOOM!
      </div>
      <div className="absolute bottom-20 right-1/3 text-4xl font-black text-[#22223B]/10 transform -rotate-12 font-['Fredoka_One']">
        WOW!
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Title background */}
            <div className="absolute inset-0 bg-[#FF6B6B] transform -rotate-3 rounded-[24px] border-[2px] border-[#22223B] shadow-[6px_6px_0px_0px_#22223B]"></div>
            <h2 className="relative text-4xl lg:text-6xl font-black text-[#22223B] px-8 py-4 transform rotate-3 font-['Fredoka_One']">
              💰 TOKENOMICS! 💰
            </h2>
          </div>

          {/* Speech bubble */}
          <div className="relative max-w-4xl mx-auto mt-12">
            <div className="bg-white border-[2px] border-[#22223B] rounded-[24px] p-6 shadow-[4px_4px_12px_rgba(34,34,59,0.15)] transform -rotate-1">
              <p className="text-xl text-[#22223B] font-semibold leading-relaxed font-['Nunito_Sans']">
                💎 Transparent token distribution and sustainable economic
                model! 📊
              </p>
              {/* Speech bubble tail */}
              <div className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#22223B]"></div>
              <div className="absolute bottom-[-18px] left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[18px] border-t-white"></div>
            </div>
          </div>
        </div>

        {/* Total Supply Card */}
        <div className="flex justify-center mb-16">
          <div className="relative bg-[#FFD93D] border-[2px] border-[#22223B] p-8 rounded-[24px] shadow-[4px_4px_12px_rgba(34,34,59,0.15)] text-center hover:scale-105 transition-all duration-300">
            {/* Badge */}
            <div className="absolute -top-4 -right-4 bg-[#FF6B6B] text-white text-lg font-black px-4 py-2 rounded-full border-[2px] border-[#22223B] transform rotate-12 shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']">
              TOTAL!
            </div>

            <div className="text-6xl mb-4">🪙</div>
            <h3 className="text-2xl font-black text-[#22223B] mb-4 bg-[#6BCB77] px-4 py-2 rounded-[24px] border-[2px] border-[#22223B] inline-block shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']">
              TOTAL SUPPLY
            </h3>
            <div className="text-4xl font-black text-[#22223B] mb-2 bg-white px-4 py-2 rounded-[24px] border-[2px] border-[#22223B] shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']">
              100,000,000 ORY
            </div>
            <div className="text-[#22223B] font-semibold bg-white px-3 py-1 rounded-[24px] border-[2px] border-[#22223B] inline-block font-['Nunito_Sans']">
              Token Standard: BEP-20
            </div>
          </div>
        </div>

        {/* Distribution Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {distributions.map((item, index) => (
            <div
              key={index}
              className="relative bg-white border-[2px] border-[#22223B] rounded-[24px] p-6 shadow-[4px_4px_12px_rgba(34,34,59,0.15)] hover:scale-105 hover:shadow-[6px_6px_16px_rgba(34,34,59,0.25)] transition-all duration-300"
            >
              {/* Category icon and title */}
              <div className="text-center mb-4">
                <div className="text-4xl mb-2">{item.icon}</div>
                <h3
                  className={`font-black text-[#22223B] ${item.bgColor} px-3 py-1 rounded-[24px] border-[2px] border-[#22223B] text-sm inline-block shadow-[2px_2px_0px_0px_#22223B] font-['Fredoka_One']`}
                >
                  {item.category.toUpperCase()}
                </h3>
              </div>

              {/* Percentage display */}
              <div className="relative mb-4">
                <div
                  className={`${item.bgColor} border-[2px] border-[#22223B] rounded-[24px] p-4 text-center shadow-[3px_3px_0px_0px_#22223B]`}
                >
                  <div className="text-3xl font-black text-[#22223B] font-['Fredoka_One']">
                    {item.percentage}
                  </div>
                </div>
              </div>

              {/* Token amount */}
              <div className="text-center bg-[#F8F9FA] border-[2px] border-[#22223B] rounded-[24px] p-2">
                <div className="text-lg font-semibold text-[#22223B] font-['Nunito_Sans']">
                  {item.tokens} ORY
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contract Information */}
        <div className="relative">
          <div className="relative bg-[#6BCB77] border-[2px] border-[#22223B] p-8 rounded-[24px] shadow-[4px_4px_12px_rgba(34,34,59,0.15)]">
            {/* Badge */}
            <div className="absolute -top-4 -left-4 bg-[#FF6B6B] text-white text-lg font-black px-4 py-2 rounded-full border-[2px] border-[#22223B] transform -rotate-12 shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']">
              INFO!
            </div>

            <h3 className="text-3xl font-black text-center text-[#22223B] mb-8 bg-[#FFD93D] px-6 py-3 rounded-[24px] border-[2px] border-[#22223B] shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']">
              📋 CONTRACT INFO 📋
            </h3>

            <div className="space-y-6">
              <div className="relative flex items-center justify-between p-4 bg-white border-[2px] border-[#22223B] rounded-[24px] shadow-[3px_3px_0px_0px_#22223B]">
                <strong className="text-lg text-[#22223B] font-black font-['Fredoka_One']">
                  Network:
                </strong>
                <span className="text-lg font-semibold text-[#22223B] font-['Nunito_Sans']">
                  Binance Smart Chain (BSC)
                </span>
              </div>

              <div className="relative p-4 bg-white border-[2px] border-[#22223B] rounded-[24px] shadow-[3px_3px_0px_0px_#22223B]">
                <div className="flex flex-col gap-4">
                  <strong className="text-lg text-[#22223B] font-black font-['Fredoka_One']">
                    Test Contract (BUSD Testnet):
                  </strong>
                  <div className="flex items-center gap-3 bg-[#F8F9FA] p-3 rounded-[24px] border-[2px] border-[#22223B]">
                    <code className="font-mono text-sm text-[#22223B] font-semibold break-all">
                      0xB846d28185F1D36D9aAB4f1E33BC0FD060bc1Daf
                    </code>
                    <button onClick={copyContract} className="relative group">
                      <div
                        className="p-2 bg-[#FF6B6B] text-white rounded-[24px] border-[2px] border-[#22223B] hover:scale-105 transition-all duration-200 shadow-[2px_2px_0px_0px_#22223B] font-black font-['Fredoka_One']"
                        title="Copy Contract Address"
                      >
                        📋 COPY
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

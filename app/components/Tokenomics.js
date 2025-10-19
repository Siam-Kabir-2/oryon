"use client";

export default function Tokenomics() {
  const distributions = [
    {
      category: "Founder & Team",
      icon: "👥",
      percentage: "10%",
      tokens: "10,000,000",
      color: "from-[#6bcf7f] to-[#00d4aa]",
    },
    {
      category: "Marketing & Partnerships",
      icon: "📢",
      percentage: "10%",
      tokens: "10,000,000",
      color: "from-[#4a90e2] to-[#45b7d1]",
    },
    {
      category: "Presale",
      icon: "🚀",
      percentage: "30%",
      tokens: "30,000,000",
      color: "from-[#00d4aa] to-[#4ecdc4]",
    },
    {
      category: "DEX Liquidity",
      icon: "💧",
      percentage: "50%",
      tokens: "50,000,000",
      color: "from-[#ff8c42] to-[#6bcf7f]",
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
      className="py-24 bg-gradient-to-br from-[#f0f8ff] to-[#e8f8f5] relative overflow-hidden"
    >
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-radial from-[#4ecdc4]/5 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold font-['Righteous'] mb-6 bg-gradient-to-r from-[#00d4aa] via-[#4ecdc4] to-[#6bcf7f] bg-clip-text text-transparent">
            � Tokenomics
          </h2>
          <p className="text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Transparent token distribution and sustainable economic model
          </p>
        </div>

        {/* Total Supply Card */}
        <div className="flex justify-center mb-16">
          <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-[#00d4aa]/20 text-center hover:scale-105 transition-all duration-300">
            <div className="text-6xl mb-4 animate-bounce">🪙</div>
            <h3 className="text-2xl font-bold text-[#00d4aa] mb-4">
              Total Supply
            </h3>
            <div className="text-4xl font-bold bg-gradient-to-r from-[#00d4aa] to-[#4ecdc4] bg-clip-text text-transparent mb-2">
              100,000,000 ORY
            </div>
            <div className="text-gray-600 font-semibold">
              Token Standard: BEP-20
            </div>
          </div>
        </div>

        {/* Distribution Table */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-xl border border-[#00d4aa]/10 overflow-hidden mb-16">
          {/* Table Header */}
          <div className="bg-gradient-to-r from-[#00d4aa] to-[#4ecdc4] p-6 grid grid-cols-3 gap-4 text-white font-bold text-center">
            <div className="text-lg">Category</div>
            <div className="text-lg">Allocation</div>
            <div className="text-lg">Tokens (ORY)</div>
          </div>

          {/* Table Rows */}
          {distributions.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-3 gap-4 p-6 border-b border-[#00d4aa]/10 last:border-0 hover:bg-[#00d4aa]/5 transition-all duration-300"
            >
              <div className="flex items-center gap-4 font-semibold">
                <span className="text-2xl">{item.icon}</span>
                <span className="text-gray-800">{item.category}</span>
              </div>
              <div className="text-center text-xl font-bold text-gray-800">
                {item.percentage}
              </div>
              <div className="text-center text-xl font-bold text-gray-800">
                {item.tokens}
              </div>
            </div>
          ))}
        </div>

        {/* Contract Information */}
        <div className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border border-[#00d4aa]/10">
          <h3 className="text-3xl font-bold text-center text-[#00d4aa] mb-8 font-['Righteous']">
            📋 Contract Information
          </h3>

          <div className="space-y-6">
            <div className="flex items-center justify-between p-4 bg-[#00d4aa]/5 rounded-2xl border-l-4 border-[#00d4aa]">
              <strong className="text-lg text-gray-800">Network:</strong>
              <span className="text-lg font-semibold text-gray-800">
                Binance Smart Chain (BSC)
              </span>
            </div>

            <div className="p-4 bg-[#00d4aa]/5 rounded-2xl border-l-4 border-[#00d4aa]">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <strong className="text-lg text-gray-800">
                  Test Contract (BUSD Testnet):
                </strong>
                <div className="flex items-center gap-3 bg-white p-3 rounded-xl border">
                  <code className="font-mono text-sm text-gray-700 break-all">
                    0xB846d28185F1D36D9aAB4f1E33BC0FD060bc1Daf
                  </code>
                  <button
                    onClick={copyContract}
                    className="p-2 bg-[#00d4aa] text-white rounded-lg hover:bg-[#4ecdc4] transition-all duration-300 hover:scale-110"
                    title="Copy Contract Address"
                  >
                    <i className="fas fa-copy"></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

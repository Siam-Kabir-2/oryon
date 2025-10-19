"use client";
import { useState } from "react";

export default function Tokenomics() {
  const [hoveredSegment, setHoveredSegment] = useState(null);
  const [selectedSegment, setSelectedSegment] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  const distributions = [
    {
      category: "DEX Liquidity",
      icon: "💧",
      percentage: "50%",
      tokens: "50,000,000",
      bgColor: "bg-[#6BCB77]",
      strokeColor: "#6BCB77",
      offset: 0,
      purpose: "Market stability and trading support",
      description:
        "Reserved for providing liquidity on decentralized exchanges to ensure smooth trading and price stability.",
      lockPeriod: "Immediately available for liquidity provision",
    },
    {
      category: "Presale",
      icon: "🚀",
      percentage: "30%",
      tokens: "30,000,000",
      bgColor: "bg-[#FF6B6B]",
      strokeColor: "#FF6B6B",
      offset: 50,
      purpose: "Fundraising and community building",
      description:
        "Allocated for the public presale event to raise funds for project development and marketing.",
      lockPeriod: "Released upon presale completion",
    },
    {
      category: "Founder & Team",
      icon: "👥",
      percentage: "10%",
      tokens: "10,000,000",
      bgColor: "bg-[#FFD93D]",
      strokeColor: "#FFD93D",
      offset: 80,
      purpose: "Team incentives and project sustainability",
      description:
        "Reserved for the founding team and core developers with vesting schedule to ensure long-term commitment.",
      lockPeriod: "12-month cliff, 24-month linear vesting",
    },
    {
      category: "Marketing",
      icon: "📢",
      percentage: "10%",
      tokens: "10,000,000",
      bgColor: "bg-[#A78BFA]",
      strokeColor: "#A78BFA",
      offset: 90,
      purpose: "Brand awareness and user acquisition",
      description:
        "Dedicated to marketing campaigns, partnerships, and community growth initiatives worldwide.",
      lockPeriod: "Released quarterly based on milestones",
    },
  ];

  const copyContract = async () => {
    const address = "0xB846d28185F1D36D9aAB4f1E33BC0FD060bc1Daf";
    
    try {
      // Check if clipboard API is available
      if (!navigator.clipboard) {
        // Fallback for older browsers
        const textArea = document.createElement('textarea');
        textArea.value = address;
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      } else {
        // Modern clipboard API
        await navigator.clipboard.writeText(address);
      }
      
      // Update button state to show "COPIED"
      setIsCopied(true);
      
      // Console log for testing
      console.log('✅ Copy Success - Contract Address:', address);
      
      // Reset button after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
      
    } catch (error) {
      // Error handling
      console.error('❌ Copy failed:', error);
      
      // Show error state briefly
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    }
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
        {/* Section Header with Integrated Total Supply */}
        <div className="text-center mb-16">
          <div className="relative inline-block">
            {/* Title background */}
            <div className="absolute inset-0 bg-[#FF6B6B] transform -rotate-3 rounded-[32px] border-[4px] border-[#22223B] shadow-[8px_8px_0px_0px_#22223B]"></div>
            <div className="relative px-12 py-8 transform rotate-3">
              <h2 className="text-4xl lg:text-6xl font-['Fredoka_One'] text-[#22223B] mb-4">
                💰 TOKENOMICS! 💰
              </h2>
              <div className="flex items-center justify-center gap-4 bg-[#FFD93D] rounded-[24px] border-[3px] border-[#22223B] p-4 shadow-[4px_4px_0px_0px_#22223B]">
                <span className="text-3xl">🪙</span>
                <div className="text-center">
                  <div className="font-['Fredoka_One'] text-[#22223B] text-xl">
                    TOTAL SUPPLY
                  </div>
                  <div className="font-['Fredoka_One'] text-[#FF6B6B] text-2xl">
                    100,000,000 ORY
                  </div>
                  <div className="font-['Nunito_Sans'] text-[#22223B] text-sm font-semibold">
                    BEP-20 Token
                  </div>
                </div>
                <span className="text-3xl">⚡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Token Distribution - Clean Pie Chart */}
        <div className="mb-16 relative">
          <div 
            className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] border-[4px] border-[#22223B] rounded-[32px] p-8 shadow-[6px_6px_0px_0px_#22223B] relative"
            style={{
              backgroundImage: "url(/distribution.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-center mb-8">
              <h3 className="text-3xl font-['Fredoka_One'] text-[#22223B] bg-[#FFD93D] px-8 py-4 rounded-[32px] border-[3px] border-[#22223B] shadow-[4px_4px_0px_0px_#22223B] inline-block">
                📊 TOKEN DISTRIBUTION 📊
              </h3>
            </div>

            <div className="flex justify-center">
              {/* Clean Pie Chart */}
              <div
                className="relative"
                onClick={() => {
                  setSelectedSegment(null);
                  setHoveredSegment(null);
                }}
              >
                <svg width="400" height="400" className="transform -rotate-90">
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="#E9ECEF"
                    strokeWidth="60"
                    className="drop-shadow-md"
                  />

                  {distributions.map((item, index) => {
                    const circumference = 2 * Math.PI * 140;
                    const percentage = parseInt(item.percentage);
                    const strokeDasharray = `${
                      (percentage / 100) * circumference
                    } ${circumference}`;
                    const strokeDashoffset = -(
                      (item.offset / 100) *
                      circumference
                    );

                    return (
                      <circle
                        key={index}
                        cx="200"
                        cy="200"
                        r="140"
                        fill="none"
                        stroke={item.strokeColor}
                        strokeWidth="60"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        className={`transition-all duration-500 cursor-pointer ${
                          hoveredSegment === index || selectedSegment === index
                            ? "opacity-100 drop-shadow-lg"
                            : "opacity-90"
                        }`}
                        onMouseEnter={() => setHoveredSegment(index)}
                        onMouseLeave={() => setHoveredSegment(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedSegment(
                            selectedSegment === index ? null : index
                          );
                        }}
                        style={{
                          filter:
                            hoveredSegment === index ||
                            selectedSegment === index
                              ? "brightness(1.2) saturate(1.2)"
                              : "brightness(1)",
                          strokeWidth:
                            hoveredSegment === index ||
                            selectedSegment === index
                              ? "70"
                              : "60",
                        }}
                      />
                    );
                  })}
                </svg>

                {/* Center Info */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center bg-white border-[3px] border-[#22223B] rounded-full p-6 shadow-[6px_6px_0px_0px_#22223B]">
                    <div className="text-4xl mb-2">🪙</div>
                    <div className="font-['Fredoka_One'] text-[#22223B] text-lg">
                      100M ORY
                    </div>
                  </div>
                </div>

                {/* Small Labels */}
                {distributions.map((item, index) => {
                  const percentage = parseInt(item.percentage);
                  const previousPercentages = distributions
                    .slice(0, index)
                    .reduce((sum, prev) => sum + parseInt(prev.percentage), 0);
                  const angle =
                    ((previousPercentages + percentage / 2) / 100) *
                      2 *
                      Math.PI -
                    Math.PI / 2;
                  const labelRadius = 180;
                  const x = 200 + Math.cos(angle) * labelRadius;
                  const y = 200 + Math.sin(angle) * labelRadius;

                  return (
                    <div
                      key={`label-${index}`}
                      className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer ${
                        hoveredSegment === index || selectedSegment === index
                          ? "scale-110 z-20"
                          : "z-10"
                      }`}
                      style={{
                        left: `${x}px`,
                        top: `${y}px`,
                      }}
                      onMouseEnter={() => setHoveredSegment(index)}
                      onMouseLeave={() => setHoveredSegment(null)}
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedSegment(
                          selectedSegment === index ? null : index
                        );
                      }}
                    >
                      <div
                        className={`${
                          item.bgColor
                        } border-[3px] border-[#22223B] rounded-full w-16 h-16 flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_#22223B] ${
                          hoveredSegment === index || selectedSegment === index
                            ? "shadow-[6px_6px_0px_0px_#22223B]"
                            : ""
                        }`}
                      >
                        <div className="text-lg">{item.icon}</div>
                        <div className="font-['Fredoka_One'] text-[#22223B] text-xs">
                          {item.percentage}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Instruction Text */}
            <p className="text-center mt-6 font-['Nunito_Sans'] text-[#22223B] text-sm font-semibold">
              💡 Click any segment for detailed tokenomics information
            </p>
          </div>

          {/* Popup Details Modal - Overlay on Chart */}
          {(hoveredSegment !== null || selectedSegment !== null) &&
            (() => {
              const activeSegment =
                selectedSegment !== null ? selectedSegment : hoveredSegment;
              const item = distributions[activeSegment];

              // Only show popup if we have complete data
              if (
                !item ||
                !item.purpose ||
                !item.description ||
                !item.lockPeriod
              ) {
                return null;
              }

              return (
                <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                  <div
                    className="bg-white border-[2px] border-[#22223B] rounded-[24px] p-6 shadow-[8px_8px_0px_0px_#22223B] min-w-[320px] max-w-[400px] pointer-events-auto"
                    onClick={(e) => e.stopPropagation()}
                    onMouseEnter={() => {
                      // Keep the current hover state when hovering over popup
                      if (selectedSegment === null) {
                        setHoveredSegment(activeSegment);
                      }
                    }}
                    onMouseLeave={(e) => {
                      // Only clear hover if we're not hovering over a chart element
                      if (
                        selectedSegment === null &&
                        !e.relatedTarget?.closest("circle")
                      ) {
                        setHoveredSegment(null);
                      }
                    }}
                  >
                    {/* Header */}
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`${item.bgColor} border-[2px] border-[#22223B] rounded-full w-12 h-12 flex items-center justify-center shadow-[3px_3px_0px_0px_#22223B]`}
                      >
                        <span className="text-xl">{item.icon}</span>
                      </div>
                      <div>
                        <h4 className="font-['Fredoka_One'] text-[#22223B] text-lg">
                          {item.category}
                        </h4>
                        <div className="flex items-center gap-2">
                          <span className="font-['Fredoka_One'] text-[#FF6B6B] text-base">
                            {item.percentage}
                          </span>
                          <span className="font-['Nunito_Sans'] text-[#22223B] text-xs">
                            ({item.tokens} ORY)
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="space-y-2">
                      <div>
                        <h5 className="font-['Fredoka_One'] text-[#22223B] text-xs mb-1">
                          📝 Purpose:
                        </h5>
                        <p className="font-['Nunito_Sans'] text-[#22223B] text-xs leading-relaxed">
                          {item.purpose}
                        </p>
                      </div>
                      <div>
                        <h5 className="font-['Fredoka_One'] text-[#22223B] text-xs mb-1">
                          📖 Description:
                        </h5>
                        <p className="font-['Nunito_Sans'] text-[#22223B] text-xs leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div>
                        <h5 className="font-['Fredoka_One'] text-[#22223B] text-xs mb-1">
                          🔒 Lock Period:
                        </h5>
                        <p className="font-['Nunito_Sans'] text-[#22223B] text-xs">
                          {item.lockPeriod}
                        </p>
                      </div>
                    </div>

                    {/* Close button */}
                    <button
                      onClick={() => {
                        setSelectedSegment(null);
                        setHoveredSegment(null);
                      }}
                      className="absolute top-2 right-2 bg-[#FF6B6B] text-white rounded-full w-6 h-6 flex items-center justify-center border-[2px] border-[#22223B] shadow-[2px_2px_0px_0px_#22223B] hover:scale-110 transition-all duration-200 font-['Fredoka_One'] text-xs"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              );
            })()}
        </div>

        {/* Contract Information - Integrated Banner */}
        <div className="relative">
          <div className="bg-gradient-to-r from-[#6BCB77] via-[#FFD93D] to-[#FF6B6B] border-[4px] border-[#22223B] rounded-[32px] p-8 shadow-[6px_6px_0px_0px_#22223B]">
            <div className="text-center mb-6">
              <h3 className="text-2xl md:text-3xl font-['Fredoka_One'] text-[#22223B] bg-white px-6 py-3 rounded-[24px] border-[3px] border-[#22223B] shadow-[4px_4px_0px_0px_#22223B] inline-block">
                📋 CONTRACT DETAILS 📋
              </h3>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Network Info */}
              <div className="bg-white p-6 rounded-[24px] border-[3px] border-[#22223B] shadow-[4px_4px_0px_0px_#22223B] text-center">
                <div className="text-4xl mb-3">🌐</div>
                <h4 className="font-['Fredoka_One'] text-[#22223B] text-lg mb-2">
                  NETWORK
                </h4>
                <p className="font-['Nunito_Sans'] text-[#22223B] font-bold">
                  Binance Smart Chain (BSC)
                </p>
              </div>

              {/* Contract Address */}
              <div className="bg-white p-6 rounded-[24px] border-[3px] border-[#22223B] shadow-[4px_4px_0px_0px_#22223B] text-center">
                <div className="text-4xl mb-3">📝</div>
                <h4 className="font-['Fredoka_One'] text-[#22223B] text-lg mb-3">
                  TEST CONTRACT
                </h4>
                <div className="bg-[#F8F9FA] p-3 rounded-[16px] border-[2px] border-[#22223B] mb-3">
                  <code className="font-mono text-xs text-[#22223B] font-semibold break-all">
                    0xB846d28185F1D36D9aAB4f1E33BC0FD060bc1Daf
                  </code>
                </div>
                <button
                  onClick={copyContract}
                  className={`px-4 py-2 rounded-[16px] border-[2px] border-[#22223B] hover:scale-105 transition-all duration-200 shadow-[2px_2px_0px_0px_#22223B] font-['Fredoka_One'] text-sm ${
                    isCopied 
                      ? 'bg-[#6BCB77] text-white' 
                      : 'bg-[#FF6B6B] text-white'
                  }`}
                >
                  {isCopied ? '✅ COPIED!' : '📋 COPY ADDRESS'}
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

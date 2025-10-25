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
        const textArea = document.createElement("textarea");
        textArea.value = address;
        textArea.style.position = "fixed";
        textArea.style.left = "-999999px";
        textArea.style.top = "-999999px";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      } else {
        // Modern clipboard API
        await navigator.clipboard.writeText(address);
      }

      // Update button state to show "COPIED"
      setIsCopied(true);

      // Console log for testing
      console.log("✅ Copy Success - Contract Address:", address);

      // Reset button after 2 seconds
      setTimeout(() => {
        setIsCopied(false);
      }, 2000);
    } catch (error) {
      // Error handling
      console.error("❌ Copy failed:", error);

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
        <div className="text-center mb-8 lg:mb-16">
          <div className="relative inline-block">
            {/* Title background */}
            <div className="absolute inset-0 bg-[#FF6B6B] transform -rotate-3 rounded-[24px] lg:rounded-[32px] border-[4px] border-[#22223B] shadow-[8px_8px_0px_0px_#22223B]"></div>
            <div className="relative px-6 sm:px-8 lg:px-12 py-4 sm:py-6 lg:py-8 transform rotate-3">
              <h2 className="text-2xl sm:text-3xl lg:text-6xl font-['Fredoka_One'] text-[#22223B] mb-3 lg:mb-4">
                💰 TOKENOMICS! 💰
              </h2>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 bg-[#FFD93D] rounded-[20px] lg:rounded-[24px] border-[3px] border-[#22223B] p-3 lg:p-4 shadow-[4px_4px_0px_0px_#22223B]">
                <span className="text-2xl lg:text-3xl">🪙</span>
                <div className="text-center">
                  <div className="font-['Fredoka_One'] text-[#22223B] text-sm sm:text-base lg:text-xl">
                    TOTAL SUPPLY
                  </div>
                  <div className="font-['Fredoka_One'] text-[#FF6B6B] text-lg sm:text-xl lg:text-2xl">
                    100,000,000 ORY
                  </div>
                  <div className="font-['Nunito_Sans'] text-[#22223B] text-xs lg:text-sm font-semibold">
                    BEP-20 Token
                  </div>
                </div>
                <span className="text-2xl lg:text-3xl">⚡</span>
              </div>
            </div>
          </div>
        </div>

        {/* Token Distribution - Clean Pie Chart */}
        <div className="mb-8 lg:mb-16 relative">
          <div
            className="bg-gradient-to-br from-[#F8F9FA] to-[#E9ECEF] border-[4px] border-[#22223B] rounded-[24px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-[6px_6px_0px_0px_#22223B] relative"
            style={{
              backgroundImage: "url(/distribution.svg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          >
            <div className="text-center mb-6 lg:mb-8">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-['Fredoka_One'] text-[#22223B] bg-[#FFD93D] px-4 sm:px-6 lg:px-8 py-3 lg:py-4 rounded-[24px] lg:rounded-[32px] border-[3px] border-[#22223B] shadow-[4px_4px_0px_0px_#22223B] inline-block">
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
                <svg
                  width="300"
                  height="300"
                  className="sm:w-[350px] sm:h-[350px] lg:w-[400px] lg:h-[400px] transform -rotate-90"
                >
                  <circle
                    cx="150"
                    cy="150"
                    r="105"
                    fill="none"
                    stroke="#E9ECEF"
                    strokeWidth="45"
                    className="drop-shadow-md sm:hidden"
                  />
                  <circle
                    cx="175"
                    cy="175"
                    r="122.5"
                    fill="none"
                    stroke="#E9ECEF"
                    strokeWidth="52.5"
                    className="drop-shadow-md hidden sm:block lg:hidden"
                  />
                  <circle
                    cx="200"
                    cy="200"
                    r="140"
                    fill="none"
                    stroke="#E9ECEF"
                    strokeWidth="60"
                    className="drop-shadow-md hidden lg:block"
                  />

                  {distributions.map((item, index) => {
                    const circumference = 2 * Math.PI * 105; // Mobile
                    const circumferenceSm = 2 * Math.PI * 122.5; // Tablet
                    const circumferenceLg = 2 * Math.PI * 140; // Desktop
                    const percentage = parseInt(item.percentage);

                    // Mobile calculations
                    const strokeDasharray = `${
                      (percentage / 100) * circumference
                    } ${circumference}`;
                    const strokeDashoffset = -(
                      (item.offset / 100) *
                      circumference
                    );

                    // Tablet calculations
                    const strokeDasharraySm = `${
                      (percentage / 100) * circumferenceSm
                    } ${circumferenceSm}`;
                    const strokeDashoffsetSm = -(
                      (item.offset / 100) *
                      circumferenceSm
                    );

                    // Desktop calculations
                    const strokeDasharrayLg = `${
                      (percentage / 100) * circumferenceLg
                    } ${circumferenceLg}`;
                    const strokeDashoffsetLg = -(
                      (item.offset / 100) *
                      circumferenceLg
                    );

                    return (
                      <g key={index}>
                        {/* Mobile circle */}
                        <circle
                          cx="150"
                          cy="150"
                          r="105"
                          fill="none"
                          stroke={item.strokeColor}
                          strokeWidth="45"
                          strokeDasharray={strokeDasharray}
                          strokeDashoffset={strokeDashoffset}
                          className={`transition-all duration-500 cursor-pointer sm:hidden ${
                            hoveredSegment === index ||
                            selectedSegment === index
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
                                ? "52"
                                : "45",
                          }}
                        />

                        {/* Tablet circle */}
                        <circle
                          cx="175"
                          cy="175"
                          r="122.5"
                          fill="none"
                          stroke={item.strokeColor}
                          strokeWidth="52.5"
                          strokeDasharray={strokeDasharraySm}
                          strokeDashoffset={strokeDashoffsetSm}
                          className={`transition-all duration-500 cursor-pointer hidden sm:block lg:hidden ${
                            hoveredSegment === index ||
                            selectedSegment === index
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
                                ? "61"
                                : "52.5",
                          }}
                        />

                        {/* Desktop circle */}
                        <circle
                          cx="200"
                          cy="200"
                          r="140"
                          fill="none"
                          stroke={item.strokeColor}
                          strokeWidth="60"
                          strokeDasharray={strokeDasharrayLg}
                          strokeDashoffset={strokeDashoffsetLg}
                          className={`transition-all duration-500 cursor-pointer hidden lg:block ${
                            hoveredSegment === index ||
                            selectedSegment === index
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
                      </g>
                    );
                  })}
                </svg>

                {/* Center Info */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center bg-white border-[3px] border-[#22223B] rounded-full p-3 sm:p-4 lg:p-6 shadow-[4px_4px_0px_0px_#22223B] lg:shadow-[6px_6px_0px_0px_#22223B]">
                    <div className="text-2xl sm:text-3xl lg:text-4xl mb-1 lg:mb-2">
                      🪙
                    </div>
                    <div className="font-['Fredoka_One'] text-[#22223B] text-sm sm:text-base lg:text-lg">
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

                  // Responsive label positioning
                  const labelRadiusMobile = 135;
                  const labelRadiusTablet = 157.5;
                  const labelRadiusDesktop = 180;

                  // Mobile positions - rounded to 2 decimal places to prevent hydration mismatch
                  const xMobile =
                    Math.round(
                      (150 + Math.cos(angle) * labelRadiusMobile) * 100
                    ) / 100;
                  const yMobile =
                    Math.round(
                      (150 + Math.sin(angle) * labelRadiusMobile) * 100
                    ) / 100;

                  // Tablet positions - rounded to 2 decimal places to prevent hydration mismatch
                  const xTablet =
                    Math.round(
                      (175 + Math.cos(angle) * labelRadiusTablet) * 100
                    ) / 100;
                  const yTablet =
                    Math.round(
                      (175 + Math.sin(angle) * labelRadiusTablet) * 100
                    ) / 100;

                  const xDesktop =
                    Math.round(
                      (200 + Math.cos(angle) * labelRadiusDesktop) * 100
                    ) / 100;
                  const yDesktop =
                    Math.round(
                      (200 + Math.sin(angle) * labelRadiusDesktop) * 100
                    ) / 100;
                  return (
                    <div key={`label-container-${index}`}>
                      {/* Mobile label */}
                      <div
                        key={`label-mobile-${index}`}
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer sm:hidden ${
                          hoveredSegment === index || selectedSegment === index
                            ? "scale-110 z-20"
                            : "z-10"
                        }`}
                        style={{
                          left: `${xMobile}px`,
                          top: `${yMobile}px`,
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
                          } border-[2px] border-[#22223B] rounded-full w-12 h-12 flex flex-col items-center justify-center shadow-[3px_3px_0px_0px_#22223B] ${
                            hoveredSegment === index ||
                            selectedSegment === index
                              ? "shadow-[4px_4px_0px_0px_#22223B]"
                              : ""
                          }`}
                        >
                          <div className="text-sm">{item.icon}</div>
                          <div className="font-['Fredoka_One'] text-[#22223B] text-[10px]">
                            {item.percentage}
                          </div>
                        </div>
                      </div>

                      {/* Tablet label */}
                      <div
                        key={`label-tablet-${index}`}
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer hidden sm:block lg:hidden ${
                          hoveredSegment === index || selectedSegment === index
                            ? "scale-110 z-20"
                            : "z-10"
                        }`}
                        style={{
                          left: `${xTablet}px`,
                          top: `${yTablet}px`,
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
                          } border-[3px] border-[#22223B] rounded-full w-14 h-14 flex flex-col items-center justify-center shadow-[4px_4px_0px_0px_#22223B] ${
                            hoveredSegment === index ||
                            selectedSegment === index
                              ? "shadow-[5px_5px_0px_0px_#22223B]"
                              : ""
                          }`}
                        >
                          <div className="text-base">{item.icon}</div>
                          <div className="font-['Fredoka_One'] text-[#22223B] text-[11px]">
                            {item.percentage}
                          </div>
                        </div>
                      </div>

                      {/* Desktop label */}
                      <div
                        key={`label-desktop-${index}`}
                        className={`absolute transform -translate-x-1/2 -translate-y-1/2 transition-all duration-300 cursor-pointer hidden lg:block ${
                          hoveredSegment === index || selectedSegment === index
                            ? "scale-110 z-20"
                            : "z-10"
                        }`}
                        style={{
                          left: `${xDesktop}px`,
                          top: `${yDesktop}px`,
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
                            hoveredSegment === index ||
                            selectedSegment === index
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
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Instruction Text */}
            <p className="text-center mt-4 lg:mt-6 font-['Nunito_Sans'] text-[#22223B] text-xs sm:text-sm font-semibold">
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
          <div className="bg-gradient-to-r from-[#6BCB77] via-[#FFD93D] to-[#FF6B6B] border-[4px] border-[#22223B] rounded-[24px] lg:rounded-[32px] p-4 sm:p-6 lg:p-8 shadow-[6px_6px_0px_0px_#22223B]">
            <div className="text-center mb-4 lg:mb-6">
              <h3 className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-['Fredoka_One'] text-[#22223B] bg-white px-4 sm:px-6 py-2 lg:py-3 rounded-[20px] lg:rounded-[24px] border-[3px] border-[#22223B] shadow-[4px_4px_0px_0px_#22223B] inline-block">
                📋 CONTRACT DETAILS 📋
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-4 lg:gap-6">
              {/* Network Info */}
              <div className="bg-white p-4 lg:p-6 rounded-[20px] lg:rounded-[24px] border-[3px] border-[#22223B] shadow-[4px_4px_0px_0px_#22223B] text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 lg:mb-3">
                  🌐
                </div>
                <h4 className="font-['Fredoka_One'] text-[#22223B] text-base lg:text-lg mb-1 lg:mb-2">
                  NETWORK
                </h4>
                <p className="font-['Nunito_Sans'] text-[#22223B] font-bold text-sm lg:text-base">
                  Binance Smart Chain (BSC)
                </p>
              </div>

              {/* Contract Address */}
              <div className="bg-white p-4 lg:p-6 rounded-[20px] lg:rounded-[24px] border-[3px] border-[#22223B] shadow-[4px_4px_0px_0px_#22223B] text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 lg:mb-3">
                  📝
                </div>
                <h4 className="font-['Fredoka_One'] text-[#22223B] text-base lg:text-lg mb-2 lg:mb-3">
                  TEST CONTRACT
                </h4>
                <div className="bg-[#F8F9FA] p-2 lg:p-3 rounded-[12px] lg:rounded-[16px] border-[2px] border-[#22223B] mb-2 lg:mb-3">
                  <code className="font-mono text-[10px] sm:text-xs text-[#22223B] font-semibold break-all">
                    0xB846d28185F1D36D9aAB4f1E33BC0FD060bc1Daf
                  </code>
                </div>
                <button
                  onClick={copyContract}
                  className={`px-3 lg:px-4 py-2 rounded-[12px] lg:rounded-[16px] border-[2px] border-[#22223B] hover:scale-105 transition-all duration-200 shadow-[2px_2px_0px_0px_#22223B] font-['Fredoka_One'] text-xs lg:text-sm ${
                    isCopied
                      ? "bg-[#6BCB77] text-white"
                      : "bg-[#FF6B6B] text-white"
                  }`}
                >
                  {isCopied ? "✅ COPIED!" : "📋 COPY ADDRESS"}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

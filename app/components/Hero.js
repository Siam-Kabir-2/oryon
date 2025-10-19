"use client";
import { useState } from "react";

function OryonPresale() {
  const [selectedToken, setSelectedToken] = useState("BNB");
  const [bnbAmount, setBnbAmount] = useState("");
  const [oryAmount, setOryAmount] = useState(0);
  const TOKEN_PRICE = 0.028; // 1 ORY = $0.028

  const handleBnbChange = (e) => {
    const value = e.target.value;
    setBnbAmount(value);
    setOryAmount(value ? (value / TOKEN_PRICE).toFixed(2) : 0);
  };

  const connectWallet = () => {
    alert("Connect wallet functionality coming soon!");
  };

  const buyWithBnb = () => {
    alert(`Buying ${oryAmount} $ORY with ${bnbAmount} ${selectedToken}`);
  };

  return (
    <div className="relative w-full max-w-sm mx-auto">
      {/* Clean presale card */}
      <div className="relative bg-white border-[2px] border-[#22223B] shadow-[4px_4px_12px_rgba(34,34,59,0.2)] p-4 sm:p-6 text-center font-semibold transition-all duration-300 hover:shadow-[6px_6px_16px_rgba(34,34,59,0.3)]">
        {/* Live badge */}
        <div className="absolute -top-2 sm:-top-3 -right-2 sm:-right-3 bg-[#FF6B6B] text-white text-xs font-black px-2 sm:px-3 py-1 border-[2px] border-[#22223B] transform rotate-12 shadow-[2px_2px_0px_0px_#22223B] font-['Fredoka_One']">
          LIVE NOW!
        </div>

        {/* Decorative corners */}
        <div className="absolute -top-1 -left-1 w-3 sm:w-4 h-3 sm:h-4 bg-[#FFD93D] border-[2px] border-[#22223B]"></div>
        <div className="absolute -bottom-1 -right-1 w-2 sm:w-3 h-2 sm:h-3 bg-[#6BCB77] border-[2px] border-[#22223B]"></div>

        {/* Header */}
        <div className="relative mb-3 sm:mb-4">
          <div className="bg-[#F8F9FA] border-[2px] border-[#22223B] p-2 sm:p-3 shadow-[2px_2px_4px_rgba(34,34,59,0.1)]">
            <h2 className="text-xs sm:text-sm font-black text-[#22223B] leading-tight font-['Fredoka_One']">
              Dive into the Oryon Galaxy and claim your{" "}
              <span className="bg-[#FFD93D] text-[#22223B] px-1 sm:px-2 py-0.5 border-[2px] border-[#22223B]">
                $ORY
              </span>{" "}
              Today!
            </h2>
          </div>
        </div>

        {/* Price display */}
        <div className="relative mb-3 sm:mb-4">
          <div className="bg-[#6BCB77] border-[2px] border-[#22223B] p-2 sm:p-3 shadow-[3px_3px_0px_0px_#22223B]">
            <p className="font-black text-[#22223B] text-sm sm:text-base font-['Fredoka_One']">
              1 $ORY = $0.028
            </p>
          </div>
        </div>

        {/* Token selection */}
        <div className="flex justify-center gap-1 sm:gap-2 mb-3 sm:mb-4">
          <button
            className={`px-3 sm:px-4 py-2 font-black text-xs sm:text-sm border-[2px] border-[#22223B] shadow-[2px_2px_0px_0px_#22223B] transition-all duration-200 hover:scale-105 font-['Fredoka_One'] ${
              selectedToken === "BNB"
                ? "bg-[#FFD93D] text-[#22223B]"
                : "bg-[#F8F9FA] text-[#22223B] hover:bg-[#FFD93D]"
            }`}
            onClick={() => setSelectedToken("BNB")}
          >
            BNB
          </button>
          <button
            className={`px-3 sm:px-4 py-2 font-black text-xs sm:text-sm border-[2px] border-[#22223B] shadow-[2px_2px_0px_0px_#22223B] transition-all duration-200 hover:scale-105 font-['Fredoka_One'] ${
              selectedToken === "USDT"
                ? "bg-[#6BCB77] text-white"
                : "bg-[#F8F9FA] text-[#22223B] hover:bg-[#6BCB77] hover:text-white"
            }`}
            onClick={() => setSelectedToken("USDT")}
          >
            USDT
          </button>
        </div>

        {/* Input fields */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4 text-left">
          <div className="relative">
            <div className="bg-[#F8F9FA] border-[2px] border-[#22223B] p-2 sm:p-3 shadow-[2px_2px_4px_rgba(34,34,59,0.1)]">
              <label className="block mb-1 sm:mb-2 font-black text-[#22223B] text-xs font-['Fredoka_One']">
                {selectedToken} PAY
              </label>
              <input
                type="number"
                min="0"
                value={bnbAmount}
                onChange={handleBnbChange}
                className="w-full border-[2px] border-[#22223B] p-1.5 sm:p-2 font-semibold text-xs sm:text-sm bg-white focus:bg-white focus:border-[#FF6B6B] text-[#22223B] font-['Nunito_Sans'] outline-none transition-all"
                placeholder="0.0"
              />
            </div>
          </div>

          <div className="relative">
            <div className="bg-[#F8F9FA] border-[2px] border-[#22223B] p-2 sm:p-3 shadow-[2px_2px_4px_rgba(34,34,59,0.1)]">
              <label className="block mb-1 sm:mb-2 font-black text-[#22223B] text-xs font-['Fredoka_One']">
                $ORY GET
              </label>
              <input
                type="text"
                value={oryAmount}
                disabled
                className="w-full border-[2px] border-[#22223B] p-1.5 sm:p-2 font-semibold text-xs sm:text-sm bg-[#6BCB77]/20 text-[#22223B] font-['Nunito_Sans']"
                placeholder="0.0"
              />
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4">
          <button onClick={connectWallet} className="relative group">
            <div className="bg-[#22223B] text-white py-2 sm:py-3 px-2 sm:px-4 font-black text-xs sm:text-sm border-[2px] border-[#22223B] hover:scale-105 transition-all duration-200 shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']">
              CONNECT
            </div>
          </button>

          <button onClick={buyWithBnb} className="relative group">
            <div className="bg-[#FF6B6B] text-white py-2 sm:py-3 px-2 sm:px-4 font-black text-xs sm:text-sm border-[2px] border-[#22223B] hover:scale-105 transition-all duration-200 shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']">
              BUY NOW!
            </div>
          </button>
        </div>

        {/* Footer */}
        <div className="relative">
          <div className="bg-[#F8F9FA] border-[2px] border-[#22223B] p-1.5 sm:p-2 shadow-[2px_2px_4px_rgba(34,34,59,0.1)]">
            <p className="text-xs text-[#22223B] font-semibold font-['Nunito_Sans']">
              🚀 Powered by Oryon
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section
      className="min-h-screen flex items-center pt-24 pb-16 px-6 relative overflow-hidden"
      style={{
        backgroundImage: "url(/hero.svg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Desktop Layout: Right-aligned presale card */}
        <div className="hidden lg:flex justify-end items-center min-h-[70vh]">
          <div className="flex justify-end">
            <OryonPresale />
          </div>
        </div>

        {/* Mobile & Tablet Layout: Centered presale card only */}
        <div className="lg:hidden flex items-center justify-center min-h-[70vh]">
          <div className="w-full max-w-sm mx-auto">
            <OryonPresale />
          </div>
        </div>
      </div>
    </section>
  );
}

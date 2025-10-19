"use client";
import { useState } from "react";

export default function Footer() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalType) => {
    setActiveModal(modalType);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setActiveModal(null);
    document.body.style.overflow = "unset"; // Re-enable scrolling
  };

  // Modal content data
  const modalContent = {
    privacy: {
      title: "🔒 Privacy Policy",
      color: "bg-[#FF6B6B]",
      content: `
        <h3>Information We Collect</h3>
        <p>• Wallet addresses for transaction purposes</p>
        <p>• Usage analytics to improve our services</p>
        <p>• Email addresses for newsletter subscriptions</p>

        <h3>How We Use Your Information</h3>
        <p>• To process token transactions</p>
        <p>• To send important project updates</p>
        <p>• To improve our platform and services</p>

        <h3>Data Security</h3>
        <p>• All data is encrypted and stored securely</p>
        <p>• We never share personal data with third parties</p>
        <p>• Blockchain transactions are public by nature</p>

        <h3>Your Rights</h3>
        <p>• You can request data deletion at any time</p>
        <p>• You control your wallet and private keys</p>
        <p>• Unsubscribe from communications anytime</p>
      `,
    },
    terms: {
      title: "📜 Terms of Service",
      color: "bg-[#6BCB77]",
      content: `
        <h3>Agreement to Terms</h3>
        <p>• By using Oryon services, you agree to these terms</p>
        <p>• Terms may be updated periodically</p>
        <p>• Continued use constitutes acceptance</p>

        <h3>Token Usage</h3>
        <p>• ORY tokens are utility tokens within our ecosystem</p>
        <p>• No guarantee of future value or returns</p>
        <p>• Use at your own risk and discretion</p>

        <h3>Prohibited Activities</h3>
        <p>• No illegal or fraudulent activities</p>
        <p>• No manipulation of token prices</p>
        <p>• No violation of applicable laws</p>

        <h3>Platform Availability</h3>
        <p>• Services provided "as is" without warranties</p>
        <p>• We may modify or discontinue services</p>
        <p>• No liability for service interruptions</p>
      `,
    },
    disclaimer: {
      title: "⚠️ Disclaimer",
      color: "bg-[#FFD93D]",
      textColor: "text-[#22223B]",
      content: `
        <h3>Investment Risk Warning</h3>
        <p>• Cryptocurrency investments carry high risk</p>
        <p>• Token values can fluctuate dramatically</p>
        <p>• Never invest more than you can afford to lose</p>

        <h3>No Financial Advice</h3>
        <p>• Information provided is for educational purposes</p>
        <p>• Not intended as investment or financial advice</p>
        <p>• Consult qualified professionals before investing</p>

        <h3>Regulatory Compliance</h3>
        <p>• Ensure compliance with local laws and regulations</p>
        <p>• Some services may not be available in all jurisdictions</p>
        <p>• Users responsible for their own compliance</p>

        <h3>No Guarantees</h3>
        <p>• No guarantee of token performance or returns</p>
        <p>• Technology risks and smart contract risks exist</p>
        <p>• Past performance does not predict future results</p>
      `,
    },
  };
  return (
    <footer className="bg-[#22223B] text-white py-6 lg:py-8 relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6 mb-6 lg:mb-8">
          {/* Logo & Description */}
          <div className="h-full sm:col-span-2 lg:col-span-1">
            <div className="bg-white border-[2px] border-[#22223B] rounded-[20px] lg:rounded-[24px] p-4 lg:p-6 shadow-[4px_4px_0px_0px_#22223B] h-full flex flex-col">
              <div className="flex items-center gap-2 lg:gap-3 mb-3 lg:mb-4">
                <div className="w-10 lg:w-12 h-10 lg:h-12 bg-[#6BCB77] border-[2px] border-[#22223B] rounded-[20px] lg:rounded-[24px] flex items-center justify-center text-xl lg:text-2xl shadow-[2px_2px_0px_0px_#22223B]">
                  🟩
                </div>
                <span className="text-xl lg:text-2xl font-['Fredoka_One'] text-[#22223B]">
                  ORYON
                </span>
              </div>
              <p className="text-[#22223B] font-['Nunito_Sans'] text-xs lg:text-sm leading-relaxed flex-grow">
                Pioneering blockchain, IoT, and renewable energy for a
                sustainable future! 🌱
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="h-full">
            <div className="bg-[#FFD93D] border-[2px] border-[#22223B] rounded-[20px] lg:rounded-[24px] p-4 lg:p-6 shadow-[4px_4px_0px_0px_#22223B] h-full flex flex-col">
              <h3 className="text-base lg:text-lg font-['Fredoka_One'] mb-3 lg:mb-4 bg-[#FF6B6B] px-2 lg:px-3 py-1.5 lg:py-2 rounded-[20px] lg:rounded-[24px] border-[2px] border-[#22223B] shadow-[2px_2px_0px_0px_#22223B] inline-block text-white">
                QUICK LINKS
              </h3>
              <div className="grid grid-cols-1 gap-1.5 lg:gap-2 flex-grow">
                {["About", "Tokenomics", "Roadmap", "Utility", "Community"].map(
                  (link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className="bg-white border-[2px] border-[#22223B] rounded-[10px] lg:rounded-[12px] px-2 lg:px-3 py-1.5 lg:py-2 text-[#22223B] font-['Fredoka_One'] text-xs lg:text-sm hover:bg-[#6BCB77] hover:text-white hover:scale-105 transition-all duration-300 text-center"
                    >
                      {link}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="h-full">
            <div className="bg-[#6BCB77] border-[2px] border-[#22223B] rounded-[20px] lg:rounded-[24px] p-4 lg:p-6 shadow-[4px_4px_0px_0px_#22223B] h-full flex flex-col">
              <h3 className="text-base lg:text-lg font-['Fredoka_One'] mb-3 lg:mb-4 text-[#22223B] bg-[#FFD93D] px-2 lg:px-3 py-1.5 lg:py-2 rounded-[20px] lg:rounded-[24px] border-[2px] border-[#22223B] shadow-[2px_2px_0px_0px_#22223B] inline-block">
                CONNECT
              </h3>
              <div className="space-y-2 lg:space-y-3 flex-grow">
                <div className="bg-white border-[2px] border-[#22223B] rounded-[16px] lg:rounded-[24px] p-2 lg:p-3 flex items-center gap-2 lg:gap-3 shadow-[2px_2px_0px_0px_#22223B] hover:scale-105 transition-all duration-300">
                  <span className="text-base lg:text-xl">📧</span>
                  <span className="font-['Nunito_Sans'] text-[#22223B] text-xs lg:text-sm font-semibold">
                    info@oryon.io
                  </span>
                </div>
                <div className="bg-white border-[2px] border-[#22223B] rounded-[16px] lg:rounded-[24px] p-2 lg:p-3 flex items-center gap-2 lg:gap-3 shadow-[2px_2px_0px_0px_#22223B] hover:scale-105 transition-all duration-300">
                  <span className="text-base lg:text-xl">📱</span>
                  <span className="font-['Nunito_Sans'] text-[#22223B] text-xs lg:text-sm font-semibold">
                    @OryonOfficial
                  </span>
                </div>
                <div className="bg-white border-[2px] border-[#22223B] rounded-[16px] lg:rounded-[24px] p-2 lg:p-3 flex items-center gap-2 lg:gap-3 shadow-[2px_2px_0px_0px_#22223B] hover:scale-105 transition-all duration-300">
                  <span className="text-base lg:text-xl">🐦</span>
                  <span className="font-['Nunito_Sans'] text-[#22223B] text-xs lg:text-sm font-semibold">
                    @OryonToken
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t-[2px] border-white/20 pt-4 lg:pt-6">
          <div className="bg-white border-[2px] border-[#22223B] rounded-[20px] lg:rounded-[24px] p-3 lg:p-4 shadow-[4px_4px_0px_0px_#22223B]">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-3 lg:gap-4">
              <div className="bg-[#FFD93D] border-[2px] border-[#22223B] rounded-[16px] lg:rounded-[24px] px-3 lg:px-4 py-2 shadow-[2px_2px_0px_0px_#22223B]">
                <p className="text-[#22223B] font-['Fredoka_One'] text-xs lg:text-sm">
                  © {new Date().getFullYear()} ORYON. All Rights Reserved! 🔥
                </p>
              </div>

              <div className="flex gap-1.5 lg:gap-2 flex-wrap justify-center">
                <button
                  onClick={() => openModal("privacy")}
                  className="bg-[#FF6B6B] border-[2px] border-[#22223B] rounded-[16px] lg:rounded-[24px] px-2 lg:px-3 py-1.5 lg:py-2 text-white font-['Fredoka_One'] text-[10px] lg:text-xs hover:scale-105 hover:shadow-[2px_2px_0px_0px_#22223B] transition-all duration-300 cursor-pointer"
                >
                  Privacy Policy
                </button>
                <button
                  onClick={() => openModal("terms")}
                  className="bg-[#6BCB77] border-[2px] border-[#22223B] rounded-[16px] lg:rounded-[24px] px-2 lg:px-3 py-1.5 lg:py-2 text-white font-['Fredoka_One'] text-[10px] lg:text-xs hover:scale-105 hover:shadow-[2px_2px_0px_0px_#22223B] transition-all duration-300 cursor-pointer"
                >
                  Terms
                </button>
                <button
                  onClick={() => openModal("disclaimer")}
                  className="bg-[#FFD93D] border-[2px] border-[#22223B] rounded-[16px] lg:rounded-[24px] px-2 lg:px-3 py-1.5 lg:py-2 text-[#22223B] font-['Fredoka_One'] text-[10px] lg:text-xs hover:scale-105 hover:shadow-[2px_2px_0px_0px_#22223B] transition-all duration-300 cursor-pointer"
                >
                  Disclaimer
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal Popup */}
      {activeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeModal}
          ></div>

          {/* Modal Content */}
          <div className="relative bg-white border-[3px] lg:border-[4px] border-[#22223B] rounded-[20px] lg:rounded-[24px] shadow-[6px_6px_0px_0px_#22223B] lg:shadow-[8px_8px_0px_0px_#22223B] max-w-2xl w-full max-h-[85vh] sm:max-h-[80vh] overflow-hidden">
            {/* Modal Header */}
            <div
              className={`${modalContent[activeModal].color} ${
                modalContent[activeModal].textColor || "text-white"
              } p-4 lg:p-6 border-b-[2px] lg:border-b-[3px] border-[#22223B]`}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-lg sm:text-xl lg:text-2xl font-['Fredoka_One']">
                  {modalContent[activeModal].title}
                </h2>
                <button
                  onClick={closeModal}
                  className="bg-white text-[#22223B] border-[2px] border-[#22223B] rounded-full w-8 lg:w-10 h-8 lg:h-10 flex items-center justify-center font-['Fredoka_One'] text-lg lg:text-xl hover:scale-110 transition-all duration-200 shadow-[2px_2px_0px_0px_#22223B]"
                >
                  ×
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-4 lg:p-6 overflow-y-auto max-h-[50vh] sm:max-h-[60vh]">
              <div
                className="text-[#22223B] font-['Nunito_Sans'] space-y-3 lg:space-y-4"
                dangerouslySetInnerHTML={{
                  __html: modalContent[activeModal].content
                    .split("\n")
                    .map((line) => {
                      const trimmed = line.trim();
                      if (trimmed.startsWith("<h3>"))
                        return `<h3 class="text-base lg:text-lg font-['Fredoka_One'] text-[#22223B] mb-2 mt-3 lg:mt-4 first:mt-0">${trimmed.slice(
                          4,
                          -5
                        )}</h3>`;
                      if (trimmed.startsWith("<p>"))
                        return `<p class="text-xs lg:text-sm leading-relaxed mb-1">${trimmed.slice(
                          3,
                          -4
                        )}</p>`;
                      return trimmed;
                    })
                    .join(""),
                }}
              />
            </div>

            {/* Modal Footer */}
            <div className="p-4 lg:p-6 border-t-[2px] lg:border-t-[3px] border-[#22223B] bg-[#F8F9FA]">
              <div className="flex flex-col sm:flex-row justify-center gap-2 sm:gap-4">
                <button
                  onClick={closeModal}
                  className="bg-[#22223B] text-white px-4 lg:px-6 py-2 lg:py-3 border-[2px] border-[#22223B] rounded-[16px] lg:rounded-[20px] font-['Fredoka_One'] text-sm lg:text-base hover:scale-105 transition-all duration-200 shadow-[3px_3px_0px_0px_#22223B]"
                >
                  ✅ I UNDERSTAND
                </button>
                <button
                  onClick={() => window.print()}
                  className="bg-[#FFD93D] text-[#22223B] px-4 lg:px-6 py-2 lg:py-3 border-[2px] border-[#22223B] rounded-[16px] lg:rounded-[20px] font-['Fredoka_One'] text-sm lg:text-base hover:scale-105 transition-all duration-200 shadow-[3px_3px_0px_0px_#22223B]"
                >
                  🖨️ PRINT
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
}

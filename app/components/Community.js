"use client";

export default function Community() {
  const socialLinks = [
    {
      name: "Website",
      icon: "fas fa-globe",
      href: "#",
      bgColor: "bg-[#6BCB77]",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      href: "#",
      bgColor: "bg-[#FF6B6B]",
    },
    {
      name: "Telegram",
      icon: "fab fa-telegram",
      href: "#",
      bgColor: "bg-[#FFD93D]",
    },
    {
      name: "Whitepaper",
      icon: "fas fa-file-alt",
      href: "#",
      bgColor: "bg-[#6BCB77]",
    },
  ];

  return (
    <section
      id="community"
      className="py-12 sm:py-16 lg:py-24 bg-[#F8F9FA] relative overflow-hidden border-t-[2px] border-[#22223B]"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 lg:mb-16">
          {/* Comic title background */}
          <div className="relative inline-block mb-6 lg:mb-8">
            <div className="absolute inset-0 bg-[#FF6B6B] border-[2px] border-[#22223B] rounded-[20px] lg:rounded-[24px] shadow-[4px_4px_0px_0px_#22223B] lg:shadow-[6px_6px_0px_0px_#22223B] transform -rotate-2"></div>
            <h2 className="relative text-lg sm:text-2xl lg:text-4xl xl:text-6xl font-black font-['Fredoka_One'] px-4 sm:px-6 lg:px-8 py-3 sm:py-4 lg:py-6 text-[#22223B]">
              📞 JOIN THE ORYON REVOLUTION!
            </h2>
          </div>
        </div>

        {/* Social Links - Icon Only Design */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12 2xl:gap-16">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group"
            >
              {/* Main Icon */}
              <div
                className={`w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 xl:w-28 xl:h-28 2xl:w-32 2xl:h-32 ${link.bgColor} border-[3px] lg:border-[4px] border-[#22223B] rounded-full flex items-center justify-center text-white shadow-[4px_4px_0px_0px_#22223B] lg:shadow-[6px_6px_0px_0px_#22223B] transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-[6px_6px_0px_0px_#22223B] lg:hover:shadow-[8px_8px_0px_0px_#22223B] cursor-pointer`}
              >
                <i
                  className={`${link.icon} text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl`}
                ></i>
              </div>

              {/* Floating Name Label - Appears on Hover */}
              <div className="absolute -bottom-12 sm:-bottom-14 lg:-bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-[#FFD93D] border-[2px] lg:border-[3px] border-[#22223B] rounded-[16px] lg:rounded-[20px] px-2 sm:px-3 lg:px-4 py-1.5 lg:py-2 shadow-[3px_3px_0px_0px_#22223B] lg:shadow-[4px_4px_0px_0px_#22223B] whitespace-nowrap">
                  <span className="text-[#22223B] font-['Fredoka_One'] font-black text-xs sm:text-sm">
                    {link.name.toUpperCase()}
                  </span>
                  {/* Tooltip Arrow */}
                  <div className="absolute -top-1.5 lg:-top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] lg:border-l-[8px] border-l-transparent border-r-[6px] lg:border-r-[8px] border-r-transparent border-b-[6px] lg:border-b-[8px] border-b-[#22223B]"></div>
                  <div className="absolute -top-0.5 lg:-top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[4px] lg:border-l-[6px] border-l-transparent border-r-[4px] lg:border-r-[6px] border-r-transparent border-b-[4px] lg:border-b-[6px] border-b-[#FFD93D]"></div>
                </div>
              </div>

              {/* Floating Sparkle Effect */}
              <div className="absolute -top-1.5 sm:-top-2 -right-1.5 sm:-right-2 w-6 sm:w-7 lg:w-8 h-6 sm:h-7 lg:h-8 bg-[#FF6B6B] border-[2px] border-[#22223B] rounded-full flex items-center justify-center text-white text-xs sm:text-sm rotate-12 group-hover:rotate-45 group-hover:scale-125 transition-all duration-300 shadow-[2px_2px_0px_0px_#22223B]">
                ⭐
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

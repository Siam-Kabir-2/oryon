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
      className="py-24 bg-[#F8F9FA] relative overflow-hidden border-t-[2px] border-[#22223B]"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          {/* Comic title background */}
          <div className="relative inline-block mb-8">
            <div className="absolute inset-0 bg-[#FF6B6B] border-[2px] border-[#22223B] rounded-[24px] shadow-[6px_6px_0px_0px_#22223B] transform -rotate-2"></div>
            <h2 className="relative text-4xl lg:text-6xl font-black font-['Fredoka_One'] px-8 py-6 text-[#22223B]">
              📞 JOIN THE ORYON REVOLUTION!
            </h2>
          </div>
        </div>

        {/* Social Links - Icon Only Design */}
        <div className="flex justify-center items-center gap-8 md:gap-12 lg:gap-16">
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
                className={`w-24 h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 ${link.bgColor} border-[4px] border-[#22223B] rounded-full flex items-center justify-center text-white shadow-[6px_6px_0px_0px_#22223B] transition-all duration-300 hover:scale-110 hover:rotate-12 hover:shadow-[8px_8px_0px_0px_#22223B] cursor-pointer`}
              >
                <i
                  className={`${link.icon} text-4xl md:text-5xl lg:text-6xl`}
                ></i>
              </div>

              {/* Floating Name Label - Appears on Hover */}
              <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-[#FFD93D] border-[3px] border-[#22223B] rounded-[20px] px-4 py-2 shadow-[4px_4px_0px_0px_#22223B] whitespace-nowrap">
                  <span className="text-[#22223B] font-['Fredoka_One'] font-black text-sm">
                    {link.name.toUpperCase()}
                  </span>
                  {/* Tooltip Arrow */}
                  <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[8px] border-b-[#22223B]"></div>
                  <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-[#FFD93D]"></div>
                </div>
              </div>

              {/* Floating Sparkle Effect */}
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-[#FF6B6B] border-[2px] border-[#22223B] rounded-full flex items-center justify-center text-white text-sm rotate-12 group-hover:rotate-45 group-hover:scale-125 transition-all duration-300 shadow-[2px_2px_0px_0px_#22223B]">
                ⭐
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

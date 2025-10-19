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
      {/* Comic background elements */}
      <div className="absolute inset-0">
        {/* Floating comic elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#FFD93D] border-[2px] border-[#22223B] rounded-full animate-bounce shadow-lg"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-[#6BCB77] border-[2px] border-[#22223B] rounded-[24px] transform rotate-45 animate-pulse shadow-lg"></div>
        <div className="absolute bottom-20 left-32 w-24 h-24 bg-[#FF6B6B] border-[2px] border-[#22223B] rounded-[24px] animate-spin shadow-lg"></div>
        <div className="absolute bottom-40 right-16 w-18 h-18 bg-[#6BCB77] border-[2px] border-[#22223B] rounded-full animate-bounce delay-300 shadow-lg"></div>

        {/* Comic speech bubbles */}
        <div className="absolute top-20 right-40 bg-white border-[2px] border-[#22223B] rounded-[24px] p-4 shadow-[4px_4px_8px_rgba(34,34,59,0.15)]">
          <p className="font-black text-sm text-[#22223B] font-['Fredoka_One']">
            JOIN US!
          </p>
          <div className="absolute -bottom-2 left-6 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-t-[12px] border-t-[#22223B]"></div>
          <div className="absolute -bottom-1 left-7 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-white"></div>
        </div>
      </div>

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

          {/* Speech bubble description */}
          <div className="relative inline-block max-w-4xl mx-auto">
            <div className="bg-white border-[2px] border-[#22223B] rounded-[24px] p-8 shadow-[4px_4px_12px_rgba(34,34,59,0.15)]">
              <p className="text-xl lg:text-2xl text-[#22223B] font-semibold leading-relaxed font-['Nunito_Sans']">
                🚀 Be part of a new era where technology meets sustainability!
                Join our growing global community and shape the future of
                energy! 🌟
              </p>
              {/* Speech bubble tail */}
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-[#22223B]"></div>
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[16px] border-t-white"></div>
            </div>
          </div>
        </div>

        {/* Comic Social Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="relative flex flex-col items-center gap-4 p-8 bg-white border-[2px] border-[#22223B] rounded-[24px] shadow-[4px_4px_12px_rgba(34,34,59,0.15)] transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:shadow-[6px_6px_16px_rgba(34,34,59,0.25)] group"
            >
              {/* Comic icon container */}
              <div
                className={`w-20 h-20 ${link.bgColor} border-[2px] border-[#22223B] rounded-full flex items-center justify-center text-white shadow-[3px_3px_0px_0px_#22223B] group-hover:scale-110 transition-all duration-300`}
              >
                <i className={`${link.icon} text-3xl`}></i>
              </div>

              {/* Comic name tag */}
              <div className="bg-[#FFD93D] border-[2px] border-[#22223B] rounded-[24px] px-4 py-2 shadow-[3px_3px_0px_0px_#22223B] font-['Fredoka_One']">
                <span className="text-[#22223B] font-black text-lg">
                  {link.name.toUpperCase()}
                </span>
              </div>

              {/* Comic burst decoration */}
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#FF6B6B] border-[2px] border-[#22223B] rounded-full flex items-center justify-center font-black text-white rotate-12 group-hover:rotate-45 transition-all duration-300 shadow-[2px_2px_0px_0px_#22223B]">
                ⭐
              </div>

              {/* Subtle hover effect */}
              <div className="absolute inset-0 bg-[#FFD93D]/10 rounded-[24px] opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

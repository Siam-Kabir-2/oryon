"use client";

export default function Community() {
  const socialLinks = [
    {
      name: "Website",
      icon: "fas fa-globe",
      href: "#",
      gradient: "from-[#00d4aa] to-[#4ecdc4]",
    },
    {
      name: "Twitter",
      icon: "fab fa-twitter",
      href: "#",
      gradient: "from-[#1da1f2] to-[#0d8bd9]",
    },
    {
      name: "Telegram",
      icon: "fab fa-telegram",
      href: "#",
      gradient: "from-[#0088cc] to-[#0066aa]",
    },
    {
      name: "Whitepaper",
      icon: "fas fa-file-alt",
      href: "#",
      gradient: "from-[#6bcf7f] to-[#45b7d1]",
    },
  ];

  return (
    <section
      id="community"
      className="py-24 bg-gradient-to-br from-[#00d4aa] via-[#4ecdc4] to-[#45b7d1] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold font-['Righteous'] mb-6 text-white">
            📞 Join the Oryon Revolution
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed mb-16">
            Be part of a new era where technology meets sustainability. Join our
            growing global community and shape the future of energy.
          </p>
        </div>

        {/* Social Links */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 p-8 bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl transition-all duration-300 hover:scale-105 hover:-translate-y-2 hover:bg-white/20 hover:border-white/40 hover:shadow-2xl group"
            >
              <div
                className={`w-16 h-16 bg-gradient-to-br ${link.gradient} rounded-full flex items-center justify-center text-white shadow-xl group-hover:scale-110 transition-all duration-300`}
              >
                <i className={`${link.icon} text-2xl`}></i>
              </div>

              <span className="text-white font-bold text-lg">{link.name}</span>

              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-300"></div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

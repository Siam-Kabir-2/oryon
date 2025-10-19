"use client";

export default function WhyChoose() {
  const cards = [
    {
      icon: "🔋",
      title: "Green by Design",
      desc: "Promoting renewable energy adoption through decentralized technology.",
      gradient: "from-[#6bcf7f] to-[#00d4aa]",
    },
    {
      icon: "🌐",
      title: "IoT Integrated",
      desc: "Smart device connectivity for efficient energy management.",
      gradient: "from-[#45b7d1] to-[#4ecdc4]",
    },
    {
      icon: "🔒",
      title: "Secure & Transparent",
      desc: "Built on blockchain for traceability and trust.",
      gradient: "from-[#00d4aa] to-[#4ecdc4]",
    },
    {
      icon: "💰",
      title: "Community-Driven",
      desc: "Governance and decision-making powered by ORY holders.",
      gradient: "from-[#ff8c42] to-[#6bcf7f]",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#00d4aa] via-[#4ecdc4] to-[#45b7d1] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-radial from-white/10 via-transparent to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold font-['Righteous'] mb-6 text-white">
            🌍 Why Choose Oryon
          </h2>
          <p className="text-xl lg:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
            Leading the revolution in sustainable blockchain technology
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="bg-white/95 backdrop-blur-sm p-8 rounded-3xl shadow-xl border-2 border-white/30 text-center hover:scale-105 hover:-translate-y-2 transition-all duration-300 relative overflow-hidden"
            >
              {/* Gradient top border */}
              <div
                className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${card.gradient}`}
              ></div>

              <div
                className="text-5xl mb-6 animate-bounce"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {card.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 font-['Righteous']">
                {card.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">{card.desc}</p>

              {/* Hover effect overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 hover:opacity-10 transition-all duration-300 rounded-3xl`}
              ></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

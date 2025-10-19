"use client";

export default function WhyChoose() {
  const cards = [
    {
      icon: "🔋",
      title: "Green by Design",
      desc: "Promoting renewable energy adoption through decentralized technology.",
      bgColor: "bg-[#6BCB77]",
    },
    {
      icon: "🌐",
      title: "IoT Integrated",
      desc: "Smart device connectivity for efficient energy management.",
      bgColor: "bg-[#FFD93D]",
    },
    {
      icon: "🔒",
      title: "Secure & Transparent",
      desc: "Built on blockchain for traceability and trust.",
      bgColor: "bg-[#FF6B6B]",
    },
    {
      icon: "💰",
      title: "Community-Driven",
      desc: "Governance and decision-making powered by ORY holders.",
      bgColor: "bg-[#6BCB77]",
    },
  ];

  return (
    <section className="py-16 bg-[#F8F9FA] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="relative inline-block">
            <div className="relative bg-[#6BCB77] px-8 py-4 rounded-[24px] border-[2px] border-[#22223B] shadow-[4px_4px_12px_rgba(34,34,59,0.15)]">
              <h2 className="text-5xl md:text-6xl font-['Fredoka_One'] text-white">
                🌍 Why Choose Oryon?
              </h2>
            </div>
          </div>

          {/* Speech bubble */}
          <div className="relative inline-block mt-4 max-w-xl mx-auto">
            <div className="bg-white p-6 rounded-[24px] border-[2px] border-[#22223B] shadow-[4px_4px_12px_rgba(34,34,59,0.15)]">
              <p className="text-xl md:text-2xl font-['Nunito_Sans'] text-[#22223B] font-semibold">
                🚀 Leading the revolution in sustainable blockchain technology!
                💚
              </p>
              {/* Triangle pointer */}
              <div className="absolute -top-[10px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[12px] border-l-transparent border-r-[12px] border-r-transparent border-b-[12px] border-b-[#22223B]" />
              <div className="absolute -top-[8px] left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-b-[10px] border-b-white" />
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <div key={index} className="relative">
              <div className="relative bg-white border-[2px] border-[#22223B] p-8 rounded-[24px] shadow-[4px_4px_12px_rgba(34,34,59,0.15)] text-center hover:-translate-y-1 transition-all duration-300">
                {/* Icon */}
                <div className="text-5xl mb-4">{card.icon}</div>

                {/* Title */}
                <h3
                  className={`text-xl font-['Fredoka_One'] text-[#22223B] mb-4 ${card.bgColor} px-3 py-2 rounded-[24px] border-[2px] border-[#22223B]`}
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-[#22223B] font-['Nunito_Sans'] leading-relaxed">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

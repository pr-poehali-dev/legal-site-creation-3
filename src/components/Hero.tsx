const Hero = () => {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-navy-900 overflow-hidden"
    >
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=1600&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950/90 via-navy-900/80 to-navy-800/60" />

      <div className="container mx-auto px-6 relative z-10 pt-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-12 bg-gold-400" />
            <span className="text-gold-400 text-sm font-ibm tracking-widest uppercase">
              г. Пенза · Пензенская область · вся Россия
            </span>
          </div>

          <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl text-white font-light leading-tight mb-4">
            Нуреев Ринат
            <br />
            <span className="text-gold-400">Робертович</span>
          </h1>

          <p className="text-navy-200 text-lg md:text-xl font-ibm font-light mb-8 max-w-xl leading-relaxed">
            Профессиональная юридическая защита ваших интересов. Опыт, компетентность, результат.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={() => handleScroll("#contact")}
              className="bg-gold-500 hover:bg-gold-400 text-white font-semibold px-8 py-3 text-sm tracking-wide transition-colors duration-200"
            >
              Записаться на консультацию
            </button>
            <button
              onClick={() => handleScroll("#services")}
              className="border border-navy-300 hover:border-gold-400 text-navy-200 hover:text-gold-400 font-semibold px-8 py-3 text-sm tracking-wide transition-colors duration-200"
            >
              Мои услуги
            </button>
          </div>

          <div className="mt-16 grid grid-cols-3 gap-8 max-w-lg">
            {[
              { value: "5+", label: "Лет практики" },
              { value: "30+", label: "Дел выиграно" },
              { value: "вся РФ", label: "География работы" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-gold-400 font-cormorant text-3xl font-semibold">{stat.value}</p>
                <p className="text-navy-300 text-xs font-ibm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
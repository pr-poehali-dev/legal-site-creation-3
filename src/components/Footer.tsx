const Footer = () => {
  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-navy-950 border-t border-navy-800 py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 border-2 border-gold-400 flex items-center justify-center">
              <span className="text-gold-400 font-cormorant font-bold text-sm">НР</span>
            </div>
            <div>
              <p className="text-white font-cormorant font-semibold text-sm">Нуреев Ринат Робертович</p>
              <p className="text-navy-400 text-xs">Адвокат · г. Уфа</p>
            </div>
          </div>

          <nav className="flex flex-wrap justify-center gap-5">
            {[
              { label: "Главная", href: "#home" },
              { label: "Услуги", href: "#services" },
              { label: "Практика", href: "#practice" },
              { label: "Отзывы", href: "#reviews" },
              { label: "Контакты", href: "#contact" },
            ].map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className="text-navy-400 hover:text-gold-400 text-xs font-ibm transition-colors"
              >
                {link.label}
              </button>
            ))}
          </nav>

          <p className="text-navy-600 font-ibm text-xs text-center md:text-right">
            © {new Date().getFullYear()} Нуреев Р.Р. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const navLinks = [
  { label: "Главная", href: "#home" },
  { label: "Обо мне", href: "#about" },
  { label: "Услуги", href: "#services" },
  { label: "Практика", href: "#practice" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contact" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-navy-900 shadow-lg" : "bg-navy-900/95"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 border-2 border-gold-400 flex items-center justify-center">
            <span className="text-gold-400 font-cormorant font-bold text-sm">НР</span>
          </div>
          <div>
            <p className="text-white font-cormorant font-semibold text-sm leading-tight">Нуреев Ринат Робертович</p>
            <p className="text-gold-400 text-xs leading-tight">Адвокат</p>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-navy-200 hover:text-gold-400 text-sm transition-colors duration-200 font-ibm"
            >
              {link.label}
            </button>
          ))}
        </nav>

        <a
          href="tel:+79874032321"
          className="hidden md:flex items-center gap-2 bg-gold-500 hover:bg-gold-400 text-white text-sm font-semibold px-4 py-2 transition-colors duration-200"
        >
          <Icon name="Phone" size={15} />
          +7 (987) 403-23-21
        </a>

        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-navy-900 border-t border-navy-700 px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="text-navy-200 hover:text-gold-400 text-sm text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <a
            href="tel:+79874032321"
            className="flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-400 text-white text-sm font-semibold px-4 py-2 mt-2 transition-colors"
          >
            <Icon name="Phone" size={15} />
            Позвонить
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
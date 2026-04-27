import Icon from "@/components/ui/icon";

const services = [
  {
    icon: "Shield",
    title: "Уголовная защита",
    desc: "Защита прав и интересов обвиняемых, подозреваемых, потерпевших на всех стадиях уголовного судопроизводства.",
  },
  {
    icon: "Scale",
    title: "Гражданские споры",
    desc: "Представление интересов в судах по спорам о собственности, договорным конфликтам, наследственным делам.",
  },
  {
    icon: "Briefcase",
    title: "Арбитражные дела",
    desc: "Ведение дел в арбитражных судах: корпоративные конфликты, банкротство, экономические споры.",
  },
  {
    icon: "FileText",
    title: "Юридические документы",
    desc: "Составление и анализ договоров, исковых заявлений, жалоб и иных правовых документов.",
  },
  {
    icon: "Building",
    title: "Административные дела",
    desc: "Защита граждан и организаций при взаимодействии с государственными органами и должностными лицами.",
  },
  {
    icon: "Users",
    title: "Семейное право",
    desc: "Развод, раздел имущества, алименты, вопросы опеки и попечительства — решения в интересах клиента.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-400" />
            <span className="text-gold-400 text-sm font-ibm tracking-widest uppercase">Услуги</span>
            <div className="h-px w-12 bg-gold-400" />
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl text-white font-light">
            Области правовой защиты
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <div
              key={s.title}
              className="border border-navy-700 p-8 hover:border-gold-500 transition-colors duration-300 group"
            >
              <div className="w-12 h-12 border border-gold-500 flex items-center justify-center mb-5 group-hover:bg-gold-500 transition-colors duration-300">
                <Icon name={s.icon} size={20} className="text-gold-400 group-hover:text-white transition-colors duration-300" />
              </div>
              <h3 className="font-cormorant text-xl text-white font-semibold mb-3">{s.title}</h3>
              <p className="text-navy-300 font-ibm text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;

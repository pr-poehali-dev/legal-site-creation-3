import Icon from "@/components/ui/icon";

const contactInfo = [
  { icon: "Phone", label: "Телефон", value: "+7 (987) 403-23-21" },
  { icon: "Mail", label: "Email", value: "nureewrin@yandex.ru" },
  { icon: "MapPin", label: "Адрес", value: "г. Пенза, ул. Суворова, д. 172А, Дом адвокатов, 1 этаж, кабинет 4" },
  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00" },
];

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-400" />
            <span className="text-gold-400 text-sm font-ibm tracking-widest uppercase">Контакты</span>
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl text-white font-light">
            Связаться со мной
          </h2>
          <p className="text-navy-300 font-ibm text-base mt-3 max-w-xl leading-relaxed">
            Позвоните или напишите — я отвечу в течение часа и помогу разобраться в вашей ситуации.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactInfo.map((item) => (
            <div key={item.label} className="border border-navy-700 p-8 hover:border-gold-500 transition-colors duration-300">
              <div className="w-12 h-12 border border-gold-500 flex items-center justify-center mb-5">
                <Icon name={item.icon} size={20} className="text-gold-400" />
              </div>
              <p className="text-navy-400 font-ibm text-xs mb-2 uppercase tracking-wider">{item.label}</p>
              <p className="text-white font-ibm text-sm leading-relaxed">{item.value}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 overflow-hidden border border-navy-700" style={{ height: 360 }}>
          <iframe
            src="https://yandex.ru/map-widget/v1/?ll=45.020300%2C53.195100&z=16&pt=45.020300%2C53.195100,pm2rdm&text=%D0%9F%D0%B5%D0%BD%D0%B7%D0%B0%2C%20%D1%83%D0%BB.%20%D0%A1%D1%83%D0%B2%D0%BE%D1%80%D0%BE%D0%B2%D0%B0%2C%20172%D0%90"
            width="100%"
            height="360"
            frameBorder="0"
            allowFullScreen
            title="Карта офиса"
            style={{ border: 0, display: "block" }}
          />
        </div>

        <div className="mt-10 border border-navy-700 p-8 max-w-2xl">
          <p className="text-gold-400 font-cormorant text-xl font-semibold mb-3">Адвокатская тайна</p>
          <p className="text-navy-300 font-ibm text-sm leading-relaxed">
            Все сведения, сообщённые адвокату, охраняются адвокатской тайной и не могут быть разглашены третьим лицам без вашего согласия.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
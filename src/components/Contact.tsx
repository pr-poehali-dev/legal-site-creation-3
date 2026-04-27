import { useState } from "react";
import Icon from "@/components/ui/icon";

const timeSlots = [
  "09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00",
];

const contactInfo = [
  { icon: "Phone", label: "Телефон", value: "+7 (347) 000-00-00" },
  { icon: "Mail", label: "Email", value: "nureev@lawyer.ru" },
  { icon: "MapPin", label: "Адрес", value: "г. Уфа, ул. Ленина, 1, офис 305" },
  { icon: "Clock", label: "Режим работы", value: "Пн–Пт: 9:00–18:00" },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    category: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="contact" className="py-24 bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-400" />
            <span className="text-gold-400 text-sm font-ibm tracking-widest uppercase">Контакты</span>
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl text-white font-light">
            Запись на консультацию
          </h2>
          <p className="text-navy-300 font-ibm text-base mt-3 max-w-xl leading-relaxed">
            Первичная консультация поможет оценить ситуацию и выработать стратегию защиты. Оставьте заявку — я свяжусь с вами в течение часа.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map((item) => (
              <div key={item.label} className="flex items-start gap-4">
                <div className="w-10 h-10 border border-gold-500 flex items-center justify-center flex-shrink-0">
                  <Icon name={item.icon} size={16} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-navy-400 font-ibm text-xs mb-1">{item.label}</p>
                  <p className="text-white font-ibm text-sm">{item.value}</p>
                </div>
              </div>
            ))}

            <div className="mt-4 border border-navy-700 p-6">
              <p className="text-gold-400 font-cormorant text-lg font-semibold mb-2">
                Конфиденциальность
              </p>
              <p className="text-navy-300 font-ibm text-sm leading-relaxed">
                Все сведения, сообщённые адвокату, охраняются адвокатской тайной и не могут быть разглашены третьим лицам без вашего согласия.
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            {sent ? (
              <div className="border border-gold-500 p-10 text-center flex flex-col items-center gap-4">
                <div className="w-14 h-14 bg-gold-500/20 flex items-center justify-center">
                  <Icon name="CheckCircle" size={28} className="text-gold-400" />
                </div>
                <h3 className="font-cormorant text-2xl text-white font-semibold">Заявка принята</h3>
                <p className="text-navy-300 font-ibm text-sm max-w-sm leading-relaxed">
                  Ринат Робертович свяжется с вами в течение часа для подтверждения времени консультации.
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="mt-2 text-gold-400 font-ibm text-sm underline underline-offset-2"
                >
                  Отправить ещё одну заявку
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy-300 font-ibm text-xs mb-1">Ваше имя *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Иван Иванов"
                      className="w-full bg-navy-800 border border-navy-600 text-white font-ibm text-sm px-4 py-3 focus:outline-none focus:border-gold-400 placeholder:text-navy-500 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-navy-300 font-ibm text-xs mb-1">Телефон *</label>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+7 (___) ___-__-__"
                      className="w-full bg-navy-800 border border-navy-600 text-white font-ibm text-sm px-4 py-3 focus:outline-none focus:border-gold-400 placeholder:text-navy-500 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-navy-300 font-ibm text-xs mb-1">Email</label>
                  <input
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@mail.ru"
                    className="w-full bg-navy-800 border border-navy-600 text-white font-ibm text-sm px-4 py-3 focus:outline-none focus:border-gold-400 placeholder:text-navy-500 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-navy-300 font-ibm text-xs mb-1">Категория вопроса *</label>
                  <select
                    required
                    name="category"
                    value={form.category}
                    onChange={handleChange}
                    className="w-full bg-navy-800 border border-navy-600 text-white font-ibm text-sm px-4 py-3 focus:outline-none focus:border-gold-400 transition-colors"
                  >
                    <option value="">— Выберите категорию —</option>
                    <option>Уголовное право</option>
                    <option>Гражданские споры</option>
                    <option>Арбитражные дела</option>
                    <option>Семейное право</option>
                    <option>Административное право</option>
                    <option>Налоговые споры</option>
                    <option>Другое</option>
                  </select>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-navy-300 font-ibm text-xs mb-1">Удобная дата *</label>
                    <input
                      required
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleChange}
                      className="w-full bg-navy-800 border border-navy-600 text-white font-ibm text-sm px-4 py-3 focus:outline-none focus:border-gold-400 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-navy-300 font-ibm text-xs mb-1">Удобное время *</label>
                    <select
                      required
                      name="time"
                      value={form.time}
                      onChange={handleChange}
                      className="w-full bg-navy-800 border border-navy-600 text-white font-ibm text-sm px-4 py-3 focus:outline-none focus:border-gold-400 transition-colors"
                    >
                      <option value="">— Выберите —</option>
                      {timeSlots.map((t) => (
                        <option key={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-navy-300 font-ibm text-xs mb-1">Краткое описание ситуации</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Опишите вашу ситуацию в нескольких словах..."
                    className="w-full bg-navy-800 border border-navy-600 text-white font-ibm text-sm px-4 py-3 focus:outline-none focus:border-gold-400 placeholder:text-navy-500 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="bg-gold-500 hover:bg-gold-400 disabled:opacity-70 text-white font-ibm font-semibold text-sm px-8 py-3 transition-colors duration-200 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <Icon name="Loader2" size={16} className="animate-spin" />
                      Отправляю...
                    </>
                  ) : (
                    "Записаться на консультацию"
                  )}
                </button>

                <p className="text-navy-500 font-ibm text-xs">
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

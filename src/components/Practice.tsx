const cases = [
  {
    category: "Уголовное право",
    title: "Оправдательный приговор по ст. 159 УК РФ",
    desc: "Успешная защита клиента по делу о крупном мошенничестве. Доказана невиновность, вынесен оправдательный приговор.",
    result: "Оправдан",
    resultColor: "text-green-400",
  },
  {
    category: "Гражданское право",
    title: "Взыскание долга 12 млн руб.",
    desc: "Судебное взыскание задолженности по договору займа с процентами и штрафными санкциями в пользу клиента.",
    result: "Выиграно",
    resultColor: "text-gold-400",
  },
  {
    category: "Арбитраж",
    title: "Защита от необоснованного банкротства",
    desc: "Предотвращено инициированное конкурентами банкротство предприятия. Сохранён бизнес клиента.",
    result: "Защищено",
    resultColor: "text-gold-400",
  },
  {
    category: "Административное право",
    title: "Отмена незаконного решения ИФНС",
    desc: "Оспорено решение налогового органа о доначислении налогов на сумму 8,5 млн руб. Решение полностью отменено.",
    result: "Отменено",
    resultColor: "text-green-400",
  },
  {
    category: "Семейное право",
    title: "Раздел совместно нажитого имущества",
    desc: "Признано личным имуществом клиента бизнес-активы на сумму 25 млн руб. при бракоразводном процессе.",
    result: "Выиграно",
    resultColor: "text-gold-400",
  },
  {
    category: "Уголовное право",
    title: "Переквалификация обвинения",
    desc: "Тяжкое обвинение переквалифицировано на лёгкое, назначено условное наказание вместо реального срока.",
    result: "Условный срок",
    resultColor: "text-gold-400",
  },
];

const Practice = () => {
  return (
    <section id="practice" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-gold-500 text-sm font-ibm tracking-widest uppercase">Практика</span>
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl text-navy-900 font-light max-w-xl">
            Избранные дела из практики
          </h2>
          <p className="text-navy-600 font-ibm text-base mt-4 max-w-2xl leading-relaxed">
            Примеры успешно завершённых дел. Все данные обезличены в соответствии с требованиями адвокатской тайны.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="border border-gray-200 p-6 hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center justify-between mb-4">
                <span className="bg-navy-100 text-navy-700 text-xs font-ibm px-3 py-1">{c.category}</span>
                <span className={`text-xs font-semibold font-ibm ${c.resultColor}`}>{c.result}</span>
              </div>
              <h3 className="font-cormorant text-lg text-navy-900 font-semibold mb-3 leading-snug">{c.title}</h3>
              <p className="text-navy-600 font-ibm text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Practice;

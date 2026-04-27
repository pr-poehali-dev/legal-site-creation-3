const cases = [
  {
    category: "Уголовное право",
    title: "Оправдательный приговор по ст. 159 УК РФ",
    desc: "Успешная защита клиента по делу о крупном мошенничестве. Доказана невиновность, вынесен оправдательный приговор.",
    result: "Оправдан",
    resultColor: "text-green-600",
  },
  {
    category: "Военное право",
    title: "Защита военнослужащего по уголовному делу",
    desc: "Успешная защита военнослужащего в военном суде. Обвинение переквалифицировано, назначено минимальное наказание.",
    result: "Выиграно",
    resultColor: "text-navy-600",
  },
  {
    category: "Медицинское право",
    title: "Взыскание компенсации за врачебную ошибку",
    desc: "Доказана вина медицинского учреждения, в пользу клиента взыскана компенсация морального вреда и материального ущерба.",
    result: "Выиграно",
    resultColor: "text-navy-600",
  },
  {
    category: "Строительный спор",
    title: "Защита дольщика от недобросовестного застройщика",
    desc: "Взысканы неустойка, штраф и компенсация с застройщика, нарушившего сроки сдачи объекта.",
    result: "Выиграно",
    resultColor: "text-navy-600",
  },
  {
    category: "Экологический спор",
    title: "Оспаривание штрафа за нарушение экологических норм",
    desc: "Признано незаконным административное взыскание, наложенное на предприятие за предполагаемое нарушение экологического законодательства.",
    result: "Отменено",
    resultColor: "text-green-600",
  },
  {
    category: "Промышленная безопасность",
    title: "Защита предприятия при проверке Ростехнадзора",
    desc: "Оспорено предписание Ростехнадзора о приостановке деятельности предприятия. Производство сохранено, санкции сняты.",
    result: "Защищено",
    resultColor: "text-navy-600",
  },
];

const Practice = () => {
  return (
    <section id="practice" className="py-24 bg-navy-900">
      <div className="container mx-auto px-6">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-400" />
            <span className="text-gold-400 text-sm font-ibm tracking-widest uppercase">Практика</span>
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl text-white font-light max-w-xl">
            Избранные дела из практики
          </h2>
          <p className="text-navy-300 font-ibm text-base mt-4 max-w-2xl leading-relaxed">
            Примеры успешно завершённых дел. Все данные обезличены в соответствии с требованиями адвокатской тайны.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c) => (
            <div key={c.title} className="bg-white border border-white p-6 hover:border-gold-400 transition-colors duration-300">
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

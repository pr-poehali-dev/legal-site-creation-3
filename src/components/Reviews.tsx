import Icon from "@/components/ui/icon";

const reviews = [
  {
    name: "Андрей К.",
    category: "Уголовное дело",
    text: "Ринат Робертович взялся за, казалось бы, безнадёжное дело. Благодаря его профессионализму и неустанной работе мне удалось избежать реального наказания. Навсегда благодарен.",
    stars: 5,
  },
  {
    name: "Елена М.",
    category: "Семейный спор",
    text: "Сложный раздел имущества, бывший супруг имел связи. Адвокат умело выстроил стратегию защиты, суд вынес решение в мою пользу. Очень доволен работой.",
    stars: 5,
  },
  {
    name: "ООО «СтройГрупп»",
    category: "Арбитраж",
    text: "Доверили защиту компании в арбитражном споре с партнёром. Дело вёл чётко, без лишней суеты. Сохранили активы и деловую репутацию фирмы.",
    stars: 5,
  },
  {
    name: "Дмитрий Р.",
    category: "Гражданский спор",
    text: "Взыскали долг с недобросовестного контрагента, который уклонялся два года. С адвокатом это заняло три месяца. Профессионал своего дела.",
    stars: 5,
  },
  {
    name: "Марина Т.",
    category: "Административное дело",
    text: "Помог оспорить незаконное увольнение и добиться восстановления на работе с выплатой компенсации. Грамотно, чётко, по делу.",
    stars: 5,
  },
  {
    name: "Игорь Н.",
    category: "Налоговый спор",
    text: "Налоговая доначислила огромную сумму, мы были в панике. Адвокат разобрался, суд отменил незаконное решение полностью. Рекомендую.",
    stars: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-cream">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-gold-500" />
            <span className="text-gold-500 text-sm font-ibm tracking-widest uppercase">Отзывы</span>
            <div className="h-px w-12 bg-gold-500" />
          </div>
          <h2 className="font-cormorant text-4xl md:text-5xl text-navy-900 font-light">
            Слова клиентов
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white p-8 border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.stars }).map((_, i) => (
                  <Icon key={i} name="Star" size={14} className="text-gold-400 fill-gold-400" />
                ))}
              </div>
              <p className="text-navy-700 font-ibm text-sm leading-relaxed mb-6 italic">«{r.text}»</p>
              <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                <p className="text-navy-900 font-ibm font-semibold text-sm">{r.name}</p>
                <span className="text-navy-400 font-ibm text-xs">{r.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;

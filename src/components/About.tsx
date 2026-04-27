import Icon from "@/components/ui/icon";

const credentials = [
  { icon: "GraduationCap", text: "Высшее юридическое образование, МГУ им. М.В. Ломоносова" },
  { icon: "Award", text: "Член Адвокатской палаты Республики Башкортостан" },
  { icon: "Scale", text: "Специализация в уголовном и гражданском праве" },
  { icon: "Shield", text: "Допуск к делам с государственной тайной" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold-400 opacity-30" />
            <div className="relative bg-navy-800 aspect-[3/4] max-w-sm overflow-hidden">
              <div
                className="w-full h-full"
                style={{
                  backgroundImage:
                    "url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80')",
                  backgroundSize: "cover",
                  backgroundPosition: "center top",
                }}
              />
              <div className="absolute inset-0 bg-navy-900/20" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-gold-400 opacity-30" />
          </div>

          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-12 bg-gold-500" />
              <span className="text-gold-500 text-sm font-ibm tracking-widest uppercase">Обо мне</span>
            </div>

            <h2 className="font-cormorant text-4xl md:text-5xl text-navy-900 font-light mb-6 gold-underline">
              Ваш надёжный защитник
            </h2>

            <p className="text-navy-700 font-ibm text-base leading-relaxed mb-4">
              Нуреев Ринат Робертович — практикующий адвокат с многолетним опытом ведения сложных дел в судах общей юрисдикции и арбитражных судах Российской Федерации.
            </p>
            <p className="text-navy-700 font-ibm text-base leading-relaxed mb-8">
              Моя работа основана на принципах честности, профессионализма и полной конфиденциальности. Каждое дело получает максимум внимания и тщательную правовую проработку.
            </p>

            <div className="flex flex-col gap-4">
              {credentials.map((item) => (
                <div key={item.text} className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-navy-900 flex items-center justify-center flex-shrink-0">
                    <Icon name={item.icon} size={18} className="text-gold-400" />
                  </div>
                  <p className="text-navy-700 font-ibm text-sm leading-relaxed pt-2">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
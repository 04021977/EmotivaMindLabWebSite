import { motion } from 'motion/react';
import { AlertCircle, TrendingDown, Users } from 'lucide-react';

export default function Problem() {
  const cards = [
    {
      icon: <AlertCircle className="w-6 h-6 text-emotiva-teal" />,
      title: 'Custos Silenciosos',
      desc: 'Exaustão emocional, queda de engajamento e rotatividade não antecipada.',
    },
    {
      icon: <TrendingDown className="w-6 h-6 text-emotiva-teal" />,
      title: 'Sinais Tardios',
      desc: 'Desgaste coletivo percebido apenas quando já impactou desempenho e resultados.',
    },
    {
      icon: <Users className="w-6 h-6 text-emotiva-teal" />,
      title: 'Métricas Insuficientes',
      desc: 'A maioria mede clima. Poucas monitoram a tendência de risco emocional no tempo.',
    },
  ];

  return (
    <section id="sobre" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold text-emotiva-teal uppercase tracking-widest mb-4">
              O Problema
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-emotiva-text mb-6 leading-tight">
              O risco invisível nas <span className="text-emotiva-teal">organizações</span>
            </h3>
            <p className="text-lg text-emotiva-muted mb-8 leading-relaxed">
              Organizações enfrentam custos silenciosos associados à exaustão emocional, queda de engajamento e rotatividade não antecipada.
            </p>
            <p className="text-lg text-emotiva-muted leading-relaxed">
              Na ausência de métricas estruturadas, os sinais de desgaste coletivo costumam ser percebidos apenas quando já impactaram desempenho, cultura e resultados.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid gap-6"
          >
            {cards.map((card, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-6 rounded-2xl bg-emotiva-bg border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-xl bg-emotiva-teal/10">
                    {card.icon}
                  </div>
                  <div>
                    <h4 className="text-xl font-semibold text-emotiva-text mb-2">
                      {card.title}
                    </h4>
                    <p className="text-emotiva-muted leading-relaxed">
                      {card.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

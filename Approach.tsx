import { motion } from 'motion/react';
import { Activity, Clock, ShieldAlert, BarChart3, Users } from 'lucide-react';

export default function Approach() {
  const features = [
    {
      icon: <Users className="w-5 h-5 text-emotiva-teal" />,
      title: 'Tendência emocional coletiva',
    },
    {
      icon: <Clock className="w-5 h-5 text-emotiva-teal" />,
      title: 'Oscilação ao longo do tempo',
    },
    {
      icon: <Activity className="w-5 h-5 text-emotiva-teal" />,
      title: 'Persistência de tensão e estresse',
    },
    {
      icon: <ShieldAlert className="w-5 h-5 text-emotiva-teal" />,
      title: 'Indicadores probabilísticos de risco',
    },
  ];

  return (
    <section id="abordagem" className="py-24 md:py-32 bg-emotiva-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-emotiva-teal uppercase tracking-widest mb-4"
          >
            Nossa Abordagem
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-emotiva-text mb-6 leading-tight"
          >
            Uma nova camada de <span className="text-emotiva-teal">inteligência organizacional</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-emotiva-muted leading-relaxed"
          >
            A Emotiva MindLab™ desenvolveu uma metodologia proprietária de mensuração emocional organizacional estruturada para identificar padrões de risco antes que se tornem crises operacionais.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.3 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:border-emotiva-teal/30 hover:shadow-md transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-full bg-emotiva-teal/10 flex items-center justify-center mb-6 group-hover:bg-emotiva-teal group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h4 className="text-lg font-semibold text-emotiva-text leading-snug">
                {feature.title}
              </h4>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emotiva-teal/10 text-emotiva-teal font-medium border border-emotiva-teal/20">
            <BarChart3 className="w-5 h-5" />
            <span>Trata-se de um sistema preventivo, não diagnóstico.</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

// Need to import Users in Approach.tsx

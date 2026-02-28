import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export default function Deliverables() {
  const items = [
    'Score emocional organizacional',
    'Tendência temporal de risco',
    'Comparação interdepartamental',
    'Dataset emocional longitudinal',
    'Relatórios executivos estruturados',
    'Indicadores probabilísticos explicáveis',
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-emotiva-bg rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-emotiva-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-emotiva-teal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
              
              <ul className="space-y-6 relative z-10">
                {items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 + 0.2 }}
                    className="flex items-center gap-4 text-lg text-emotiva-text font-medium"
                  >
                    <CheckCircle2 className="w-6 h-6 text-emotiva-teal flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-sm font-semibold text-emotiva-teal uppercase tracking-widest mb-4">
              O Que Entregamos
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-emotiva-text mb-6 leading-tight">
              Indicadores estratégicos para <span className="text-emotiva-teal">tomada de decisão</span>
            </h3>
            <p className="text-lg text-emotiva-muted leading-relaxed mb-8">
              Nossa plataforma transforma dados subjetivos em métricas objetivas e acionáveis, permitindo que a liderança atue com precisão antes que o desgaste se torne um problema estrutural.
            </p>
            <a
              href="#contato"
              className="inline-flex items-center gap-2 px-6 py-3 bg-emotiva-text text-white rounded-full font-medium hover:bg-emotiva-teal transition-all duration-300"
            >
              Conhecer a plataforma
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

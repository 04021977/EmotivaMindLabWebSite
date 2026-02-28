import { motion } from 'motion/react';
import { BrainCircuit, Cpu, Network } from 'lucide-react';

export default function Leadership() {
  return (
    <section className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold text-emotiva-teal uppercase tracking-widest mb-4">
              Sobre a Liderança
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-emotiva-text mb-6 leading-tight">
              Integração entre ciência emocional e <span className="text-emotiva-teal">tecnologia</span>
            </h3>
            <p className="text-lg text-emotiva-muted leading-relaxed mb-6">
              A liderança da Emotiva MindLab™ reúne formação sólida em inteligência emocional, psicanálise, neurociências cognitivas e tecnologia da informação, integrando ciência comportamental e engenharia de dados aplicada ao ambiente corporativo.
            </p>
            <p className="text-lg text-emotiva-muted leading-relaxed">
              Essa intersecção permite estruturar indicadores emocionais com rigor metodológico e visão estratégica.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            <div className="bg-emotiva-bg p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
              <div className="w-16 h-16 rounded-full bg-emotiva-teal/10 flex items-center justify-center mb-6 text-emotiva-teal">
                <BrainCircuit className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-emotiva-text mb-2">Ciência Comportamental</h4>
              <p className="text-sm text-emotiva-muted">Inteligência emocional, psicanálise e neurociências.</p>
            </div>
            
            <div className="bg-emotiva-bg p-8 rounded-3xl border border-gray-100 shadow-sm flex flex-col items-center text-center hover:shadow-md transition-all duration-300 sm:translate-y-8">
              <div className="w-16 h-16 rounded-full bg-emotiva-teal/10 flex items-center justify-center mb-6 text-emotiva-teal">
                <Cpu className="w-8 h-8" />
              </div>
              <h4 className="font-semibold text-emotiva-text mb-2">Engenharia de Dados</h4>
              <p className="text-sm text-emotiva-muted">Tecnologia da informação aplicada ao ambiente corporativo.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

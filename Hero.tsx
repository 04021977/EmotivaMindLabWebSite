import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } },
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-emotiva-bg pt-24">
      {/* Subtle animated background grid */}
      <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(circle at 2px 2px, #18181B 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-emotiva-teal/10 to-transparent"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto"
        >
          <motion.div variants={item} className="mb-6 inline-block">
            <span className="px-4 py-1.5 rounded-full border border-emotiva-teal/30 bg-emotiva-teal/5 text-emotiva-teal text-xs font-semibold uppercase tracking-widest">
              Inteligência Emocional Organizacional
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="text-5xl md:text-7xl font-bold tracking-tight text-emotiva-text mb-8 leading-[1.1]"
          >
            Inteligência Emocional Organizacional{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emotiva-teal to-emotiva-teal-light">
              Baseada em Dados
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="text-xl md:text-2xl text-emotiva-muted mb-6 font-light leading-relaxed"
          >
            Monitoramento preventivo de risco emocional e burnout corporativo por meio de análise contínua de padrões organizacionais.
          </motion.p>

          <motion.p
            variants={item}
            className="text-lg text-emotiva-muted/80 mb-12 max-w-2xl mx-auto"
          >
            Transformamos dados emocionais coletivos em indicadores estratégicos para decisões mais conscientes e sustentáveis.
          </motion.p>

          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <a
              href="#contato"
              className="group flex items-center gap-2 px-8 py-4 bg-emotiva-text text-white rounded-full font-medium hover:bg-emotiva-teal transition-all duration-300"
            >
              Solicitar conversa estratégica
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="#piloto"
              className="px-8 py-4 bg-white text-emotiva-text border border-gray-200 rounded-full font-medium hover:border-emotiva-teal hover:text-emotiva-teal transition-all duration-300"
            >
              Conhecer o Projeto Piloto
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

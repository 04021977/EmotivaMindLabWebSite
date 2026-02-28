import { motion } from 'motion/react';
import { ArrowRight, Layers, Target } from 'lucide-react';

export default function Differential() {
  return (
    <section className="py-24 md:py-32 bg-emotiva-text text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-emotiva-teal/20 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-sm font-semibold text-emotiva-teal-light uppercase tracking-widest mb-4">
              Diferencial
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Além do bem-estar <span className="text-emotiva-teal-light">tradicional</span>
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-8">
              Nossa abordagem complementa iniciativas convencionais de clima e bem-estar corporativo ao integrar análise contínua baseada em dados e modelo probabilístico explicável.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-white/10 text-emotiva-teal-light">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Não oferecemos</h4>
                  <p className="text-gray-400 text-sm">Intervenções isoladas.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-emotiva-teal/20 text-emotiva-teal-light border border-emotiva-teal/30">
                  <Target className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Oferecemos</h4>
                  <p className="text-emotiva-teal-light text-sm">Mensuração estruturada.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square md:aspect-video lg:aspect-square bg-gradient-to-br from-white/5 to-white/10 border border-white/10 rounded-3xl p-8 backdrop-blur-sm flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-400">Clima Organizacional</span>
                  <span className="text-white font-medium">Fotografia pontual</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-gray-400">Bem-estar Tradicional</span>
                  <span className="text-white font-medium">Foco no indivíduo</span>
                </div>
                <div className="flex justify-between items-center border-b border-white/10 pb-4">
                  <span className="text-emotiva-teal-light font-semibold">Emotiva MindLab™</span>
                  <span className="text-white font-medium">Filme contínuo coletivo</span>
                </div>
                <div className="pt-4">
                  <a href="#contato" className="text-emotiva-teal-light hover:text-white transition-colors flex items-center gap-2 text-sm font-medium uppercase tracking-wider">
                    Entenda a diferença <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

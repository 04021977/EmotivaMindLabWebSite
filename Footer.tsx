import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contato" className="bg-emotiva-text text-white py-24 md:py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5 pointer-events-none"></div>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-emotiva-teal/20 rounded-t-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold mb-8 leading-tight"
          >
            Construir inteligência emocional organizacional não é tendência. <br />
            <span className="text-emotiva-teal-light">É infraestrutura.</span>
          </motion.h2>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <a
              href="mailto:contato@emotivamindlab.com"
              className="group inline-flex items-center gap-2 px-10 py-5 bg-emotiva-teal text-white rounded-full font-medium hover:bg-emotiva-teal-light transition-all duration-300 text-lg"
            >
              Agendar conversa estratégica
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-t border-white/10 pt-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-1 mb-6">
              <span className="font-bold text-2xl tracking-tight text-white">
                emotiva
              </span>
              <span className="font-light text-2xl tracking-tight text-gray-400">
                mindlab
              </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Inteligência Emocional Organizacional Baseada em Dados.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-white">Navegação</h4>
            <ul className="space-y-4">
              {['Sobre', 'Abordagem', 'Portfólio', 'Piloto'].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="text-gray-400 hover:text-emotiva-teal-light transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-6 text-white">Contato</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:contato@emotivamindlab.com"
                  className="text-gray-400 hover:text-emotiva-teal-light transition-colors"
                >
                  contato@emotivamindlab.com
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-emotiva-teal-light transition-colors"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Emotiva MindLab™. Todos os direitos reservados.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-300 transition-colors">Termos de Uso</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Política de Privacidade</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

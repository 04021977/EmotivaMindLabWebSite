import { motion } from 'motion/react';
import { Rocket, Calendar, Users, FileText, LineChart } from 'lucide-react';

export default function Pilot() {
  const steps = [
    {
      icon: <Calendar className="w-5 h-5 text-emotiva-teal" />,
      title: 'Monitoramento trimestral',
    },
    {
      icon: <Users className="w-5 h-5 text-emotiva-teal" />,
      title: 'Grupo controlado de colaboradores',
    },
    {
      icon: <FileText className="w-5 h-5 text-emotiva-teal" />,
      title: 'Relatório executivo final',
    },
    {
      icon: <LineChart className="w-5 h-5 text-emotiva-teal" />,
      title: 'Análise estratégica de tendências',
    },
  ];

  return (
    <section id="piloto" className="py-24 md:py-32 bg-emotiva-bg relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="bg-white rounded-[3rem] p-8 md:p-16 shadow-lg border border-gray-100 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-emotiva-teal/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-emotiva-teal/10 text-emotiva-teal mb-8">
                <Rocket className="w-8 h-8" />
              </div>
              <h2 className="text-sm font-semibold text-emotiva-teal uppercase tracking-widest mb-4">
                Projeto Piloto
              </h2>
              <h3 className="text-4xl md:text-5xl font-bold text-emotiva-text mb-6 leading-tight">
                Inovação <span className="text-emotiva-teal">Organizacional</span>
              </h3>
              <p className="text-lg text-emotiva-muted leading-relaxed mb-8">
                Oferecemos um programa estruturado de validação. Trata-se de um projeto de inovação com valor simbólico e alto potencial estratégico.
              </p>
              <a
                href="#contato"
                className="inline-flex items-center gap-2 px-8 py-4 bg-emotiva-text text-white rounded-full font-medium hover:bg-emotiva-teal transition-all duration-300"
              >
                Conhecer o Projeto Piloto
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid gap-4"
            >
              {steps.map((step, idx) => (
                <div key={idx} className="flex items-center gap-4 p-4 rounded-2xl bg-emotiva-bg border border-gray-100 hover:border-emotiva-teal/30 transition-colors">
                  <div className="p-3 rounded-xl bg-white shadow-sm flex-shrink-0">
                    {step.icon}
                  </div>
                  <h4 className="font-semibold text-emotiva-text">
                    {step.title}
                  </h4>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { motion } from 'motion/react';
import { ShieldCheck, Lock, Eye, FileCheck } from 'lucide-react';

export default function Compliance() {
  const items = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-emotiva-teal" />,
      title: 'Estrutura LGPD-ready',
    },
    {
      icon: <Lock className="w-6 h-6 text-emotiva-teal" />,
      title: 'Anonimização no nível organizacional',
    },
    {
      icon: <Eye className="w-6 h-6 text-emotiva-teal" />,
      title: 'Separação clara entre indivíduo e coletivo',
    },
    {
      icon: <FileCheck className="w-6 h-6 text-emotiva-teal" />,
      title: 'Indicadores não diagnósticos',
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-emotiva-teal" />,
      title: 'Modelo auditável e explicável',
    },
  ];

  return (
    <section className="py-24 md:py-32 bg-emotiva-bg">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-semibold text-emotiva-teal uppercase tracking-widest mb-4"
          >
            Segurança e Compliance
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold text-emotiva-text mb-6 leading-tight"
          >
            Confiança e <span className="text-emotiva-teal">governança de dados</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-emotiva-muted leading-relaxed"
          >
            Transparência é parte do nosso método. Garantimos a privacidade dos colaboradores enquanto fornecemos insights valiosos para a organização.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {items.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 + 0.3 }}
              className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4 hover:shadow-md transition-all duration-300"
            >
              <div className="p-3 rounded-xl bg-emotiva-teal/10 flex-shrink-0">
                {item.icon}
              </div>
              <h4 className="font-semibold text-emotiva-text leading-snug">
                {item.title}
              </h4>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

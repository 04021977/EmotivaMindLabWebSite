import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/70 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-1 cursor-pointer">
          <span className="font-bold text-xl tracking-tight text-emotiva-text">
            emotiva
          </span>
          <span className="font-light text-xl tracking-tight text-emotiva-muted">
            mindlab
          </span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {['Sobre', 'Abordagem', 'Portfólio', 'Contato'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-emotiva-muted hover:text-emotiva-teal transition-colors"
            >
              {item}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm font-medium px-5 py-2.5 rounded-full border border-emotiva-teal text-emotiva-teal hover:bg-emotiva-teal hover:text-white transition-all duration-300"
          >
            Fale Conosco
          </a>
        </div>
      </div>
    </motion.nav>
  );
}

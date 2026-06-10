import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const brands = [
  {
    name: 'MRF',
    tagline: 'Tyres That Move India',
    primary: '#1a6b3a',
    secondary: '#f5c900',
    abbr: 'MRF',
    abbrColor: '#f5c900',
    bg: '#1a6b3a',
  },
  {
    name: 'Apollo',
    tagline: 'Going the Extra Mile',
    primary: '#003087',
    secondary: '#ffffff',
    abbr: 'A',
    abbrColor: '#ffffff',
    bg: '#003087',
  },
  {
    name: 'Bridgestone',
    tagline: 'Serving Society with Superior Quality',
    primary: '#cc0000',
    secondary: '#ffffff',
    abbr: 'B',
    abbrColor: '#ffffff',
    bg: '#cc0000',
  },
  {
    name: 'CEAT',
    tagline: 'Driven by Guts',
    primary: '#1d1d1b',
    secondary: '#e30613',
    abbr: 'CEAT',
    abbrColor: '#e30613',
    bg: '#1d1d1b',
  },
  {
    name: 'Michelin',
    tagline: 'The Right Tyre Changes Everything',
    primary: '#003189',
    secondary: '#ffffff',
    abbr: 'M',
    abbrColor: '#ffffff',
    bg: '#003189',
  },
  {
    name: 'JK Tyre',
    tagline: 'Total Control',
    primary: '#e85b1e',
    secondary: '#ffffff',
    abbr: 'JK',
    abbrColor: '#ffffff',
    bg: '#e85b1e',
  },
  {
    name: 'Yokohama',
    tagline: 'The Sportier Tyre',
    primary: '#003f8f',
    secondary: '#e60012',
    abbr: 'Y',
    abbrColor: '#ffffff',
    bg: '#003f8f',
  },
  {
    name: 'Goodyear',
    tagline: 'More Driven',
    primary: '#003087',
    secondary: '#f7a800',
    abbr: 'GY',
    abbrColor: '#f7a800',
    bg: '#003087',
  },
];

export default function Brands() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="brands" className="section-padding bg-dark-50" aria-labelledby="brands-heading">
      <div className="container-max" ref={ref}>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4"
          >
            Top Brands
          </motion.span>
          <motion.h2
            id="brands-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Brands We Offer
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto mt-4"
          >
            We stock genuine tyres from India's leading and most trusted brands.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white rounded-2xl overflow-hidden shadow-sm border border-dark-100/50 transition-all duration-300 hover:shadow-xl group cursor-default"
              role="article"
              aria-label={`${brand.name} tyres – Authorized Dealer`}
            >
              <div
                className="h-28 flex items-center justify-center relative overflow-hidden"
                style={{ backgroundColor: brand.bg }}
              >
                <div className="absolute inset-0 opacity-10" style={{
                  backgroundImage: 'radial-gradient(circle at 70% 30%, rgba(255,255,255,0.3) 0%, transparent 60%)',
                }} />
                <div className="relative text-center">
                  <div
                    className="text-3xl md:text-4xl font-black tracking-tight transition-transform duration-300 group-hover:scale-110"
                    style={{
                      color: brand.abbrColor,
                      fontFamily: '"Arial Black", "Arial Bold", Gadget, sans-serif',
                      textShadow: '0 2px 8px rgba(0,0,0,0.3)',
                    }}
                  >
                    {brand.abbr}
                  </div>
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-base font-bold text-dark-900">{brand.name}</h3>
                <p className="text-xs text-dark-400 mt-1 leading-snug">{brand.tagline}</p>
                <span className="inline-block mt-2 text-xs font-semibold text-primary-500">Authorized Dealer</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const brands = [
  { name: 'MRF', color: '#e11d48' },
  { name: 'Apollo', color: '#2563eb' },
  { name: 'Bridgestone', color: '#dc2626' },
  { name: 'CEAT', color: '#f59e0b' },
  { name: 'Michelin', color: '#16a34a' },
  { name: 'JK Tyre', color: '#7c3aed' },
  { name: 'Yokohama', color: '#0891b2' },
  { name: 'Goodyear', color: '#eab308' },
];

export default function Brands() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="brands" className="section-padding bg-dark-50">
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
              className="bg-white rounded-2xl p-6 md:p-8 flex flex-col items-center justify-center gap-3 shadow-sm border border-dark-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 group cursor-default"
            >
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${brand.color}15` }}
              >
                <span
                  className="text-xl md:text-2xl font-extrabold tracking-tight"
                  style={{ color: brand.color }}
                >
                  {brand.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-base md:text-lg font-bold text-dark-800 text-center">{brand.name}</h3>
              <span className="text-xs text-dark-400 font-medium">Authorized Dealer</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

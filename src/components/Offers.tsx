import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Tag, Percent, Gift } from 'lucide-react';

const offers = [
  {
    icon: Percent,
    title: 'Flat 10% Off',
    desc: 'On all MRF and Apollo tyres for cars and SUVs this month.',
    badge: 'Limited Time',
  },
  {
    icon: Tag,
    title: 'Free Wheel Balancing',
    desc: 'Get complimentary wheel balancing with every set of 4 tyres purchased.',
    badge: 'Popular',
  },
  {
    icon: Gift,
    title: 'Monsoon Offer',
    desc: 'Special discount on wet-grip tyres and nitrogen filling combo this season.',
    badge: 'Seasonal',
  },
];

export default function Offers() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  return (
    <section className="relative section-padding overflow-hidden" aria-labelledby="offers-heading">
      <motion.div style={{ y: bgY }} className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-primary-900/20" />
      <div className="absolute inset-0 opacity-5" style={{
        backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
      }} />
      <div className="container-max relative" ref={ref}>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-primary-500/20 border border-primary-500/30 text-primary-300 text-sm font-semibold rounded-full mb-4"
          >
            Special Offers
          </motion.span>
          <motion.h2
            id="offers-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight"
          >
            Current Offers & Deals
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {offers.map((offer, i) => (
            <motion.div
              key={offer.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 md:p-8 transition-all duration-300 hover:bg-white/10 group"
              role="article"
              aria-label={offer.title}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center">
                  <offer.icon className="w-6 h-6 text-primary-400" aria-hidden="true" />
                </div>
                <span className="px-2 py-0.5 bg-primary-500/20 text-primary-300 text-xs font-semibold rounded-full">
                  {offer.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">{offer.title}</h3>
              <p className="text-white/60 leading-relaxed text-sm">{offer.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-10"
        >
          <a href="tel:+91XXXXXXXXXX" className="btn-primary" aria-label="Call to avail offers">
            Call to Avail Offers
          </a>
        </motion.div>
      </div>
    </section>
  );
}

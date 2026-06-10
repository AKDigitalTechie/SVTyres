import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { CircleDot, AlignCenterHorizontal, Gauge, Wind, Construction, Disc3, Battery, Droplets } from 'lucide-react';

const services = [
  {
    icon: CircleDot,
    title: 'Tyre Replacement',
    desc: 'Professional tyre fitting and replacement for all vehicle types with precision equipment.',
  },
  {
    icon: AlignCenterHorizontal,
    title: 'Wheel Alignment',
    desc: 'Computerized 3D wheel alignment to ensure proper handling, even wear, and maximum tyre life.',
  },
  {
    icon: Gauge,
    title: 'Wheel Balancing',
    desc: 'Dynamic wheel balancing for a smoother ride and reduced vibration at high speeds.',
  },
  {
    icon: Wind,
    title: 'Nitrogen Air Filling',
    desc: 'Nitrogen inflation for stable tyre pressure, better fuel efficiency, and longer tyre life.',
  },
  {
    icon: Construction,
    title: 'Puncture Repair',
    desc: 'Quick and reliable puncture repair using industry-standard patch and plug methods.',
  },
  {
    icon: Disc3,
    title: 'Alloy Wheel Services',
    desc: 'Alloy wheel fitting, balancing, and repair services to keep your wheels looking great.',
  },
  {
    icon: Battery,
    title: 'Battery Replacement',
    desc: 'Genuine car battery testing and replacement with top brands for reliable starting power.',
  },
  {
    icon: Droplets,
    title: 'Oil Change',
    desc: 'Engine oil and filter replacement service using quality oils for optimal engine performance.',
  },
];

export default function Services() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="services" className="section-padding bg-white" aria-labelledby="services-heading">
      <div className="container-max" ref={ref}>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4"
          >
            Our Services
          </motion.span>
          <motion.h2
            id="services-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Complete Tyre &amp; Auto Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto mt-4"
          >
            From tyre replacement to battery service — all your vehicle needs under one roof.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              whileHover={{ y: -6, transition: { duration: 0.2 } }}
              className="card p-6 group relative overflow-hidden"
              role="article"
              aria-label={service.title}
            >
              <div className="absolute top-0 right-0 w-28 h-28 bg-primary-500/5 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary-500/10 transition-colors duration-500" />
              <motion.div
                className="absolute bottom-0 left-0 w-20 h-20 bg-primary-500/0 group-hover:bg-primary-500/5 rounded-full translate-y-1/2 -translate-x-1/2 transition-colors duration-500"
              />
              <div className="relative">
                <div className="w-12 h-12 bg-primary-50 group-hover:bg-primary-500 rounded-xl flex items-center justify-center mb-4 transition-all duration-300">
                  <service.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                <h3 className="text-base font-bold text-dark-900 mb-2">{service.title}</h3>
                <p className="text-dark-500 leading-relaxed text-sm">{service.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

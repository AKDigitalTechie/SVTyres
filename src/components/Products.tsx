import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Car, Truck, Bike } from 'lucide-react';

const categories = [
  {
    icon: Car,
    title: 'Car Tyres',
    desc: 'Premium and budget tyres for sedans, hatchbacks, and luxury cars from all top brands.',
    image: 'https://images.pexels.com/photos/1545743/pexels-photo-1545743.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Truck,
    title: 'SUV Tyres',
    desc: 'Rugged and reliable SUV tyres for on-road and off-road performance across terrains.',
    image: 'https://images.pexels.com/photos/97075/pexels-photo-97075.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Bike,
    title: 'Bike Tyres',
    desc: 'High-performance two-wheeler tyres for motorcycles and scooters with excellent grip.',
    image: 'https://images.pexels.com/photos/5793953/pexels-photo-5793953.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    icon: Truck,
    title: 'Commercial Vehicle Tyres',
    desc: 'Heavy-duty tyres for trucks, buses, and commercial vehicles built for long-lasting performance.',
    image: 'https://images.pexels.com/photos/2199293/pexels-photo-2199293.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

export default function Products() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-dark-50">
      <div className="container-max" ref={ref}>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4"
          >
            Product Range
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Tyres for Every Vehicle
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto mt-4"
          >
            Whatever you drive, we have the right tyre for you.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative rounded-2xl overflow-hidden shadow-sm border border-dark-100/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-default"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/80 via-dark-950/20 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <div className="w-10 h-10 bg-primary-500 rounded-xl flex items-center justify-center shadow-lg">
                    <cat.icon className="w-5 h-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-5 bg-white">
                <h3 className="text-lg font-bold text-dark-900 mb-2">{cat.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{cat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

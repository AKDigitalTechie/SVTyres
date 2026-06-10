import { motion, useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { Calendar, Users, Award, ShieldCheck, Star } from 'lucide-react';

const stats = [
  { icon: Calendar, value: 10, suffix: '+', label: 'Years Experience' },
  { icon: Users, value: 5000, suffix: '+', label: 'Happy Customers' },
  { icon: Award, value: 8, suffix: '+', label: 'Premium Brands' },
  { icon: ShieldCheck, value: 100, suffix: '%', label: 'Genuine Products' },
];

function AnimatedCounter({ value, suffix, duration = 2 }: { value: number; suffix: string; duration?: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (!inView) return;
    let current = 0;
    const end = value;
    const step = end > 100 ? Math.ceil(end / 60) : 1;
    const stepTime = Math.max(16, (duration * 1000) / (end / step));
    const timer = setInterval(() => {
      current += step;
      if (current >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, stepTime);
    return () => clearInterval(timer);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-extrabold text-white tabular-nums">
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="relative section-padding overflow-hidden" aria-label="Company statistics">
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-primary-900/20" />
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23fff' fill-opacity='1'%3E%3Cpath d='M20 20.5V18H0v-2h20v-2l2 3.5-2 3z'/%3E%3C/g%3E%3C/svg%3E\")" }}
      />
      <div className="container-max relative" ref={ref}>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-14">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="text-center"
            >
              <div className="w-14 h-14 mx-auto bg-primary-500/20 rounded-2xl flex items-center justify-center mb-4">
                <stat.icon className="w-7 h-7 text-primary-400" aria-hidden="true" />
              </div>
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              <p className="text-white/60 text-sm md:text-base font-medium mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col items-center gap-2 pt-10 border-t border-white/10"
        >
          <div className="flex gap-1" role="img" aria-label="5 out of 5 stars customer satisfaction">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-6 h-6 text-yellow-400 fill-yellow-400" aria-hidden="true" />
            ))}
          </div>
          <p className="text-white font-bold text-lg tracking-tight">5.0 Customer Satisfaction</p>
          <p className="text-white/50 text-sm">Based on 300+ verified Google Reviews</p>
        </motion.div>
      </div>
    </section>
  );
}

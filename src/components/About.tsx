import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import { ShieldCheck, BadgeDollarSign, Wrench, Zap, Heart, Layers } from 'lucide-react';
import { useRef } from 'react';
import SkeletonImage from './SkeletonImage';
import { BUSINESS_NAME } from '../constants';

const reasons = [
  { icon: ShieldCheck, title: 'Genuine Products', desc: '100% authentic tyres from authorized dealers with manufacturer warranty.' },
  { icon: BadgeDollarSign, title: 'Reasonable Pricing', desc: 'Competitive prices with regular offers and the best value in Bangalore.' },
  { icon: Wrench, title: 'Expert Technicians', desc: 'Skilled professionals with years of experience in tyre fitting and services.' },
  { icon: Zap, title: 'Fast Service', desc: 'Quick turnaround times so you can get back on the road sooner.' },
  { icon: Heart, title: 'Trusted by Customers', desc: 'Hundreds of satisfied customers across Basaveshwara Nagar and Bangalore.' },
  { icon: Layers, title: 'Multiple Brands', desc: 'Wide selection of top tyre brands to suit every vehicle and budget.' },
];

function AnimatedCard({ children, delay }: { children: React.ReactNode; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: '-100px' });
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section id="about" className="section-padding bg-white" aria-labelledby="about-heading">
      <div className="container-max">
        <div ref={sectionRef} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-20">
          <div>
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4"
            >
              About Us
            </motion.span>
            <motion.h2
              id="about-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title mb-6"
            >
              Trusted Tyre Retailer & Wholesaler in Bangalore
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-dark-500 text-lg leading-relaxed mb-6"
            >
              {BUSINESS_NAME} is a trusted tyre retailer & wholesaler providing quality products and professional
              service in Basaveshwara Nagar, Bangalore. Located in the Rajaji Nagar Industrial Town,
              we have earned a reputation for offering genuine tyres from top brands at competitive prices.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-dark-500 text-lg leading-relaxed"
            >
              Whether you need tyres for your car, SUV, bike, or commercial vehicle, our expert team
              ensures you get the right fit with professional installation. From wheel alignment and
              nitrogen filling to puncture repair ( only for walk-ins ) — we offer a complete range of
              automotive services under one roof.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ y: imgY }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <SkeletonImage
                src="/twoshutter.png"
                alt="SV Tyres and Services — shop image"
                className="w-full h-80 lg:h-96"
                imgClassName="w-full h-full object-contain object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dark-950/50 to-transparent" />
            </div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-500 rounded-2xl flex items-center justify-center shadow-lg shadow-primary-500/30">
              <div className="text-center text-white">
                <div className="text-2xl font-bold leading-tight">10+</div>
                <div className="text-xs font-medium opacity-80">Years</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4">
            Why Choose Us
          </span>
          <h2 className="section-title">Why Customers Trust Us</h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <AnimatedCard key={reason.title} delay={i * 0.08}>
              <div className="card p-6 h-full group">
                <div className="w-12 h-12 bg-primary-50 group-hover:bg-primary-500 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-primary-500 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-bold text-dark-900 mb-2">{reason.title}</h3>
                <p className="text-dark-500 text-sm leading-relaxed">{reason.desc}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
}

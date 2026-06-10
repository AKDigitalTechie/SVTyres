import { motion, useScroll, useTransform } from 'framer-motion';
import { Phone, MessageCircle, MapPin, ChevronDown } from 'lucide-react';
import { useRef } from 'react';
import {
  PHONE_HREF,
  WHATSAPP_HREF,
  MAPS_HREF,
  BUSINESS_NAME,
  TAGLINE,
  SHOP_IMAGE,
} from '../constants';

const brands = ['Bridgestone', 'MRF', 'Apollo', 'CEAT', 'Michelin', 'JK Tyre', 'Yokohama'];

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.08]);

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-center overflow-hidden" aria-label="Hero">
      <motion.div
        style={{ y: imgY, scale }}
        className="absolute inset-0"
        role="img"
        aria-label="SV Tyres and Services shop in Basaveshwara Nagar Bangalore"
      >
        <img
          src={SHOP_IMAGE}
          alt="SV Tyres and Services shop exterior"
          className="w-full h-full object-cover object-center"
          style={{ filter: 'brightness(1.1) contrast(1.05)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-br from-dark-950/92 via-dark-950/75 to-dark-950/88" />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-dark-950/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-950/30 via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative container-max section-padding pt-32 md:pt-40">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-6 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
              Trusted Tyre Shop in Bangalore
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="font-extrabold text-white tracking-tight leading-[0.95] mb-2"
            style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
          >
            {BUSINESS_NAME}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="text-lg sm:text-xl md:text-2xl text-white/70 font-light mb-8 max-w-2xl"
          >
            {TAGLINE}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45, ease: 'easeOut' }}
            className="flex flex-wrap gap-2 mb-10"
          >
            {brands.map((brand, i) => (
              <motion.span
                key={brand}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.06 }}
                className="px-3 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg text-white/80 text-sm font-medium"
              >
                {brand}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
            className="flex flex-wrap gap-4"
          >
            <a href={PHONE_HREF} className="btn-primary" aria-label="Call SV Tyres and Services now">
              <Phone className="w-5 h-5" aria-hidden="true" />
              Call Now
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-green-600/25 hover:-translate-y-0.5 active:translate-y-0"
              aria-label="WhatsApp SV Tyres and Services"
            >
              <MessageCircle className="w-5 h-5" aria-hidden="true" />
              WhatsApp Us
            </a>
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
              aria-label="Get directions to SV Tyres and Services"
            >
              <MapPin className="w-5 h-5" aria-hidden="true" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-white/40 hover:text-white/70 transition-colors" aria-label="Scroll down to about section">
          <span className="text-xs font-medium tracking-widest uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5" aria-hidden="true" />
        </a>
      </motion.div>
    </section>
  );
}

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

const brands = ['Bridgestone', 'MRF', 'Apollo', 'CEAT', 'Michelin', 'JK Tyre', 'Yokohama', 'Pirelli', 'Metzeler'];

const brandColorClasses: { [key: string]: string } = {
  Bridgestone: 'bg-red-600 hover:bg-red-700 text-white',
  MRF: 'bg-green-600 hover:bg-green-700 text-white',
  Apollo: 'bg-yellow-400 hover:bg-yellow-500 text-black',
  CEAT: 'bg-stone-700 hover:bg-stone-800 text-white',
  Michelin: 'bg-sky-600 hover:bg-sky-700 text-white',
  'JK Tyre': 'bg-orange-600 hover:bg-orange-700 text-white',
  Yokohama: 'bg-indigo-600 hover:bg-indigo-700 text-white',
  Pirelli: 'bg-red-700 hover:bg-red-800 text-white',
  Metzeler: 'bg-blue-700 hover:bg-blue-800 text-white',
};

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const imgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8], [1, 1.08]);
  const mobileTagline = TAGLINE.replace(', Bangalore', '');

  return (
    <section id="home" ref={ref} className="relative min-h-screen flex items-start md:items-center overflow-hidden" aria-label="Hero">
      <motion.div
        style={{ y: imgY, scale }}
        className="absolute inset-0"
        role="img"
        aria-label="SV Tyres and Services shop in Basaveshwara Nagar Bangalore"
      >
        <img
          src={SHOP_IMAGE}
          alt="SV Tyres and Services shop exterior"
          className="w-full h-full object-cover"
          style={{ filter: 'brightness(1.1) contrast(1.05)', objectPosition: '30% center' }}
        />
        {/* Desktop gradients (hidden on mobile) */}
        <div className="hidden md:block absolute inset-0 bg-gradient-to-br from-dark-950/92 via-dark-950/75 to-dark-950/88" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-dark-950/30" />
        <div className="hidden md:block absolute inset-0 bg-gradient-to-r from-dark-950/30 via-transparent to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative container-max section-padding pt-12 md:pt-40 lg:pl-96">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary-500/20 border border-primary-500/30 rounded-full text-primary-400 text-sm font-medium mb-6 mt-6 md:mt-0 backdrop-blur-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-400 animate-pulse" />
              Trusted Tyre Shop in Bangalore
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="hidden md:block font-extrabold text-white tracking-tight leading-normal md:leading-[0.95] mb-2 mt-6 md:mt-0"
            style={{ fontSize: 'clamp(3rem, 8vw, 5rem)' }}
          >
            {BUSINESS_NAME}
          </motion.h1>

          {/* Mobile heading: full-width rectangle background */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: 'easeOut' }}
            className="block md:hidden relative pl-2 font-extrabold text-white tracking-tight leading-normal md:leading-[0.95] mb-2 mt-6 md:mt-0 drop-shadow-lg"
            style={{ fontSize: 'clamp(3rem, 9vw, 4.25rem)' }}
          >
            <span className="absolute left-1/2 transform -translate-x-1/2 w-screen bg-black/60 px-6 py-6"></span>
            <span className="relative z-10 block w-full text-left pl-1 pr-4">{BUSINESS_NAME}</span>
          </motion.h1>

          {/* Desktop tagline (visible md+) */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="hidden md:block text-lg sm:text-xl md:text-2xl text-white font-bold md:font-light mb-8 max-w-2xl"
          >
            {TAGLINE}
          </motion.p>

          {/* Mobile tagline: full-width rectangle background */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="block md:hidden relative mb-6"
          >
            <span className="absolute left-1/2 transform -translate-x-1/2 w-screen bg-black/60 px-6 py-3"></span>
            <span className="relative z-10 block px-4 text-sm text-white font-normal leading-tight text-center whitespace-nowrap">{mobileTagline}</span>
          </motion.div>

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
                className={`inline-flex items-center justify-center text-sm font-medium px-3 py-1.5 md:px-4 md:py-2 rounded-md border border-white/30 shadow-sm transition-all duration-200 ${brandColorClasses[brand] || 'bg-white/5 text-white'}`}
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
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 hover:shadow-lg"
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

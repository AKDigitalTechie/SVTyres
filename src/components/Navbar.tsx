import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X } from 'lucide-react';
import { PHONE_HREF } from '../constants';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Brands', href: '#brands' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-lg shadow-dark-900/5'
            : 'bg-transparent'
        }`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="container-max">
          <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6 lg:px-8">
            <a href="#home" className="flex items-center gap-2.5 group" aria-label="SV Tyres and Services home">
              <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-primary-500/30 group-hover:border-primary-500 transition-colors duration-300 flex-shrink-0">
                <img
                  src="/Image.jpg"
                  alt="SV Tyres and Services logo"
                  className="w-full h-full object-cover object-top scale-110"
                />
              </div>
              <div className="flex flex-col leading-none">
                <span className={`text-base font-extrabold tracking-tight transition-colors duration-300 ${
                  scrolled ? 'text-dark-900' : 'text-white'
                }`}>
                  SV Tyres
                </span>
                <span className={`text-[9px] font-semibold tracking-widest uppercase transition-colors duration-300 ${
                  scrolled ? 'text-primary-500' : 'text-primary-400'
                }`}>
                  &amp; Services
                </span>
              </div>
            </a>

            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 hover:bg-primary-500/10 ${
                    scrolled
                      ? 'text-dark-600 hover:text-primary-500'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="hidden lg:flex items-center gap-3">
              <a href={PHONE_HREF} className="btn-primary text-sm py-2.5 px-5" aria-label="Call SV Tyres">
                <Phone className="w-4 h-4" aria-hidden="true" />
                Call Now
              </a>
            </div>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden p-2 rounded-lg transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 ${
                scrolled ? 'text-dark-900 hover:bg-dark-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileOpen}
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 lg:hidden"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
          >
            <div className="absolute inset-0 bg-dark-950/60 backdrop-blur-sm" onClick={() => setMobileOpen(false)} aria-hidden="true" />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-80 bg-white shadow-2xl"
            >
              <div className="flex flex-col p-6 pt-20 gap-1">
                {navLinks.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="px-4 py-3 rounded-xl text-dark-700 hover:text-primary-500 hover:bg-primary-50 font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                  >
                    {link.label}
                  </motion.a>
                ))}
                <div className="mt-4 pt-4 border-t border-dark-100">
                  <a href={PHONE_HREF} className="btn-primary w-full justify-center">
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Call Now
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

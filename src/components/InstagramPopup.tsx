import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function InstagramPopup() {
  const [show, setShow] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    if (dismissed) return;
    const timer = setTimeout(() => setShow(true), 8000);
    return () => clearTimeout(timer);
  }, [dismissed]);

  const handleDismiss = () => {
    setShow(false);
    setDismissed(true);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 50, scale: 0.9 }}
          transition={{ type: 'spring', damping: 20, stiffness: 200 }}
          className="fixed bottom-24 left-6 z-40 max-w-xs"
          role="dialog"
          aria-label="Instagram follow prompt"
        >
          <div className="bg-white rounded-2xl shadow-2xl border border-dark-100/50 p-5 relative">
            <button
              onClick={handleDismiss}
              className="absolute top-3 right-3 w-7 h-7 rounded-full bg-dark-100 hover:bg-dark-200 flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
              aria-label="Dismiss Instagram popup"
            >
              <X className="w-3.5 h-3.5 text-dark-500" aria-hidden="true" />
            </button>

            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center" aria-hidden="true">
                <Instagram className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-dark-900 text-sm">SV Tyres</div>
                <div className="text-xs text-dark-400">@svtyres</div>
              </div>
            </div>

            <p className="text-dark-600 text-sm leading-relaxed mb-4">
              Follow us on Instagram for latest tyre offers and updates
            </p>

            <a
              href="https://instagram.com/svtyres"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-purple-500 focus-visible:ring-offset-2"
              aria-label="Follow SV Tyres on Instagram"
            >
              <Instagram className="w-4 h-4" aria-hidden="true" />
              Follow Us
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

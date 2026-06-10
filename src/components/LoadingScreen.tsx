import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] bg-dark-950 flex items-center justify-center"
        >
          <div className="flex flex-col items-center gap-6">
            <div className="relative">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'linear' }}
                className="w-20 h-20 border-4 border-dark-700 border-t-primary-500 rounded-full"
                role="status"
                aria-label="Loading SV Tyres and Services"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-dark-600">
                  <img
                    src="/Image.jpg"
                    alt="SV Tyres"
                    className="w-full h-full object-cover object-top scale-110"
                  />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className="text-xl font-extrabold text-white tracking-tight">SV Tyres and Services</div>
              <div className="text-xs font-semibold text-primary-400 tracking-widest uppercase mt-1">
                Basaveshwara Nagar · Bangalore
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

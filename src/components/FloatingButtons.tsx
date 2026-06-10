import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, Phone, Instagram } from 'lucide-react';
import { useState } from 'react';

const buttons = [
  {
    icon: MessageCircle,
    label: 'Chat with us',
    href: 'https://wa.me/91XXXXXXXXXX',
    bg: 'bg-green-500 hover:bg-green-600',
    shadow: 'shadow-green-500/30',
  },
  {
    icon: Phone,
    label: 'Call Now',
    href: 'tel:+91XXXXXXXXXX',
    bg: 'bg-primary-500 hover:bg-primary-600',
    shadow: 'shadow-primary-500/30',
  },
  {
    icon: Instagram,
    label: 'Follow us',
    href: 'https://instagram.com/svtyres',
    bg: 'bg-gradient-to-br from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600',
    shadow: 'shadow-purple-500/30',
  },
];

export default function FloatingButtons() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3" role="group" aria-label="Quick action buttons">
      {buttons.map((btn, i) => (
        <div key={btn.label} className="relative flex items-center justify-end">
          <AnimatePresence>
            {hoveredIndex === i && (
              <motion.span
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="absolute right-14 whitespace-nowrap bg-dark-900 text-white text-xs font-medium px-3 py-1.5 rounded-lg shadow-lg pointer-events-none"
                aria-hidden="true"
              >
                {btn.label}
              </motion.span>
            )}
          </AnimatePresence>

          <motion.a
            href={btn.href}
            target={btn.href.startsWith('http') ? '_blank' : undefined}
            rel={btn.href.startsWith('http') ? 'noopener noreferrer' : undefined}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1 + i * 0.1, type: 'spring', stiffness: 200 }}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
            aria-label={btn.label}
            className={`w-12 h-12 ${btn.bg} text-white rounded-full flex items-center justify-center shadow-lg ${btn.shadow} transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2`}
          >
            <btn.icon className="w-5 h-5" aria-hidden="true" />
          </motion.a>
        </div>
      ))}
    </div>
  );
}

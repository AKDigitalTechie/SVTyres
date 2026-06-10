import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    q: 'Which tyre brands are available?',
    a: 'We stock genuine tyres from MRF, Apollo, Bridgestone, CEAT, Michelin, JK Tyre, Yokohama, and Goodyear. All products come with manufacturer warranty.',
  },
  {
    q: 'Do you provide wheel alignment?',
    a: 'Yes, we offer computerized wheel alignment services using state-of-the-art equipment. Proper alignment ensures even tyre wear, better fuel efficiency, and improved handling.',
  },
  {
    q: 'Do you offer nitrogen filling?',
    a: 'Yes, we provide nitrogen air filling for all types of vehicles. Nitrogen maintains stable tyre pressure, improves fuel efficiency, and extends tyre life.',
  },
  {
    q: 'What are your working hours?',
    a: 'We are open Monday to Sunday from 9 AM to 8 PM. You can visit us or call ahead to schedule an appointment for faster service.',
  },
];

function FAQItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="border border-dark-100 rounded-2xl overflow-hidden transition-all duration-300 hover:border-dark-200">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4"
      >
        <span className="text-base md:text-lg font-semibold text-dark-900">{q}</span>
        <div className={`w-8 h-8 rounded-full bg-dark-50 flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-primary-50' : ''}`}>
          <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-primary-500' : 'text-dark-400'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-5 md:pb-6 text-dark-500 leading-relaxed">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section className="section-padding bg-white">
      <div className="container-max" ref={ref}>
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4"
            >
              FAQ
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title"
            >
              Frequently Asked Questions
            </motion.h2>
          </div>

          <div className="flex flex-col gap-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <FAQItem
                  q={faq.q}
                  a={faq.a}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

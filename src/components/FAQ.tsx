import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

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
  {
    q: 'Do you offer home service or mobile tyre fitting?',
    a: 'Currently, we provide all services at our shop in Rajajinagar. Call us to check availability for specific mobile service requests in the nearby area.',
  },
  {
    q: 'How often should I get wheel alignment done?',
    a: 'We recommend wheel alignment every 10,000 km or whenever you notice uneven tyre wear, steering pull, or after hitting a pothole. Regular alignment extends tyre life significantly.',
  },
];

function FAQItem({ q, a, isOpen, onToggle, index }: { q: string; a: string; isOpen: boolean; onToggle: () => void; index: number }) {
  return (
    <motion.div
      layout
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen ? 'border-primary-200 bg-primary-50/30 shadow-sm' : 'border-dark-100 hover:border-dark-200'
      }`}
    >
      <button
        onClick={onToggle}
        expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        className="w-full flex items-center justify-between p-5 md:p-6 text-left gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2 rounded-2xl"
      >
        <span className={`text-base md:text-lg font-semibold transition-colors duration-300 ${isOpen ? 'text-primary-600' : 'text-dark-900'}`}>
          {q}
        </span>
        <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
          isOpen ? 'rotate-180 bg-primary-500' : 'bg-dark-50'
        }`}>
          <ChevronDown className={`w-4 h-4 transition-colors duration-300 ${isOpen ? 'text-white' : 'text-dark-400'}`} />
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
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
    </motion.div>
  );
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" className="section-padding bg-white" aria-labelledby="faq-heading">
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
              id="faq-heading"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="section-title"
            >
              Frequently Asked Questions
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="section-subtitle mx-auto mt-4"
            >
              Got questions? We have answers about our tyre services and products.
            </motion.p>
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
                  index={i}
                  isOpen={openIndex === i}
                  onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-10 p-6 bg-dark-50 rounded-2xl"
          >
            <HelpCircle className="w-8 h-8 text-primary-500 mx-auto mb-3" aria-hidden="true" />
            <h3 className="text-lg font-bold text-dark-900 mb-2">Still have questions?</h3>
            <p className="text-dark-500 text-sm mb-4">Our team is happy to help with any tyre-related queries.</p>
            <a href="tel:+91XXXXXXXXXX" className="btn-primary text-sm">
              Call Us Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

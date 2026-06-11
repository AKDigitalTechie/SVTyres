import { motion, useInView } from 'framer-motion';
import { useRef, useEffect } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Navigation } from 'lucide-react';
import {
  PHONE_DISPLAY,
  PHONE_HREF,
  WHATSAPP_HREF,
  EMAIL,
  MAPS_HREF,
  MAPS_APP_SHORT,
  FULL_ADDRESS,
  HOURS_WEEKDAY,
  HOURS_SUNDAY,
} from '../constants';

const contactInfo = [
  { icon: Phone, label: 'Phone', value: PHONE_DISPLAY, href: PHONE_HREF },
  { icon: MessageCircle, label: 'WhatsApp', value: PHONE_DISPLAY, href: WHATSAPP_HREF },
  { icon: Mail, label: 'Email', value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: MapPin, label: 'Address', value: FULL_ADDRESS, href: MAPS_HREF },
  { icon: Clock, label: 'Working Hours', value: `${HOURS_WEEKDAY}\n${HOURS_SUNDAY}`, href: '' },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  // Replace the existing Get Directions link href with the precise maps.app short link
  useEffect(() => {
    try {
      const selector = 'a[aria-label="Get directions to SV Tyres and Services on Google Maps"]';
      const anchors = document.querySelectorAll<HTMLAnchorElement>(selector);
      anchors.forEach((a) => {
        a.href = MAPS_APP_SHORT;
      });
    } catch (e) {
      // no-op in environments without DOM
    }
  }, []);

  useEffect(() => {
    if (!ref.current) return;
    try {
      const container = ref.current as HTMLElement;
      const addressAnchor = container.querySelector('a[aria-label^="Address:"]') as HTMLAnchorElement | null;
      if (addressAnchor) addressAnchor.href = MAPS_APP_SHORT;
      const getDirectionsAnchor = container.querySelector(
        'a[aria-label="Get directions to SV Tyres and Services on Google Maps"]'
      ) as HTMLAnchorElement | null;
      if (getDirectionsAnchor) getDirectionsAnchor.href = MAPS_APP_SHORT;
    } catch (e) {
      // noop
    }
  }, [ref]);

  return (
    <section id="contact" className="section-padding bg-dark-50" aria-labelledby="contact-heading">
      <div className="container-max" ref={ref}>
        <div className="text-center mb-12">
          <motion.span
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block px-3 py-1 bg-primary-50 text-primary-600 text-sm font-semibold rounded-full mb-4"
          >
            Contact Us
          </motion.span>
          <motion.h2
            id="contact-heading"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="section-title"
          >
            Get In Touch
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="section-subtitle mx-auto mt-4"
          >
            Visit us or reach out for any tyre-related queries. We are here to help.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-3">
            {contactInfo.map((item, i) => {
              const Wrapper = item.href ? 'a' : 'div';
              return (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                >
                  <Wrapper
                    href={item.href || undefined}
                    target={item.href && !item.href.startsWith('tel') && !item.href.startsWith('mailto') ? '_blank' : undefined}
                    rel={item.href ? 'noopener noreferrer' : undefined}
                    aria-label={`${item.label}: ${item.value}`}
                    className="flex items-start gap-4 bg-white rounded-2xl p-4 border border-dark-100/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
                  >
                    <div className="w-11 h-11 bg-primary-50 group-hover:bg-primary-500 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 mt-0.5">
                      <item.icon className="w-5 h-5 text-primary-500 group-hover:text-white transition-colors duration-300" aria-hidden="true" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-dark-400 uppercase tracking-wider mb-0.5">{item.label}</div>
                      <div className="text-dark-900 font-medium text-sm leading-relaxed whitespace-pre-line">{item.value}</div>
                    </div>
                  </Wrapper>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative rounded-2xl overflow-hidden shadow-lg border border-dark-100/50 h-full min-h-[360px] group"
          >
            <div className="w-full h-full min-h-[360px]">
              <iframe
                className="w-full h-full min-h-[360px] relative z-0 pointer-events-none md:pointer-events-auto"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5!2d77.5313!3d12.9974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3da64b3c8f7b%3A0x0!2zQmFzYXZlc2h3YXJhIE5hZ2FyLCBCZW5nYWx1cnU!5e0!3m2!1sen!2sin!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: 400 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="SV Tyres and Services Location – Basaveshwara Nagar, Bengaluru"
              />
            </div>
            {/* Mobile-only Get Directions button (replaces iframe on small screens) */}
            <div className="md:hidden absolute inset-0 flex items-center justify-center z-20">
              <a
                href={MAPS_APP_SHORT}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open SV Tyres and Services in Google Maps"
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-base font-semibold px-6 py-3 rounded-full shadow-md transition-all duration-200"
              >
                <Navigation className="w-4 h-4" aria-hidden="true" />
                Get Directions
              </a>
            </div>
            <a
              href={MAPS_HREF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Get directions to SV Tyres and Services on Google Maps"
              className="hidden md:inline-flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-2 bg-primary-500 hover:bg-primary-600 text-white text-sm font-semibold px-5 py-2.5 rounded-full shadow-lg shadow-primary-500/25 transition-all duration-300 hover:scale-105 hover:shadow-xl z-50"
            >
              <Navigation className="w-4 h-4" aria-hidden="true" />
              Get Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

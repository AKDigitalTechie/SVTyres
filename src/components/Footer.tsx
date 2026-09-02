import { Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';
import {
  BUSINESS_NAME,
  SHORT_ADDRESS,
  PHONE_DISPLAY,
  PHONE_HREF,
  EMAIL,
  WHATSAPP_HREF,
  INSTAGRAM_HREF,
  FACEBOOK_HREF,
  MAPS_HREF,
} from '../constants';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Brands', href: '#brands' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const serviceLinks = ['Tyre Replacement', 'Wheel Alignment', 'Wheel Balancing', 'Nitrogen Filling', 'Puncture Repair only for walk-ins'];

const socials = [
  { icon: Instagram, href: INSTAGRAM_HREF, label: 'Instagram @svtyres_' },
  { icon: Facebook, href: FACEBOOK_HREF, label: 'Facebook' },
  { icon: MessageCircle, href: WHATSAPP_HREF, label: 'WhatsApp' },
  { icon: MapPin, href: MAPS_HREF, label: 'Google Maps' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white" role="contentinfo">
      <div className="container-max section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-primary-500/40 flex-shrink-0">
                <img src="/updatedLogo.png" alt="SV Tyres logo" className="w-full h-full object-cover object-top scale-110" />
              </div>
              <div>
                <div className="text-base font-extrabold tracking-tight leading-tight">SV Tyres</div>
                <div className="text-[9px] font-semibold text-primary-400 tracking-widest uppercase">&amp; Services</div>
              </div>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Your trusted tyre shop in Basaveshwara Nagar, Bangalore. Quality tyres, expert service, and competitive prices.
            </p>
            <div className="flex items-start gap-2 text-white/50 text-sm">
              <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <span>{SHORT_ADDRESS}</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Quick Links</h3>
            <ul className="space-y-2.5" role="list">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/50 hover:text-primary-400 text-sm transition-colors duration-200 focus:outline-none focus-visible:text-primary-400">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Services</h3>
            <ul className="space-y-2.5" role="list">
              {serviceLinks.map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/50 hover:text-primary-400 text-sm transition-colors duration-200 focus:outline-none focus-visible:text-primary-400">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Connect</h3>
            <div className="flex gap-3 mb-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 bg-white/5 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
                >
                  <s.icon className="w-4 h-4" aria-hidden="true" />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-white/50 text-sm">
              <a href={PHONE_HREF} className="block hover:text-primary-400 transition-colors focus:outline-none focus-visible:text-primary-400">{PHONE_DISPLAY}</a>
              <a href={`mailto:${EMAIL}`} className="block hover:text-primary-400 transition-colors focus:outline-none focus-visible:text-primary-400">{EMAIL}</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} {BUSINESS_NAME}. All rights reserved.</p>
          <p className="text-white/30 text-xs">Basaveshwara Nagar, Bengaluru – 560044</p>
        </div>
      </div>
    </footer>
  );
}

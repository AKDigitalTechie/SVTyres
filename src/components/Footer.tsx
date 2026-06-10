import { Instagram, Facebook, MessageCircle, MapPin } from 'lucide-react';

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Brands', href: '#brands' },
  { label: 'Services', href: '#services' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

const socials = [
  { icon: Instagram, href: 'https://instagram.com/svtyres', label: 'Instagram' },
  { icon: Facebook, href: 'https://facebook.com/svtyres', label: 'Facebook' },
  { icon: MessageCircle, href: 'https://wa.me/91XXXXXXXXXX', label: 'WhatsApp' },
  { icon: MapPin, href: 'https://maps.google.com/?q=Rajajinagar+Bangalore', label: 'Google Maps' },
];

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="container-max section-padding pb-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">SV</span>
              </div>
              <span className="text-xl font-bold tracking-tight">SV Tyres</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              Your trusted tyre shop in Rajajinagar, Bangalore. Quality tyres, expert service, and competitive prices since day one.
            </p>
            <div className="flex items-center gap-2 text-white/50 text-sm">
              <MapPin className="w-4 h-4" />
              <span>Rajajinagar, Bangalore</span>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Quick Links</h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-white/50 hover:text-primary-400 text-sm transition-colors duration-200">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Services</h3>
            <ul className="space-y-2.5">
              {['Tyre Replacement', 'Wheel Alignment', 'Wheel Balancing', 'Nitrogen Filling', 'Puncture Repair', 'Alloy Wheels'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-white/50 hover:text-primary-400 text-sm transition-colors duration-200">
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4 text-white/80">Follow Us</h3>
            <div className="flex gap-3 mb-6">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 bg-white/5 hover:bg-primary-500 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="space-y-2 text-white/50 text-sm">
              <a href="tel:+91XXXXXXXXXX" className="block hover:text-primary-400 transition-colors">+91 XXXXXXXXXX</a>
              <a href="mailto:contact@svtyresbangalore.com" className="block hover:text-primary-400 transition-colors">contact@svtyresbangalore.com</a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/30 text-xs">&copy; {new Date().getFullYear()} SV Tyres, Rajajinagar, Bangalore. All rights reserved.</p>
          <p className="text-white/30 text-xs">Designed for quality tyre services in Bangalore.</p>
        </div>
      </div>
    </footer>
  );
}

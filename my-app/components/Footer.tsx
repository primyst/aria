'use client';
import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="animate-fade-in-left">
            <h3 className="text-2xl font-bold text-blue-400 mb-4 font-serif animate-slide-down">
              Nexus
            </h3>
            <p className="text-slate-300 text-sm leading-relaxed animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Enterprise transformation partner for Fortune 500 companies and leading mid-market enterprises.
            </p>
          </div>

          {/* Navigation */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h4 className="text-blue-400 font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Work', 'Team', 'Contact'].map((item, idx) => (
                <li key={item} className="animate-fade-in-up" style={{ animationDelay: `${0.15 + idx * 0.05}s` }}>
                  <Link
                    href={`/${item === 'Home' ? '' : item.toLowerCase()}`}
                    className="text-slate-300 hover:text-blue-400 transition-colors duration-300 text-sm font-medium hover:translate-x-1 transform"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="text-blue-400 font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors duration-300 group">
                <Mail size={16} className="group-hover:scale-110 transition-transform" />
                <a href="mailto:hello@nexuscorporate.com" className="font-medium hover:underline">
                  hello@nexuscorporate.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-slate-300 hover:text-blue-400 transition-colors duration-300 group">
                <Phone size={16} className="group-hover:scale-110 transition-transform" />
                <a href="tel:+12125550147" className="font-medium hover:underline">
                  +1 (212) 555-0147
                </a>
              </li>
              <li className="flex items-start gap-2 text-slate-300 group">
                <MapPin size={16} className="mt-0.5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">
                  450 Park Avenue<br />
                  New York, NY 10022<br />
                  USA
                </span>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="animate-fade-in-right" style={{ animationDelay: '0.3s' }}>
            <h4 className="text-blue-400 font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="text-slate-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="#" 
                className="text-slate-300 hover:text-blue-400 transition-all duration-300 transform hover:scale-125 hover:-translate-y-1"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-700 pt-8 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <p className="text-center text-slate-400 text-sm font-medium">
            © {currentYear} Nexus Corporate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

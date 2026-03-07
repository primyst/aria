'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-md px-6 py-4 flex items-center justify-between border-b border-slate-200 shadow-sm animate-slide-down">
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-blue-600 font-serif hover:text-blue-700 transition-colors duration-300 transform hover:scale-105">
        Nexus
      </Link>

      {/* Desktop links */}
      <div className="hidden md:flex gap-8 text-slate-700">
        {['Home', 'About', 'Services', 'Work', 'Team', 'Contact'].map((item, idx) => (
          <Link 
            key={item}
            href={`/${item === 'Home' ? '' : item.toLowerCase()}`} 
            className="hover:text-blue-600 transition-colors duration-300 font-medium relative group animate-fade-in-up"
            style={{ animationDelay: `${0.05 * idx}s` }}
          >
            {item}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300" />
          </Link>
        ))}
      </div>

      {/* CTA Button */}
      <Link href="/contact" className="hidden md:block animate-fade-in-right">
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105 active:scale-95">
          Get Started
        </button>
      </Link>

      {/* Mobile Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-blue-600 transform transition-transform duration-300 hover:scale-110"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white flex flex-col items-center gap-4 py-6 md:hidden text-slate-700 border-b border-slate-200 animate-slide-down">
          {['Home', 'About', 'Services', 'Work', 'Team', 'Contact'].map((item, idx) => (
            <Link 
              key={item}
              href={`/${item === 'Home' ? '' : item.toLowerCase()}`} 
              onClick={() => setIsOpen(false)} 
              className="hover:text-blue-600 transition-colors font-medium animate-fade-in-up"
              style={{ animationDelay: `${0.05 * idx}s` }}
            >
              {item}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)}>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-all w-full transform hover:scale-105 active:scale-95">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}

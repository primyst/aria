'use client';
import { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.name.trim()) {
      setError('Name is required');
      setLoading(false);
      return;
    }

    if (!formData.email.trim()) {
      setError('Email is required');
      setLoading(false);
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email');
      setLoading(false);
      return;
    }

    if (!formData.message.trim()) {
      setError('Message is required');
      setLoading(false);
      return;
    }

    if (formData.message.trim().length < 10) {
      setError('Message must be at least 10 characters');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      console.error('Error:', err);
      setError('Failed to send message. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-20 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif animate-slide-down">
            Get in Touch
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Have a project or question? Reach out and we'll get back to you promptly.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-left">
            <ContactCard icon={<Mail size={24} />} title="Email" content="hello@nexuscorporate.com" href="mailto:hello@nexuscorporate.com" delay={0} />
            <ContactCard icon={<Phone size={24} />} title="Phone" content="+1 (212) 555-0147" href="tel:+12125550147" delay={0.1} />
            <ContactCard icon={<MapPin size={24} />} title="Address" content="450 Park Avenue, New York, NY 10022, USA" delay={0.2} />
            <ContactCard icon={<Clock size={24} />} title="Office Hours" content="Monday - Friday, 9:00 AM - 6:00 PM EST" delay={0.3} />
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 border border-slate-200 space-y-6 shadow-md hover:shadow-lg transition-all duration-300">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Name <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder:text-slate-500"
                  />
                </div>
                <div className="animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                  <label className="block text-sm font-semibold text-slate-900 mb-2">
                    Email <span className="text-blue-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder:text-slate-500"
                  />
                </div>
              </div>

              {/* Company */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Your Company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder:text-slate-500"
                />
              </div>

              {/* Message */}
              <div className="animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
                <label className="block text-sm font-semibold text-slate-900 mb-2">
                  Message <span className="text-blue-600">*</span>
                </label>
                <textarea
                  name="message"
                  placeholder="Tell us about your project or question..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-slate-50 focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder:text-slate-500 resize-none"
                />
                <p className="text-xs text-slate-600 mt-1">
                  {formData.message.length} characters (minimum 10)
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div className="bg-red-50 border border-red-300 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2 animate-shake">
                  <AlertCircle size={18} />
                  {error}
                </div>
              )}

              {/* Success Message */}
              {submitted && (
                <div className="bg-emerald-50 border border-emerald-300 text-emerald-700 px-4 py-3 rounded-lg text-sm font-medium flex items-center gap-2 animate-pulse">
                  <CheckCircle size={18} />
                  Thank you! We'll respond within 24 hours.
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || submitted}
                className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg animate-fade-in-up"
                style={{ animationDelay: '0.3s' }}
              >
                <Send size={18} />
                {loading ? 'Sending...' : submitted ? 'Message Sent!' : 'Send Message'}
              </button>

              {/* Privacy Note */}
              <p className="text-xs text-slate-600 text-center">
                We respect your privacy. Your information will only be used to respond to your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({ icon, title, content, href, delay }: { icon: React.ReactNode; title: string; content: string; href?: string; delay: number }) {
  return (
    <div 
      className="bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="flex items-start gap-4">
        <div className="bg-blue-100 p-3 rounded-lg flex-shrink-0">
          <div className="text-blue-600">{icon}</div>
        </div>
        <div>
          <h4 className="font-bold text-slate-900 mb-2">{title}</h4>
          {href ? (
            <a href={href} className="text-blue-600 hover:text-blue-700 transition-colors text-sm break-all font-medium">
              {content}
            </a>
          ) : (
            <p className="text-slate-700 text-sm leading-relaxed">{content}</p>
          )}
        </div>
      </div>
    </div>
  );
}

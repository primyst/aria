'use client';
import { useState } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, CheckCircle, AlertCircle, Clock } from 'lucide-react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    service: '',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', company: '', service: '', budget: '', message: '' });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setError(data.error || 'An error occurred. Please try again.');
      }
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Network error. Please check your connection and try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-slate-50 border-b border-slate-200 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-serif animate-slide-down">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Let's discuss how we can transform your enterprise
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Contact Info */}
            <div className="md:col-span-1 space-y-8 animate-fade-in-left">
              <ContactCard icon={<Mail size={24} />} title="Email" content="hello@nexuscorporate.com" href="mailto:hello@nexuscorporate.com" delay={0} />
              <ContactCard icon={<Phone size={24} />} title="Phone" content="+1 (212) 555-0147" href="tel:+12125550147" delay={0.1} />
              <ContactCard icon={<MapPin size={24} />} title="Office" content="450 Park Avenue, New York, NY 10022, USA" delay={0.2} />
              <ContactCard icon={<Clock size={24} />} title="Hours" content="Monday - Friday, 9:00 AM - 6:00 PM EST" delay={0.3} />
            </div>

            {/* Contact Form */}
            <div className="md:col-span-2 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
              {submitted ? (
                <div className="bg-emerald-50 border-2 border-emerald-300 rounded-lg p-8 text-center animate-fade-in">
                  <CheckCircle className="text-emerald-600 mx-auto mb-4" size={48} />
                  <h3 className="text-2xl font-bold text-emerald-900 mb-2">Thank You!</h3>
                  <p className="text-emerald-700 mb-4">
                    We've received your inquiry and will get back to you within 24 hours.
                  </p>
                  <p className="text-sm text-emerald-600">
                    Check your email for confirmation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="bg-red-50 border-2 border-red-300 rounded-lg p-4 flex items-start gap-3 animate-shake">
                      <AlertCircle className="text-red-600 flex-shrink-0 mt-0.5" size={20} />
                      <div>
                        <p className="text-red-900 font-semibold">Error</p>
                        <p className="text-red-700 text-sm">{error}</p>
                      </div>
                    </div>
                  )}

                  <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        minLength={2}
                        maxLength={100}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder:text-slate-500"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder:text-slate-500"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Company *
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        minLength={2}
                        maxLength={100}
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder:text-slate-500"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-slate-900 mb-2">
                        Service of Interest *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900"
                      >
                        <option value="">Select a service</option>
                        <option value="supply-chain">Supply Chain Optimization</option>
                        <option value="finance">Financial Operations</option>
                        <option value="operations">Operational Excellence</option>
                        <option value="digital">Digital Transformation</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Estimated Budget Range
                    </label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900"
                    >
                      <option value="">Select budget range (optional)</option>
                      <option value="250k-500k">$250K - $500K</option>
                      <option value="500k-1m">$500K - $1M</option>
                      <option value="1m-2m">$1M - $2M</option>
                      <option value="2m+">$2M+</option>
                    </select>
                  </div>

                  <div className="animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
                    <label className="block text-sm font-semibold text-slate-900 mb-2">
                      Tell us about your project *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      minLength={10}
                      maxLength={5000}
                      rows={6}
                      className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-200 transition-all text-slate-900 placeholder:text-slate-500 resize-none"
                      placeholder="Describe your business challenge and goals..."
                    />
                    <p className="text-xs text-slate-600 mt-1">
                      {formData.message.length}/5000 characters
                    </p>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg animate-fade-in-up"
                    style={{ animationDelay: '0.3s' }}
                  >
                    <Send size={18} />
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </span>
                    ) : (
                      'Send Inquiry'
                    )}
                  </button>

                  <p className="text-xs text-slate-600 text-center">
                    We respect your privacy. Your information is confidential and will only be used to respond to your inquiry.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-serif animate-slide-down">
            Frequently Asked Questions
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                q: 'What is your typical engagement timeline?',
                a: 'Most engagements range from 3-12 months depending on scope and complexity. We discuss timeline during the initial consultation.',
              },
              {
                q: 'How do you structure your fees?',
                a: 'We typically work on a project basis with fixed fees or time-and-materials arrangements. Pricing depends on scope and complexity.',
              },
              {
                q: 'Do you provide ongoing support after project completion?',
                a: 'Yes, we offer post-implementation support and optimization services to ensure sustainable results.',
              },
              {
                q: 'What industries do you specialize in?',
                a: 'We have deep expertise in manufacturing, finance, healthcare, and logistics. We also work across other industries.',
              },
              {
                q: 'How quickly will you respond to my inquiry?',
                a: 'We typically respond to all inquiries within 24 hours during business days.',
              },
              {
                q: 'Can you work with our existing systems?',
                a: 'Yes, we specialize in integrating with existing systems and infrastructure. We assess compatibility during the initial consultation.',
              },
            ].map((item, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg p-6 border border-slate-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <h3 className="text-lg font-bold text-slate-900 mb-3">{item.q}</h3>
                <p className="text-slate-700">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Fill out the form above and let's schedule a consultation
          </p>
        </div>
      </section>
    </main>
  );
}

function ContactCard({ icon, title, content, href, delay }: { icon: React.ReactNode; title: string; content: string; href?: string; delay: number }) {
  return (
    <div 
      className="bg-slate-50 rounded-lg p-6 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
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

'use client';
import { Users, Award, Briefcase, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export default function About() {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif animate-slide-down">
            About Nexus Corporate
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Transforming businesses since 2015 through strategic consulting and digital innovation
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* Left - Text */}
          <div className="space-y-6 animate-fade-in-left">
            <p className="text-lg text-slate-700 leading-relaxed">
              Nexus Corporate is a trusted partner for organizations looking to optimize operations, enhance strategic initiatives, and achieve measurable results. Our team combines deep industry knowledge with hands-on experience to deliver solutions that work in the real world.
            </p>

            <p className="text-lg text-slate-700 leading-relaxed">
              Founded with a mission to help businesses operate smarter, we emphasize transparency, efficiency, and long-term impact in every engagement. Our multi-disciplinary team ensures clients receive insights and solutions tailored to their unique challenges.
            </p>

            <Link href="/about">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-md hover:shadow-lg">
                Learn More About Us
              </button>
            </Link>
          </div>

          {/* Right - Stats */}
          <div className="grid grid-cols-2 gap-6 animate-fade-in-right" style={{ animationDelay: '0.2s' }}>
            <StatBox icon={<Users size={24} />} value="50+" label="Clients Served" delay={0} />
            <StatBox icon={<Award size={24} />} value="10+" label="Awards Won" delay={0.1} />
            <StatBox icon={<Briefcase size={24} />} value="120+" label="Projects Delivered" delay={0.2} />
            <StatBox icon={<TrendingUp size={24} />} value="15+" label="Industries Served" delay={0.3} />
          </div>
        </div>
      </div>
    </section>
  );
}

function StatBox({ icon, value, label, delay }: { icon: React.ReactNode; value: string; label: string; delay: number }) {
  return (
    <div 
      className="bg-slate-50 rounded-xl p-6 border border-slate-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 hover:shadow-lg animate-scale-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-blue-600 mb-3 flex justify-center">{icon}</div>
      <div className="text-3xl font-bold text-slate-900 mb-1 font-serif">{value}</div>
      <div className="text-sm text-slate-600">{label}</div>
    </div>
  );
}

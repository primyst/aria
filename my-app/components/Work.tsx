'use client';
import { CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface WorkItem {
  title: string;
  client: string;
  industry: string;
  description: string;
  results: string[];
}

const workItems: WorkItem[] = [
  {
    title: 'GlobalBank Digital Transformation',
    client: 'GlobalBank Solutions',
    industry: 'Financial Services',
    description:
      'Cloud migration, process automation, and comprehensive staff training for legacy system modernization.',
    results: [
      'Onboarding time: 30 days → 3 days',
      'Operational costs reduced by 50%',
      'System uptime: 99.9%',
      'Customer satisfaction: +45%',
    ],
  },
  {
    title: 'CloudSync Strategic Restructuring',
    client: 'CloudSync Technologies',
    industry: 'Technology/SaaS',
    description:
      'Organizational restructuring, process mapping, and leadership coaching for rapid growth scaling.',
    results: [
      'Productivity: +35%',
      'Employee satisfaction: +52%',
      'Time-to-market: -40%',
      'Scaled from 50 to 150 employees',
    ],
  },
  {
    title: 'HealthFirst ERP Implementation',
    client: 'HealthFirst Systems',
    industry: 'Healthcare',
    description:
      'Enterprise ERP implementation, data consolidation, and compliance framework establishment.',
    results: [
      '100% data integration across systems',
      'Achieved SOC 2 compliance',
      'Patient data accessibility: +30%',
      'Annual cost savings: $2M',
    ],
  },
];

export default function Work() {
  return (
    <section className="py-20 px-6 md:px-12 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4 font-serif animate-slide-down">
            Featured Work
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Proven results across industries. See how we've transformed businesses like yours.
          </p>
        </div>

        {/* Work Items */}
        <div className="space-y-12">
          {workItems.map((item, idx) => (
            <div
              key={item.title}
              className="bg-white rounded-xl p-8 md:p-12 shadow-md hover:shadow-lg transition-all duration-300 border border-slate-200 hover:border-blue-400 transform hover:scale-105 animate-fade-in-up"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              <div className="grid md:grid-cols-2 gap-8">
                {/* Left - Info */}
                <div>
                  <div className="mb-4 flex flex-wrap gap-2">
                    <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                      {item.industry}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 mb-4">
                    <strong className="text-slate-900">Client:</strong> {item.client}
                  </p>

                  <p className="text-slate-700 mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  <Link href="/work">
                    <button className="text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 flex items-center gap-2 group">
                      Read Full Case Study
                      <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </Link>
                </div>

                {/* Right - Results */}
                <div>
                  <h4 className="text-lg font-bold text-slate-900 mb-4 font-serif">Results</h4>
                  <ul className="space-y-3">
                    {item.results.map((result) => (
                      <li key={result} className="flex items-start gap-3">
                        <CheckCircle size={20} className="text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-slate-700">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link href="/work">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
              View All Work
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}

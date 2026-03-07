'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle } from 'lucide-react';

interface WorkItem {
  slug: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  results: string[];
  image: string;
}

const workItems: WorkItem[] = [
  {
    slug: 'global-manufacturing-supply-chain',
    title: 'Supply Chain Transformation',
    client: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    description:
      'Comprehensive supply chain redesign reducing inventory by 35% and saving $45M annually through demand-driven planning, vendor consolidation, and network optimization.',
    results: [
      'Inventory reduction: 35%',
      'Cost savings: $45M annually',
      'On-time delivery: 98%',
      'Forecast accuracy: 96%',
    ],
    image: '/case-study-1-hero.jpg',
  },
  {
    slug: 'fortune-500-finance-transformation',
    title: 'Finance Shared Services Center',
    client: 'Fortune 500 Financial Services',
    industry: 'Finance',
    description:
      'Established centralized shared services center with RPA implementation, reducing finance operations costs by 38% and processing time by 60%.',
    results: [
      'Cost reduction: 38%',
      'Processing time: 60% faster',
      'FTE optimization: 200 roles',
      'Error rate: 99.2% accuracy',
    ],
    image: '/case-study-2-hero.jpg',
  },
  {
    slug: 'healthcare-operational-excellence',
    title: 'Operational Excellence Program',
    client: 'Healthcare Provider Network',
    industry: 'Healthcare',
    description:
      'Enterprise-wide Lean Six Sigma program across 50+ facilities, reducing operating costs by 22% while improving patient satisfaction by 28%.',
    results: [
      'Operating cost reduction: 22%',
      'Patient satisfaction: +28%',
      'Staff efficiency: +35%',
      'Quality metrics: Top quartile',
    ],
    image: '/case-study-3-hero.jpg',
  },
  {
    slug: 'industrial-erp-transformation',
    title: 'Digital ERP Implementation',
    client: 'Industrial Equipment Manufacturer',
    industry: 'Manufacturing',
    description:
      'Cloud-based ERP implementation integrating 8 plants into unified system, achieving 100% system integration and 99.8% data accuracy.',
    results: [
      'System integration: 100%',
      'Data accuracy: 99.8%',
      'Reporting speed: 80% faster',
      'ROI achieved: 14 months',
    ],
    image: '/case-study-4-hero.jpg',
  },
];

export default function WorkPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-slate-50 border-b border-slate-200 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-serif animate-slide-down">
              Our Work
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Proven results across industries. See how we've transformed businesses like yours.
            </p>
          </div>
        </div>
      </section>

      {/* Work Items */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-12">
            {workItems.map((item, idx) => (
              <WorkCard key={item.slug} item={item} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-serif animate-slide-down">
            Our Track Record
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            <StatCard value="150+" label="Enterprise Clients" delay={0} />
            <StatCard value="$8.2B" label="Value Delivered" delay={0.1} />
            <StatCard value="97%" label="Success Rate" delay={0.2} />
            <StatCard value="80+" label="Senior Consultants" delay={0.3} />
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-serif animate-slide-down">
            Industries We Serve
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'Manufacturing', count: '45+' },
              { title: 'Financial Services', count: '38+' },
              { title: 'Healthcare', count: '32+' },
              { title: 'Logistics', count: '35+' },
            ].map((industry, idx) => (
              <div
                key={idx}
                className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 text-center animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">
                  {industry.count}
                </h3>
                <p className="text-slate-600 font-semibold">{industry.title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-serif animate-slide-down">
            What We Deliver
          </h2>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: 'Strategic Consulting',
                description: 'Enterprise strategy development and transformation roadmaps aligned with business objectives.',
              },
              {
                title: 'Operational Excellence',
                description: 'Lean Six Sigma and process improvement programs driving sustainable efficiency gains.',
              },
              {
                title: 'Digital Transformation',
                description: 'ERP, cloud, and automation initiatives enabling modern enterprise operations.',
              },
              {
                title: 'Change Management',
                description: 'Comprehensive change programs ensuring successful adoption and sustainable results.',
              },
              {
                title: 'Supply Chain Optimization',
                description: 'End-to-end supply chain redesign reducing costs while improving service levels.',
              },
              {
                title: 'Finance Transformation',
                description: 'Finance operations redesign including shared services and RPA implementation.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 border border-slate-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.05}s` }}
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                  {item.title}
                </h3>
                <p className="text-slate-700 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-serif animate-slide-down">
            Our Approach
          </h2>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                step: '1',
                title: 'Assess',
                description: 'Deep-dive analysis of current state, opportunities, and business impact potential.',
              },
              {
                step: '2',
                title: 'Design',
                description: 'Develop detailed transformation roadmap with clear milestones and KPIs.',
              },
              {
                step: '3',
                title: 'Execute',
                description: 'Implement changes with comprehensive change management and training.',
              },
              {
                step: '4',
                title: 'Sustain',
                description: 'Establish governance and continuous improvement to ensure lasting results.',
              },
            ].map((phase, idx) => (
              <div
                key={idx}
                className="relative animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-blue-400 transition-all duration-300 transform hover:scale-105 h-full">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg mb-4 transform group-hover:scale-110 transition-transform">
                    {phase.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3 font-serif">
                    {phase.title}
                  </h3>
                  <p className="text-slate-700 leading-relaxed">{phase.description}</p>
                </div>

                {idx < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-blue-200 transform -translate-y-1/2" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Testimonials */}
      <section className="py-20 px-6 md:px-12 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 mb-12 text-center font-serif animate-slide-down">
            What Our Clients Say
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                quote:
                  'Nexus transformed our supply chain from a cost center into a competitive advantage. The results exceeded our expectations.',
                author: 'John Smith',
                title: 'VP Operations',
                company: 'Global Manufacturing Corp',
              },
              {
                quote:
                  'The shared services transformation delivered exceptional results. Beyond the cost savings, we gained agility and scalability.',
                author: 'Sarah Johnson',
                title: 'CFO',
                company: 'Fortune 500 Financial Services',
              },
              {
                quote:
                  'Nexus helped us create a culture of continuous improvement. We are now a model for operational excellence in healthcare.',
                author: 'Dr. Michael Chen',
                title: 'Chief Operating Officer',
                company: 'Healthcare Provider Network',
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-8 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-4xl text-blue-400 mb-4">"</div>
                <p className="text-slate-700 mb-6 leading-relaxed italic">
                  {testimonial.quote}
                </p>
                <div className="pt-4 border-t border-slate-200">
                  <p className="font-semibold text-slate-900">{testimonial.author}</p>
                  <p className="text-sm text-slate-600">{testimonial.title}</p>
                  <p className="text-sm text-slate-600">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can deliver measurable results for your organization
          </p>
          <Link href="/contact">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 inline-flex items-center gap-2">
              Schedule Consultation
              <ArrowRight size={18} />
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

function WorkCard({ item, index }: { item: WorkItem; index: number }) {
  return (
    <div
      className="bg-slate-50 rounded-xl p-8 md:p-12 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="grid md:grid-cols-2 gap-8">
        {/* Left - Info */}
        <div className="order-2 md:order-1">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
              {item.industry}
            </span>
          </div>

          <h3 className="text-2xl font-bold text-slate-900 mb-2 font-serif">
            {item.title}
          </h3>

          <p className="text-slate-600 mb-4 font-medium">
            <strong>Client:</strong> {item.client}
          </p>

          <p className="text-slate-700 mb-6 leading-relaxed">
            {item.description}
          </p>

          <Link href={`/work/${item.slug}`}>
            <button className="text-blue-600 font-semibold hover:text-blue-700 transition-all duration-300 flex items-center gap-2 group">
              Read Full Case Study
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </Link>
        </div>

        {/* Right - Results & Image */}
        <div className="order-1 md:order-2 space-y-6">
          {/* Image */}
          <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
            <Image
              src={item.image}
              alt={item.title}
              fill
              className="object-cover hover:scale-110 transition-transform duration-500"
              quality={85}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
          </div>

          {/* Results */}
          <div>
            <h4 className="font-bold text-slate-900 mb-3">Key Results</h4>
            <ul className="space-y-2">
              {item.results.map((result, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle size={18} className="text-blue-600 mt-0.5 flex-shrink-0" />
                  <span className="text-slate-700 text-sm">{result}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <div
      className="bg-white rounded-lg p-8 border border-slate-200 hover:border-blue-400 transition-all duration-300 text-center transform hover:scale-105 hover:shadow-lg animate-scale-in"
      style={{ animationDelay: `${delay}s` }}
    >
      <div className="text-4xl font-bold text-blue-600 mb-2 font-serif">{value}</div>
      <div className="text-slate-600 font-semibold">{label}</div>
    </div>
  );
}

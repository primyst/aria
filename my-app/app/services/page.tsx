'use client';
import { Zap, BarChart3, Truck, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ServiceDetail {
  id: number;
  title: string;
  icon: React.ReactNode;
  description: string;
  overview: string;
  benefits: string[];
  approach: string[];
  deliverables: string[];
  industries: string[];
  caseStudies: string[];
}

const services: ServiceDetail[] = [
  {
    id: 1,
    title: 'Supply Chain Optimization',
    icon: <Truck className="h-12 w-12" />,
    description: 'End-to-end supply chain redesign and optimization for cost reduction and efficiency.',
    overview:
      'We transform complex, fragmented supply chains into lean, responsive networks. Our approach combines demand planning, vendor optimization, and logistics network design to reduce costs while improving service levels.',
    benefits: [
      'Inventory reduction of 25-40%',
      'Logistics cost savings of 15-25%',
      'Improved on-time delivery to 95%+',
      'Enhanced supply chain visibility',
      'Reduced supply chain risk',
    ],
    approach: [
      'Supply chain network analysis and modeling',
      'Demand forecasting and planning optimization',
      'Vendor consolidation and management',
      'Logistics network redesign',
      'Technology implementation and change management',
    ],
    deliverables: [
      'Supply chain strategy roadmap',
      'Network optimization model',
      'Vendor management framework',
      'Implementation plan with KPIs',
      'Change management and training program',
    ],
    industries: ['Manufacturing', 'Retail', 'Healthcare', 'Logistics'],
    caseStudies: ['global-manufacturing-supply-chain'],
  },
  {
    id: 2,
    title: 'Financial Operations',
    icon: <DollarSign className="h-12 w-12" />,
    description: 'Transform finance functions through process automation and cost optimization.',
    overview:
      'We redesign finance operations to reduce costs, improve accuracy, and enable strategic focus. From shared services centers to RPA implementation, we modernize finance functions for the digital age.',
    benefits: [
      'Cost reduction of 30-40%',
      'Processing time reduction of 50-70%',
      'Error rate reduction to <1%',
      'Improved compliance and controls',
      'Enhanced financial visibility',
    ],
    approach: [
      'Finance process mapping and analysis',
      'Shared services center design',
      'RPA and automation opportunity identification',
      'Technology selection and implementation',
      'Governance and performance management setup',
    ],
    deliverables: [
      'Finance operating model design',
      'Shared services roadmap',
      'RPA business case and implementation plan',
      'Process documentation and training materials',
      'Performance dashboard and KPI framework',
    ],
    industries: ['Financial Services', 'Manufacturing', 'Healthcare', 'Retail'],
    caseStudies: ['fortune-500-finance-transformation'],
  },
  {
    id: 3,
    title: 'Operational Excellence',
    icon: <BarChart3 className="h-12 w-12" />,
    description: 'Lean and Six Sigma methodologies to drive operational efficiency and quality.',
    overview:
      'We embed continuous improvement culture across your organization. Using Lean and Six Sigma methodologies, we identify and eliminate waste, reduce variation, and drive sustainable operational improvements.',
    benefits: [
      'Operating cost reduction of 15-25%',
      'Quality improvement of 20-30%',
      'Productivity improvement of 25-35%',
      'Employee engagement improvement',
      'Sustainable improvement culture',
    ],
    approach: [
      'Current state assessment and baseline establishment',
      'Lean Six Sigma training program',
      'Project identification and prioritization',
      'Pilot project execution',
      'Scale and sustain improvements',
    ],
    deliverables: [
      'Baseline performance assessment',
      'Lean Six Sigma training curriculum',
      'Project charters and execution plans',
      'Process improvement documentation',
      'Sustainability and governance framework',
    ],
    industries: ['Manufacturing', 'Healthcare', 'Logistics', 'Financial Services'],
    caseStudies: ['healthcare-operational-excellence'],
  },
  {
    id: 4,
    title: 'Digital Transformation',
    icon: <Zap className="h-12 w-12" />,
    description: 'Enterprise-wide digital initiatives including ERP, cloud, and automation.',
    overview:
      'We guide enterprises through comprehensive digital transformations. From ERP implementations to cloud migrations and business process automation, we ensure successful adoption and measurable business impact.',
    benefits: [
      'Real-time operational visibility',
      'Improved decision-making capability',
      'Enhanced scalability and agility',
      'Reduced IT costs and complexity',
      'Improved customer experience',
    ],
    approach: [
      'Digital strategy and roadmap development',
      'Technology selection and evaluation',
      'System design and configuration',
      'Data migration and integration',
      'Change management and training',
    ],
    deliverables: [
      'Digital transformation strategy',
      'Technology roadmap',
      'System design documentation',
      'Implementation and deployment plan',
      'Training and change management program',
    ],
    industries: ['Manufacturing', 'Financial Services', 'Healthcare', 'Retail'],
    caseStudies: ['industrial-erp-transformation'],
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 md:px-12 bg-slate-50 border-b border-slate-200 animate-fade-in">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6 font-serif animate-slide-down">
              Our Services
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Comprehensive enterprise solutions tailored to your business challenges
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={service.id}
                className="bg-slate-50 rounded-lg p-8 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="text-blue-600 mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-slate-900 mb-3 font-serif">
                  {service.title}
                </h3>
                <p className="text-slate-700 mb-6 leading-relaxed">
                  {service.description}
                </p>

                <div className="mb-6">
                  <p className="text-sm font-semibold text-slate-600 mb-3">Industries</p>
                  <div className="flex flex-wrap gap-2">
                    {service.industries.map((industry) => (
                      <span
                        key={industry}
                        className="bg-white text-slate-700 text-xs px-3 py-1 rounded-full border border-slate-200"
                      >
                        {industry}
                      </span>
                    ))}
                  </div>
                </div>

                <Link href={`/work/${service.caseStudies[0]}`}>
                  <div className="text-blue-600 font-semibold group hover:translate-x-2 transition-transform duration-300 cursor-pointer flex items-center gap-2">
                    View Case Study
                    <ArrowRight size={16} />
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Detailed Service Sections */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          className={`py-20 px-6 md:px-12 ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50'}`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className={idx % 2 === 1 ? 'md:order-2' : ''}>
                <h2 className="text-4xl font-bold text-slate-900 mb-6 font-serif animate-slide-down">
                  {service.title}
                </h2>
                <p className="text-lg text-slate-700 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                  {service.overview}
                </p>

                <h3 className="text-xl font-bold text-slate-900 mb-4 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>Benefits</h3>
                <ul className="space-y-3 mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                  {service.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="text-blue-600 flex-shrink-0 mt-1" size={20} />
                      <span className="text-slate-700">{benefit}</span>
                    </li>
                  ))}
                </ul>

                <Link href="/contact">
                  <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
                    Learn More
                  </button>
                </Link>
              </div>

              <div className={`${idx % 2 === 1 ? 'md:order-1' : ''} animate-fade-in-right`} style={{ animationDelay: '0.1s' }}>
                <div className="bg-white rounded-lg p-8 border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <h3 className="text-xl font-bold text-slate-900 mb-6 font-serif">
                    Our Approach
                  </h3>
                  <div className="space-y-4 mb-8">
                    {service.approach.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${0.1 + i * 0.05}s` }}>
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                          {i + 1}
                        </div>
                        <p className="text-slate-700 pt-1">{item}</p>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-4 font-serif">
                    Deliverables
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((deliverable, i) => (
                      <li key={i} className="flex items-start gap-2 text-slate-700 animate-fade-in-up" style={{ animationDelay: `${0.2 + i * 0.03}s` }}>
                        <span className="text-blue-600 mt-1">✓</span>
                        {deliverable}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-20 px-6 md:px-12 bg-slate-900">
        <div className="max-w-7xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-4xl font-bold text-white mb-6 font-serif">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Let's discuss which service is right for your enterprise
          </p>
          <Link href="/contact">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
              Schedule Consultation
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
}

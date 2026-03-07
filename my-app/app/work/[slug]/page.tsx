'use client';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle, TrendingUp, Calendar, Users } from 'lucide-react';

interface CaseStudyDetail {
  slug: string;
  title: string;
  client: string;
  industry: string;
  image: string;
  duration: string;
  teamSize: string;
  challenge: string;
  challengeDetails: string[];
  solution: string;
  solutionDetails: string[];
  results: {
    metric: string;
    value: string;
    description: string;
  }[];
  process: {
    phase: string;
    duration: string;
    description: string;
  }[];
  testimonial: {
    quote: string;
    author: string;
    title: string;
    company: string;
  };
}

const caseStudies: Record<string, CaseStudyDetail> = {
  'global-manufacturing-supply-chain': {
    slug: 'global-manufacturing-supply-chain',
    title: 'Supply Chain Transformation',
    client: 'Global Manufacturing Corp',
    industry: 'Manufacturing',
    image: '/case-study-1-hero.jpg',
    duration: '8 months',
    teamSize: '15 consultants',
    challenge:
      'Global manufacturing company with operations across 12 countries faced a critical supply chain challenge. With 40% excess inventory, fragmented supplier relationships, and inefficient logistics networks, the company was losing $45M annually.',
    challengeDetails: [
      'Excess inventory across 8 regional warehouses',
      'Fragmented supplier base with 200+ vendors',
      'Manual forecasting processes causing stockouts',
      'High logistics costs due to inefficient routing',
      'Poor visibility across supply chain',
    ],
    solution:
      'We implemented a comprehensive supply chain redesign focusing on demand-driven planning, vendor consolidation, and network optimization.',
    solutionDetails: [
      'Implemented demand-driven planning system with AI forecasting',
      'Consolidated vendor base from 200+ to 45 strategic partners',
      'Redesigned logistics network reducing distribution centers from 8 to 5',
      'Deployed real-time supply chain visibility platform',
      'Established continuous improvement governance',
    ],
    results: [
      {
        metric: 'Inventory Reduction',
        value: '35%',
        description: '$18M in working capital freed up',
      },
      {
        metric: 'Annual Cost Savings',
        value: '$45M',
        description: 'Achieved through efficiency gains',
      },
      {
        metric: 'On-time Delivery',
        value: '98%',
        description: 'Up from 87% baseline',
      },
      {
        metric: 'Forecast Accuracy',
        value: '96%',
        description: 'Improved from 78%',
      },
    ],
    process: [
      {
        phase: 'Discovery & Assessment',
        duration: '6 weeks',
        description: 'Comprehensive supply chain analysis and opportunity identification',
      },
      {
        phase: 'Design & Planning',
        duration: '8 weeks',
        description: 'Detailed roadmap development and stakeholder alignment',
      },
      {
        phase: 'Implementation',
        duration: '16 weeks',
        description: 'System deployment, process changes, and team training',
      },
      {
        phase: 'Optimization',
        duration: 'Ongoing',
        description: 'Continuous monitoring and improvement',
      },
    ],
    testimonial: {
      quote:
        'Nexus transformed our supply chain from a cost center into a competitive advantage. The results exceeded our expectations, and the team was instrumental in driving adoption across our organization.',
      author: 'John Smith',
      title: 'VP Operations',
      company: 'Global Manufacturing Corp',
    },
  },
  'fortune-500-finance-transformation': {
    slug: 'fortune-500-finance-transformation',
    title: 'Finance Shared Services Center',
    client: 'Fortune 500 Financial Services',
    industry: 'Finance',
    image: '/case-study-2-hero.jpg',
    duration: '12 months',
    teamSize: '22 consultants',
    challenge:
      'Large financial services firm with fragmented finance operations across 12 locations struggled with high processing costs, manual processes, and inconsistent quality. Finance operations consumed 8% of revenue.',
    challengeDetails: [
      'Fragmented finance operations across 12 locations',
      'Manual processes in accounts payable and receivable',
      'High cost per transaction ($2.50 vs industry benchmark $0.85)',
      'Inconsistent quality and compliance issues',
      'Limited scalability for growth',
    ],
    solution:
      'Established a centralized shared services center with RPA, process automation, and governance framework.',
    solutionDetails: [
      'Designed and built shared services center in low-cost location',
      'Implemented RPA for invoice processing and payment reconciliation',
      'Automated 60% of manual processes',
      'Established quality and compliance governance',
      'Deployed analytics and reporting dashboards',
    ],
    results: [
      {
        metric: 'Cost Reduction',
        value: '38%',
        description: '$28M annual savings',
      },
      {
        metric: 'Processing Time',
        value: '60% faster',
        description: 'Reduced cycle times significantly',
      },
      {
        metric: 'FTE Optimization',
        value: '200 roles',
        description: 'Redeployed to higher-value work',
      },
      {
        metric: 'Error Rate',
        value: '99.2%',
        description: 'Accuracy improvement',
      },
    ],
    process: [
      {
        phase: 'Process Mapping',
        duration: '8 weeks',
        description: 'Detailed analysis of all finance processes and pain points',
      },
      {
        phase: 'Design & Planning',
        duration: '10 weeks',
        description: 'Shared services model design and technology selection',
      },
      {
        phase: 'Build & Deploy',
        duration: '20 weeks',
        description: 'Center setup, system implementation, and team training',
      },
      {
        phase: 'Optimization',
        duration: 'Ongoing',
        description: 'Continuous process improvement and automation',
      },
    ],
    testimonial: {
      quote:
        'The shared services transformation delivered exceptional results. Beyond the cost savings, we gained agility and scalability for future growth. Nexus was a true partner throughout the journey.',
      author: 'Sarah Johnson',
      title: 'CFO',
      company: 'Fortune 500 Financial Services',
    },
  },
  'healthcare-operational-excellence': {
    slug: 'healthcare-operational-excellence',
    title: 'Operational Excellence Program',
    client: 'Healthcare Provider Network',
    industry: 'Healthcare',
    image: '/case-study-3-hero.jpg',
    duration: '14 months',
    teamSize: '18 consultants',
    challenge:
      'Multi-facility healthcare network faced rising operational costs, inconsistent quality across 50+ facilities, and staff burnout. Operating margins were declining despite stable patient volumes.',
    challengeDetails: [
      'Rising operational costs across 50+ facilities',
      'Inconsistent quality and patient outcomes',
      'High staff turnover and burnout',
      'Inefficient workflows and resource utilization',
      'Limited visibility into performance metrics',
    ],
    solution:
      'Implemented enterprise-wide Lean Six Sigma program with standardized processes and continuous improvement culture.',
    solutionDetails: [
      'Trained 200+ staff in Lean Six Sigma methodologies',
      'Standardized clinical and operational processes',
      'Implemented performance dashboards and KPIs',
      'Established continuous improvement governance',
      'Redesigned patient flow and resource allocation',
    ],
    results: [
      {
        metric: 'Operating Cost',
        value: '22% reduction',
        description: '$85M in annual savings',
      },
      {
        metric: 'Patient Satisfaction',
        value: '+28%',
        description: 'Improved patient experience scores',
      },
      {
        metric: 'Staff Efficiency',
        value: '+35%',
        description: 'Improved productivity and engagement',
      },
      {
        metric: 'Quality Metrics',
        value: 'Top quartile',
        description: 'Among peer organizations',
      },
    ],
    process: [
      {
        phase: 'Assessment & Training',
        duration: '10 weeks',
        description: 'Baseline assessment and Lean Six Sigma training program',
      },
      {
        phase: 'Pilot Projects',
        duration: '12 weeks',
        description: 'Launch 15 pilot improvement projects',
      },
      {
        phase: 'Scale & Standardize',
        duration: '16 weeks',
        description: 'Scale successful pilots across all facilities',
      },
      {
        phase: 'Sustain & Improve',
        duration: 'Ongoing',
        description: 'Continuous monitoring and improvement culture',
      },
    ],
    testimonial: {
      quote:
        'Nexus helped us create a culture of continuous improvement. Our staff embraced the methodologies, and the results speak for themselves. We are now a model for operational excellence in healthcare.',
      author: 'Dr. Michael Chen',
      title: 'Chief Operating Officer',
      company: 'Healthcare Provider Network',
    },
  },
  'industrial-erp-transformation': {
    slug: 'industrial-erp-transformation',
    title: 'Digital ERP Implementation',
    client: 'Industrial Equipment Manufacturer',
    industry: 'Manufacturing',
    image: '/case-study-4-hero.jpg',
    duration: '16 months',
    teamSize: '25 consultants',
    challenge:
      'Industrial equipment manufacturer operated with legacy systems across 8 plants, preventing real-time visibility, limiting agility, and increasing operational risk. System integration was critical for growth.',
    challengeDetails: [
      'Legacy systems across 8 manufacturing plants',
      'No real-time visibility into operations',
      'Manual data entry and reconciliation',
      'Limited reporting and analytics',
      'Inability to scale for growth',
    ],
    solution:
      'Implemented cloud-based ERP system with comprehensive change management and training program.',
    solutionDetails: [
      'Selected and implemented cloud-based ERP platform',
      'Integrated all 8 plants into unified system',
      'Migrated 15 years of historical data',
      'Deployed real-time dashboards and reporting',
      'Trained 500+ users across organization',
    ],
    results: [
      {
        metric: 'System Integration',
        value: '100%',
        description: 'All plants on single platform',
      },
      {
        metric: 'Data Accuracy',
        value: '99.8%',
        description: 'Improved from 94%',
      },
      {
        metric: 'Reporting Speed',
        value: '80% faster',
        description: 'Real-time vs monthly reports',
      },
      {
        metric: 'ROI Timeline',
        value: '14 months',
        description: 'Achieved ahead of schedule',
      },
    ],
    process: [
      {
        phase: 'Planning & Design',
        duration: '12 weeks',
        description: 'Requirements gathering and system design',
      },
      {
        phase: 'Configuration & Build',
        duration: '16 weeks',
        description: 'System configuration and customization',
      },
      {
        phase: 'Testing & Training',
        duration: '12 weeks',
        description: 'UAT, training, and go-live preparation',
      },
      {
        phase: 'Go-Live & Support',
        duration: '8 weeks',
        description: 'Phased rollout and post-go-live support',
      },
    ],
    testimonial: {
      quote:
        'The ERP transformation gave us the visibility and agility we needed to compete globally. Nexus managed the complexity expertly and ensured smooth adoption across our organization.',
      author: 'Robert Williams',
      title: 'President & CEO',
      company: 'Industrial Equipment Manufacturer',
    },
  },
};

export default function CaseStudyPage() {
  const params = useParams();
  const slug = params.slug as string;
  const study = caseStudies[slug];

  if (!study) {
    return (
      <main className="bg-white">
        <section className="pt-32 pb-20 px-6 md:px-12 text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Case Study Not Found</h1>
          <Link href="/work">
            <button className="text-blue-600 font-semibold hover:text-blue-700">
              ← Back to Work
            </button>
          </Link>
        </section>
      </main>
    );
  }

  return (
    <main className="bg-white">
      {/* Back Link */}
      <div className="pt-24 px-6 md:px-12 bg-white animate-fade-in">
        <div className="max-w-4xl mx-auto">
          <Link href="/work" className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mb-8 transform hover:translate-x-1">
            <ArrowLeft size={18} />
            Back to Work
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <section className="px-6 md:px-12 pb-12 animate-fade-in-up">
        <div className="max-w-4xl mx-auto">
          <div className="relative h-96 rounded-lg overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
            <Image
              src={study.image}
              alt={study.title}
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              quality={90}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* Header */}
      <section className="px-6 md:px-12 pb-12 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="inline-block bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              {study.industry}
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-4 font-serif animate-slide-down">
            {study.title}
          </h1>

          <p className="text-2xl text-slate-600 mb-8">{study.client}</p>

          {/* Project Details */}
          <div className="grid md:grid-cols-2 gap-6 py-8 border-t border-b border-slate-200">
            <div className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
              <Calendar className="text-blue-600" size={24} />
              <div>
                <div className="text-sm text-slate-600">Duration</div>
                <div className="text-lg font-semibold text-slate-900">{study.duration}</div>
              </div>
            </div>
            <div className="flex items-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Users className="text-blue-600" size={24} />
              <div>
                <div className="text-sm text-slate-600">Team Size</div>
                <div className="text-lg font-semibold text-slate-900">{study.teamSize}</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="px-6 md:px-12 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif animate-slide-down">The Challenge</h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {study.challenge}
          </p>

          <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            {study.challengeDetails.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${0.2 + idx * 0.05}s` }}>
                <div className="text-blue-600 mt-1">•</div>
                <p className="text-slate-700">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 font-serif animate-slide-down">Our Solution</h2>
          <p className="text-lg text-slate-700 mb-8 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {study.solution}
          </p>

          <div className="space-y-3 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            {study.solutionDetails.map((detail, idx) => (
              <div key={idx} className="flex items-start gap-3 animate-fade-in-up" style={{ animationDelay: `${0.2 + idx * 0.05}s` }}>
                <CheckCircle className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                <p className="text-slate-700">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="px-6 md:px-12 py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 font-serif animate-slide-down">Results Achieved</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {study.results.map((result, idx) => (
              <div 
                key={idx} 
                className="bg-white rounded-lg p-8 border border-slate-200 hover:border-blue-400 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-scale-in"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                <div className="flex items-start gap-3 mb-3">
                  <TrendingUp className="text-blue-600 flex-shrink-0" size={24} />
                  <div>
                    <div className="text-4xl font-bold text-blue-600 font-serif">
                      {result.value}
                    </div>
                    <div className="text-sm text-slate-600 mt-1">{result.metric}</div>
                  </div>
                </div>
                <p className="text-slate-700">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 mb-12 font-serif animate-slide-down">Implementation Process</h2>

          <div className="space-y-8">
            {study.process.map((item, idx) => (
              <div key={idx} className="flex gap-8 animate-fade-in-up" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-lg transform hover:scale-110 transition-transform duration-300">
                    {idx + 1}
                  </div>
                  {idx < study.process.length - 1 && (
                    <div className="w-1 h-20 bg-blue-200 mt-4" />
                  )}
                </div>

                <div className="pb-8">
                  <h3 className="text-xl font-bold text-slate-900 mb-2 font-serif">
                    {item.phase}
                  </h3>
                  <p className="text-sm text-blue-600 font-semibold mb-2">{item.duration}</p>
                  <p className="text-slate-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-6 md:px-12 py-16 bg-slate-900">
        <div className="max-w-4xl mx-auto animate-fade-in-up">
          <div className="bg-white/10 backdrop-blur-md rounded-lg p-12 border border-white/20 hover:border-blue-400/50 transition-all duration-300 transform hover:scale-105">
            <div className="text-4xl text-blue-400 mb-6">"</div>
            <p className="text-2xl text-white mb-8 leading-relaxed font-serif">
              {study.testimonial.quote}
            </p>
            <div>
              <p className="text-white font-semibold">{study.testimonial.author}</p>
              <p className="text-slate-300">{study.testimonial.title}</p>
              <p className="text-slate-300">{study.testimonial.company}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Related Work CTA */}
      <section className="px-6 md:px-12 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 font-serif">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg text-slate-600 mb-8">
            Let's discuss how we can deliver similar results for your enterprise
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95">
                Schedule Consultation
              </button>
            </Link>
            <Link href="/work">
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105 active:scale-95">
                View More Work
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Droplets, Heart, CheckCircle2, ArrowRight, Salad, Scan } from 'lucide-react';

const caseStudies = [
  {
    icon: Droplets,
    category: 'Marketing Technology Platform',
    name: 'FreeLiquid',
    tagline: 'Smart Area-Based Water Bottle Marketing & Lead Generation Platform',
    challenge:
      'Businesses struggled to generate measurable local leads through traditional offline advertising channels. Existing marketing campaigns lacked real-time engagement tracking and verified lead collection.',
    solution:
      'Virtualy Labs designed and developed FreeLiquid, a SaaS platform that connects businesses, distributors, water suppliers, and consumers through QR-enabled branded water bottle campaigns. The platform enables businesses to launch area-specific marketing campaigns, manage distribution, track engagement, generate qualified leads, and monitor campaign performance from a centralized dashboard.',
    impact:
      'Created a measurable bridge between offline advertising and digital lead generation while improving campaign visibility and lead quality.',
    features: [
      'Campaign Management',
      'Area-Based Targeting',
      'QR-Based Lead Capture',
      'Distribution Planning',
      'Analytics Dashboard',
      'Supplier Management',
      'Performance Tracking',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'MongoDB', 'Cloud Infrastructure'],
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=900',
    accent: '#2563eb',
    accentLight: 'rgba(37,99,235,0.08)',
    accentBorder: 'rgba(37,99,235,0.2)',
    tagBg: 'bg-blue-50 text-blue-700 border-blue-200',
    catColor: 'text-blue-600',
  },
  {
    icon: Heart,
    category: 'Healthcare Management Platform',
    name: 'CareSphere',
    tagline: 'Digital Senior Care & Assessment Management Platform',
    challenge:
      'Healthcare organizations relied on fragmented processes for resident onboarding, caregiver coordination, assessments, and reporting, creating inefficiencies and compliance challenges.',
    solution:
      'Virtualy Labs built CareSphere, a secure multi-tenant healthcare platform that digitizes resident management, caregiver assignments, assessment workflows, communication, and operational reporting. The platform enables healthcare organizations to manage senior care operations through a centralized digital ecosystem.',
    impact:
      'Improved operational efficiency, enhanced resident engagement, streamlined assessments, and provided healthcare organizations with real-time visibility into care operations.',
    features: [
      'Multi-Tenant Architecture',
      'Resident Management',
      'Caregiver Assignment',
      'Digital Assessments',
      'Analytics & Reporting',
      'Role-Based Access Control',
      'Compliance Monitoring',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'JWT Authentication'],
    image: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=900',
    accent: '#0d9488',
    accentLight: 'rgba(13,148,136,0.08)',
    accentBorder: 'rgba(13,148,136,0.2)',
    tagBg: 'bg-teal-50 text-teal-700 border-teal-200',
    catColor: 'text-teal-600',
  },
  {
    icon: Scan,
    category: 'AI Healthcare Platform',
    name: 'AI Skin Analysis Platform',
    tagline: 'Computer Vision-Based Skin Health Assessment',

    challenge:
      'Users often struggle to access accurate and personalized skin health assessments without visiting specialists. Existing solutions lacked real-time analysis, explainable recommendations, and progress tracking.',

    solution:
      'Virtualy Labs developed an AI-powered skin analysis platform leveraging computer vision and machine learning to assess skin conditions, calculate skin age, generate personalized skincare recommendations, and monitor user progress over time. The platform delivers real-time insights through custom facial analysis algorithms and explainable AI models.',

    impact:
      'Enabled automated skin assessments, improved user engagement through personalized recommendations, and reduced dependency on manual consultations by providing instant AI-driven insights.',

    features: [
      'Real-time Skin Analysis',
      'Skin Age Calculation',
      'Personalized Recommendations',
      'Progress Tracking',
      'Admin Analytics Dashboard',
      'Explainable AI Insights',
    ],

    tech: [
      'React.js',
      'Python',
      'DLib',
      'OpenCV',
      'FastAPI',
      'AWS',
    ],

    image:
      'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800',

    accent: '#e11d48',
    accentLight: 'rgba(225,29,72,0.08)',
    accentBorder: 'rgba(225,29,72,0.2)',

    tagBg: 'bg-rose-50 text-rose-700 border-rose-200',
    catColor: 'text-rose-600',
  },
  {
    icon: Salad,
    category: 'AI Health & Wellness Platform',
    name: 'AI-Powered Nutrition Tracker',
    tagline: 'Computer Vision-Based Calorie Estimation Application',

    challenge:
      'Tracking daily nutrition manually is time-consuming and often inaccurate. Users needed a simple way to understand calorie intake and nutritional value without extensive data entry.',

    solution:
      'Virtualy Labs built an AI-powered nutrition tracking platform that uses computer vision and machine learning to identify food items from images, estimate calorie content, and provide personalized nutritional insights. The platform combines image recognition, custom ML models, and dietary analytics to simplify healthy lifestyle management.',

    impact:
      'Improved user engagement with nutrition tracking, reduced manual effort, and delivered fast, data-driven dietary insights through intelligent food recognition.',

    features: [
      'Food Image Recognition',
      'Automatic Calorie Estimation',
      'Comprehensive Food Database',
      'Dietary Tracking',
      'Custom Machine Learning Models',
      'Progress Analytics',
    ],

    tech: [
      'React.js',
      'Python',
      'TensorFlow',
      'OpenCV',
      'FastAPI',
      'AWS',
    ],

    image:
      'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',

    accent: '#16a34a',
    accentLight: 'rgba(22,163,74,0.08)',
    accentBorder: 'rgba(22,163,74,0.2)',

    tagBg: 'bg-green-50 text-green-700 border-green-200',
    catColor: 'text-green-600',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 md:px-12 lg:px-20 bg-white overflow-x-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#040d1a] mb-5 leading-tight">
            Products We&apos;ve{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, #2563eb, #0ea5e9)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              Built & Delivered
            </span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Real-world digital products engineered for scale, usability, and measurable business impact.
          </p>
        </motion.div>

        <div className="space-y-12">
          {caseStudies.map(
            (
              { icon: Icon, category, name, tagline, challenge, solution, impact, features, tech, image, accent, accentLight, accentBorder, tagBg, catColor },
              i
            ) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.65 }}
                className="rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-400"
              >
                {/* Top bar */}
                <div
                  className="px-8 py-4 flex items-center gap-3 border-b border-slate-100"
                  style={{ background: accentLight }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shadow-sm flex-shrink-0"
                    style={{ background: accent }}
                  >
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-widest ${catColor}`}>{category}</span>
                    <div className="text-base font-bold text-[#040d1a] leading-tight">{name}</div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-5">
                  {/* Left: content — takes 3 cols */}
                  <div className="lg:col-span-3 p-8 lg:p-10">
                    <p className={`text-sm font-semibold mb-8 ${catColor}`}>{tagline}</p>

                    <div className="space-y-7">
                      {/* Challenge */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Challenge</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{challenge}</p>
                      </div>

                      {/* Solution */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Solution</h4>
                        <p className="text-slate-600 text-sm leading-relaxed">{solution}</p>
                      </div>

                      {/* Business Impact */}
                      <div
                        className="p-4 rounded-xl"
                        style={{ background: accentLight, borderLeft: `3px solid ${accent}` }}
                      >
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-2" style={{ color: accent }}>
                          Business Impact
                        </h4>
                        <p className="text-slate-700 text-sm leading-relaxed">{impact}</p>
                      </div>

                      {/* Tech */}
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Technology</h4>
                        <div className="flex flex-wrap gap-2">
                          {tech.map((t) => (
                            <span key={t} className={`text-xs px-3 py-1.5 rounded-lg border font-medium ${tagBg}`}>
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Right: features + image — takes 2 cols */}
                  <div className="lg:col-span-2 flex flex-col">
                    {/* Features */}
                    <div className="p-8 lg:p-10 bg-slate-50/70 flex-1">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-5">Key Features</h4>
                      <ul className="space-y-3">
                        {features.map((f) => (
                          <li key={f} className="flex items-start gap-3 text-sm text-slate-700">
                            <CheckCircle2
                              className="w-4 h-4 flex-shrink-0 mt-0.5"
                              style={{ color: accent }}
                            />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Image */}
                    <div className="relative h-52 lg:h-48 overflow-hidden">
                      <img
                        src={image}
                        alt={name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute bottom-4 left-6">
                        <span
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-white"
                          style={{ background: accent }}
                        >
                          Case Study
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )
          )}
        </div>
      </div>
    </section>
  );
}

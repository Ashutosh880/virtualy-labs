'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Droplets, Heart, Scan, Salad } from 'lucide-react';

const projects = [
  {
    icon: Droplets,
    name: 'FreeLiquid',
    tagline: 'Smart Area-Based Water Bottle Marketing & Lead Generation Platform',
    description:
      'An innovative SaaS platform that bridges offline marketing and digital lead generation through location-based branded water bottle campaigns. Businesses launch targeted campaigns in specific geographic areas, distribute customized water bottles with QR codes, and generate qualified leads through consumer engagement.',
    capabilities: [
      'Campaign Management',
      'QR-Based Lead Generation',
      'Area-Wise Targeting',
      'Analytics Dashboard',
      'Supplier Management',
      'Distribution Planning',
      'Real-Time Reporting',
    ],
    tech: ['Java', 'Spring Boot', 'React.js', 'MongoDB', 'REST APIs', 'Cloud Infrastructure'],
    color: 'from-blue-600/10 to-sky-400/10',
    border: 'border-blue-100',
    accent: 'text-blue-600',
    badgeBg: 'bg-blue-50 text-blue-700 border-blue-200',
    image: 'https://images.pexels.com/photos/1000084/pexels-photo-1000084.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Heart,
    name: 'CareSphere',
    tagline: 'Digital Senior Care & Assessment Management Platform',
    description:
      'A comprehensive multi-tenant healthcare management platform designed to streamline senior care operations, resident onboarding, caregiver coordination, digital assessments, compliance tracking, and healthcare analytics. Built to meet stringent healthcare data standards.',
    capabilities: [
      'Multi-Tenant Healthcare Management',
      'Resident Onboarding',
      'Caregiver Management',
      'Assessment Scheduling',
      'Healthcare Analytics',
      'Secure Reporting',
      'Compliance Monitoring',
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'AWS', 'JWT Authentication', 'Cloud Services'],
    color: 'from-teal-600/10 to-green-400/10',
    border: 'border-teal-100',
    accent: 'text-teal-600',
    badgeBg: 'bg-teal-50 text-teal-700 border-teal-200',
    image: 'https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Scan,
    name: 'AI Skin Analysis Platform',
    tagline: 'Computer Vision-Based Skin Health Assessment',
    description:
      'A comprehensive skin analysis platform using computer vision and machine learning to provide personalized skincare recommendations, progress tracking, and health insights. Custom facial analysis algorithms deliver explainable AI-driven results in real time.',
    capabilities: [
      'Real-time Skin Analysis',
      'Skin Age Calculation',
      'Personalized Recommendations',
      'Progress Tracking',
      'Admin Analytics',
      'Explainable AI',
    ],
    tech: ['React', 'Python', 'DLib', 'OpenCV', 'FastAPI', 'AWS'],
    highlights: [
      'Custom facial analysis algorithms',
      'Real-time image processing pipelines',
      'Recommendation engine with explainable AI',
      'Comprehensive progress tracking system',
    ],
    color: 'from-rose-600/10 to-orange-400/10',
    border: 'border-rose-100',
    accent: 'text-rose-600',
    badgeBg: 'bg-rose-50 text-rose-700 border-rose-200',
    image: 'https://images.pexels.com/photos/3985360/pexels-photo-3985360.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Salad,
    name: 'AI-Powered Nutrition Tracker',
    tagline: 'Computer Vision-Based Calorie Estimation Application',
    description:
      'An intelligent nutrition tracking application that leverages machine learning and computer vision to automatically estimate calorie content from food images, providing users with accurate nutritional insights and personalized dietary guidance.',
    capabilities: [
      'Image Recognition',
      'Calorie Estimation',
      'Food Database',
      'Dietary Tracking',
      'Custom ML Models',
      'Progress Analytics',
    ],
    tech: ['React', 'Python', 'TensorFlow', 'OpenCV', 'FastAPI', 'AWS'],
    highlights: [
      'Custom computer vision models',
      'Efficient image processing pipelines',
      'Scalable ML inference infrastructure',
      'Intuitive nutrition tracking UI',
    ],
    color: 'from-green-600/10 to-emerald-400/10',
    border: 'border-green-100',
    accent: 'text-green-600',
    badgeBg: 'bg-green-50 text-green-700 border-green-200',
    image: 'https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            Featured Projects
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#040d1a] mb-5 leading-tight">
            Products We've{' '}
            <span className="text-gradient">Built & Delivered</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Real-world digital products engineered for scale, usability, and measurable business impact.
          </p>
        </motion.div>

        <div className="space-y-10">
          {projects.map((project, i) => {
            const { icon: Icon, name, tagline, description, capabilities, tech, color, border, accent, badgeBg, image } = project;
            return (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className={`rounded-3xl border ${border} overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300`}
            >
              <div className={`grid lg:grid-cols-2 bg-gradient-to-br ${color}`}>
                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${accent}`} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-[#040d1a]">{name}</h3>
                      <p className={`text-sm font-medium ${accent}`}>{tagline}</p>
                    </div>
                  </div>

                  <p className="text-slate-600 leading-relaxed mb-8">{description}</p>

                  <div className="mb-8">
                    <h4 className="text-sm font-semibold text-[#040d1a] mb-4 uppercase tracking-wide">Key Capabilities</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {capabilities.map((c) => (
                        <div key={c} className="flex items-center gap-2 text-sm text-slate-600">
                          <span className={`w-1.5 h-1.5 rounded-full ${accent.replace('text-', 'bg-')} flex-shrink-0`} />
                          {c}
                        </div>
                      ))}
                    </div>
                  </div>

                  {'highlights' in project && project.highlights && (
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-[#040d1a] mb-4 uppercase tracking-wide">Technical Highlights</h4>
                      <div className="space-y-2">
                        {project.highlights.map((h: string) => (
                          <div key={h} className="flex items-center gap-2 text-sm text-slate-600">
                            <span className="text-[#0ea5c8]">★</span>
                            {h}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  <div>
                    <h4 className="text-sm font-semibold text-[#040d1a] mb-3 uppercase tracking-wide">Technology</h4>
                    <div className="flex flex-wrap gap-2">
                      {tech.map((t) => (
                        <span key={t} className={`text-xs px-3 py-1 rounded-lg border font-medium ${badgeBg}`}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Image */}
                <div className={`relative h-64 lg:h-auto ${i % 2 === 1 ? 'lg:order-first' : ''}`}>
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-6 right-6">
                    <span className="px-4 py-2 bg-white/90 backdrop-blur-sm rounded-xl text-sm font-semibold text-[#040d1a] shadow-sm flex items-center gap-1.5">
                      <ExternalLink className="w-3.5 h-3.5" />
                      Case Study
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

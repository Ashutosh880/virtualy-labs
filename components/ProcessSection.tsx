'use client';

import { motion } from 'framer-motion';
import { Search, Layers, Palette, Code2, TestTube2, Rocket } from 'lucide-react';

const steps = [
  {
    icon: Search,
    number: '01',
    title: 'Discovery & Consultation',
    description: 'We start by deeply understanding your business goals, technical requirements, existing systems, and success criteria before writing a single line of code.',
  },
  {
    icon: Layers,
    number: '02',
    title: 'Solution Architecture',
    description: 'Our architects design a robust, scalable technical blueprint — selecting the right technologies, infrastructure, and patterns to match your long-term vision.',
  },
  {
    icon: Palette,
    number: '03',
    title: 'Design & Planning',
    description: 'We craft intuitive user experiences and build detailed delivery plans with sprint timelines, milestones, and clear communication cadences.',
  },
  {
    icon: Code2,
    number: '04',
    title: 'Development & Integration',
    description: 'Engineering teams execute in focused sprints, integrating APIs, services, and third-party systems with full visibility at every stage.',
  },
  {
    icon: TestTube2,
    number: '05',
    title: 'Testing & Quality Assurance',
    description: 'Comprehensive automated and manual testing ensures your product performs reliably, securely, and exactly to specification before release.',
  },
  {
    icon: Rocket,
    number: '06',
    title: 'Deployment & Support',
    description: 'We manage production deployment, monitor live systems, and provide ongoing support so your product continues to evolve and scale.',
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
            How We Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#040d1a] mb-5 leading-tight">
            A Delivery Process Built for{' '}
            <span className="text-gradient">Predictable Success</span>
          </h2>
          <p className="text-slate-500 text-lg max-w-2xl mx-auto">
            Six structured phases that take your idea from concept to production with clarity and confidence.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#2563b0]/20 to-transparent" />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map(({ icon: Icon, number, title, description }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative group"
              >
                {/* Step number badge */}
                <div className="relative z-10 flex items-center gap-4 mb-5">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#2563b0] to-[#0ea5c8] flex items-center justify-center shadow-lg shadow-[#2563b0]/20 flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-4xl font-bold text-slate-100 group-hover:text-[#2563b0]/20 transition-colors duration-300 select-none">
                    {number}
                  </span>
                </div>

                <h3 className="text-lg font-semibold text-[#040d1a] mb-3">{title}</h3>
                <p className="text-slate-500 leading-relaxed text-sm">{description}</p>

                {/* Arrow for large screens */}
                {i < steps.length - 1 && (i + 1) % 3 !== 0 && (
                  <div className="hidden lg:block absolute -right-4 top-7 text-[#2563b0]/30 text-xl">→</div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

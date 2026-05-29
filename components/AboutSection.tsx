'use client';

import { motion, Variants } from 'framer-motion';
import { Users, Layers, Globe, Code2, Database, Paintbrush, TestTube2, CloudCog, BarChart3 } from 'lucide-react';

const roles = [
  { icon: Layers, label: 'Solution Architects' },
  { icon: Users, label: 'Technical Consultants' },
  { icon: Code2, label: 'Full Stack Developers' },
  { icon: Globe, label: 'AI Engineers' },
  { icon: CloudCog, label: 'DevOps Engineers' },
  { icon: Paintbrush, label: 'UI/UX Designers' },
  { icon: TestTube2, label: 'QA Specialists' },
  { icon: Database, label: 'Data Engineers' },
  { icon: BarChart3, label: 'Cloud Engineers' },
];

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  }),
};

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-[#2563b0]/8 text-[#2563b0] text-sm font-semibold mb-5 border border-[#2563b0]/15">
              About Our Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#040d1a] mb-6 leading-tight">
              Technology Team Built for{' '}
              <span className="text-gradient">Modern Businesses</span>
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed mb-6">
              We are a multidisciplinary technology team specializing in software architecture, product development, cloud engineering, AI integration, and digital transformation.
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">
              Our experience spans startups, mid-sized businesses, and enterprise organizations across healthcare, fintech, SaaS, e-commerce, logistics, manufacturing, and customer engagement platforms.
            </p>
            <p className="text-slate-600 leading-relaxed mb-10">
              From requirement analysis and product architecture to development, deployment, and ongoing support, we provide complete software delivery services under one roof. We work collaboratively with clients worldwide and align our delivery process with global time zones.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 p-5 rounded-xl bg-[#f8fafc] border border-slate-100">
                <div className="text-2xl font-bold text-[#040d1a] mb-1">Global</div>
                <div className="text-sm text-slate-500">Client base across 4 continents</div>
              </div>
              <div className="flex-1 p-5 rounded-xl bg-[#f8fafc] border border-slate-100">
                <div className="text-2xl font-bold text-[#040d1a] mb-1">Full-Cycle</div>
                <div className="text-sm text-slate-500">From ideation to deployment</div>
              </div>
            </div>
          </motion.div>

          {/* Right — Team roles grid */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#2563b0]/5 to-[#0ea5c8]/5 rounded-3xl" />
            <div className="relative p-8 rounded-3xl border border-slate-100">
              <h3 className="text-lg font-semibold text-[#040d1a] mb-6">Our Team Includes</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {roles.map(({ icon: Icon, label }, i) => (
                  <motion.div
                    key={label}
                    custom={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-100 hover:border-[#2563b0]/30 hover:shadow-sm transition-all duration-200"
                  >
                    <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2563b0]/10 to-[#0ea5c8]/10 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-4 h-4 text-[#2563b0]" />
                    </div>
                    <span className="text-sm font-medium text-[#040d1a]">{label}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
